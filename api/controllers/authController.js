const User = require("../models/User");
const Role = require("../models/Role");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const sendEmail = require("../helpers/senEmail");
// method : post
// URL: api/auth/register
// access : public
exports.register = async (req, res, next) => {
    // make register
    if (
        req.body.username !== "" &&
        req.body.email !== "" &&
        req.body.password !== ""
    ) {
        // verify if email already taken
        const emailTaken = await User.findOne({ email: req.body.email });
        // hash the password
        const hashPassword = await bcrypt.hash(
            req.body.password,
            await bcrypt.genSalt(10)
        );
        // const hashPassword = req.body.password
        // get role id
        let userRole = await Role.findOne({ role: req.body.role });
        // set a default role if the user didn't set the role
        let defaultRole = await Role.findOne({ role: "customer" });
        if (userRole == null) {
            userRole = {
                _id: defaultRole._id,
                role: defaultRole.role,
            };
        }
        if (!emailTaken) {
            const user = new User({
                username: req.body.username,
                email: req.body.email,
                password: hashPassword,
                role: userRole._id,
            });
            try {
                await user.save();
                // token for email verification
                const token = jwt.sign(
                    { _id: user._id },
                    process.env.JWT_SECRET,
                    { expiresIn: "1h" }
                );
                sendEmail(user.email, token, "verify", "Verify Your Email ");
                res.status(200).send({
                    message: "A verefication mail just sent your inbox",
                });
            } catch (error) {
                next({
                    error: true,
                    status: 400,
                    message: "something went wrong " + error,
                });
            }
        } else {
            next({
                error: true,
                status: 400,
                message: "Email is already taken",
            });
        }
    } else {
        next({
            error: true,
            status: 400,
            message: "All the fileds are required",
        });
    }
};

// method : post
// URL: api/auth/register/verify/:token
// access : public
exports.verifyEmail = async (req, res, next) => {
    try {
        const token = req.params.token;

        const userData = jwt.verify(token, process.env.JWT_SECRET);

        User.updateOne({ _id: userData._id }, { $set: { emailIsValid: true } })
            .then(() => {
                next({
                    error: false,
                    status: 200,
                    message: "verified",
                });
            })
            .catch((err) => {
                console.log(err) && res.send("something went wrong " + err);
            });
    } catch (err) {
        next({
            error: true,
            status: 400,
            message: err.message,
        });
    }
};

// method : post
// URL: api/auth/login
// access : public
exports.login = async (req, res, next) => {
    if (req.body.email !== "" && req.body.password !== "") {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            next({
                error: true,
                status: 400,
                message: "Credintials are wrong",
            });
        }
        if (
            user.email &&
            (await bcrypt.compare(req.body.password, user.password))
        ) {
            if (user.emailIsValid) {
                const token = jwt.sign(
                    { _id: user._id },
                    process.env.JWT_SECRET,
                    { expiresIn: "24h" }
                );
                const role = await Role.findById({ _id: user.role[0] });
                res.cookie("accessToken", token, { httpOnly: false }).json({
                    message: `Hi ${user.username} u've just logged in succefully`,
                    role: role.role,
                    token,
                });
            } else {
                next({
                    error: true,
                    status: 400,
                    message:
                        "Email is not validated, Check your inbox to validate your email",
                });
            }
        } else {
            next({
                error: true,
                status: 400,
                message: "Credintials are wrong",
            });
        }
    } else {
        next({
            error: true,
            status: 400,
            message: "All the fileds are required",
        });
    }
};

// method : post
// URL: api/auth/forgetpassword
// access : public
exports.forgetPassword = async (req, res, next) => {
    if (req.body.email !== "") {
        const user = await User.findOne({ email: req.body.email });

        if (!user) {
            next({
                error: true,
                status: 400,
                message: "Email dosen't exist",
            });
        } else {
            // generate token
            const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
                expiresIn: "24h",
            });
            // send token to db
            try {
                await User.updateOne(
                    { _id: user._id },
                    { $set: { resetTokenValid: token } }
                );
            } catch (error) {
                console.log(error);
            }
            // send forget password email
            sendEmail(
                user.email,
                token,
                "resetpassword",
                "Verify Your Email To Reset Password "
            );
            next({
                error: false,
                status: 200,
                message: "A reset password mail has been sent to your inbox",
            });
        }
    } else {
        next({
            error: true,
            status: 400,
            message: "email is required",
        });
    }
};

// method : post
// URL: api/auth/resetpassword
// access : public
exports.resetPassword = async (req, res, next) => {
    if (req.body.newpassword !== "") {
        const token = req.params.token;

        const userData = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findOne({ _id: userData._id });

        const pwd = await bcrypt.hash(
            req.body.newpassword,
            await bcrypt.genSalt(10)
        );

        if (token == user.resetTokenValid) {
            User.updateOne({ _id: userData._id }, { $set: { password: pwd } })
                .then(() => {
                    next({
                        error: false,
                        status: 200,
                        message: "Password Changed Succefully",
                    });
                })
                .catch((err) => {
                    console.log(err) && res.send("something went wrong " + err);
                });
        } else {
            next({
                error: true,
                status: 400,
                message: "Token invalid",
            });
        }
    } else {
        next({
            error: true,
            status: 400,
            message: "All fileds are required",
        });
    }
};

// method : get
// URL: api/auth/logout
// access : public
exports.logout = (req, res, next) => {
    try {
        res.clearCookie("accessToken").send("log out succefully");
    } catch (err) {
        next({
            error: true,
            status: 400,
            message: err.message,
        });
    }
};

// method : get
// URL: api/auth/getRoles
// access : public
exports.getRoles = async (req, res, next) => {
    try {
        const role = await Role.find({ role: { $nin: ["manager"] } });
        res.send({ role });
    } catch (err) {
        next({
            error: true,
            status: 400,
            message: err,
        });
    }
};

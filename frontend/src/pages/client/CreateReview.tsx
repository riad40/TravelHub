import { FormContainer, Input, NavBar, Footer, Alert } from "../../components"
import { useNavigate, useParams } from "react-router-dom"
import useAuth from "../../hooks/useAuth"
import InputValidator from "../../helpers/inputValidator"
import { useState } from "react"
import { createReview } from "../../services/destinations/requests"
import { ReviewData } from "../../@types"

const Login = (): JSX.Element => {
    const [rating, setRating] = useState<string>("")
    const [comment, setComment] = useState<string>("")
    const [error, setError] = useState<string>("")
    const [success, setSuccess] = useState<string>("")

    const navigate = useNavigate()

    const { id } = useParams<{ id: string }>()

    const { auth } = useAuth()

    // input validation
    const validateInputs = (): boolean => {
        if (!InputValidator.isAllInputsFilled([rating, comment])) {
            setError("All the fileds are required")
            return false
        }
        return true
    }

    // handle submit
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!validateInputs()) return

        const data: ReviewData = {
            rating: Number(rating),
            comment,
            destination: id,
            user: auth.user.id,
        }

        const response = await createReview(auth.token, data)

        if (response?.response?.status == 400) {
            setError(response?.response?.data?.message)
            return
        }

        setError("")

        setSuccess(`${response.message} Redirecting to destinations....`)

        setTimeout(() => {
            navigate(`/destinations/${id}`)
        }, 2000)
    }

    return (
        <>
            <NavBar activeTab="profile" />
            <FormContainer title="Review This Destination">
                {error && <Alert content={error} success={false} />}
                {success && <Alert content={success} success={true} />}
                <form className="flex flex-col gap-4 w-3/4 mx-auto" onSubmit={handleSubmit}>
                    <Input
                        type="number"
                        name="rating"
                        id="rating"
                        placeholder="Rating (1-5)"
                        value={rating}
                        onChange={(e) => {
                            setRating(e.target.value)
                            setError("")
                        }}
                    />
                    <Input
                        type="text"
                        name="comment"
                        id="comment"
                        placeholder="Comment"
                        value={comment}
                        onChange={(e) => {
                            setComment(e.target.value)
                            setError("")
                        }}
                    />
                    <button className="bg-indigo-500 text-white px-4 py-2 rounded">Submit</button>
                </form>
            </FormContainer>
            <Footer />
        </>
    )
}

export default Login

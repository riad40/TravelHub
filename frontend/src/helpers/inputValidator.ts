class InputValidator {
    // check if the user filled all the filed
    static isAllInputsFilled(inputs: string[]): boolean {
        return inputs.every((input) => input !== "")
    }

    // check email regex
    static isEmailValid(email: string): boolean {
        // A basic email validation regex pattern
        const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

        return emailRegex.test(email)
    }
}

export default InputValidator

export const validateSignup = (email, password, name = "default") => {
    let isEmailValid =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
            email
        );
    let isPasswordValid =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if (name != "default") {
        let isNameValid = name?.length >= 3;
        if (!isNameValid) return "Please enter atleast 3 characters for name";
    }

    if (!isEmailValid) return "Plese enter a valid Email Id";
    if (!isPasswordValid) return "Please enter a valid password";
    return null;
};

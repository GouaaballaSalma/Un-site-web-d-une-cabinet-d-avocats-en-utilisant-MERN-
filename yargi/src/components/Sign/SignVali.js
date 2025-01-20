function Validation(values) {
    let errors = {};
    const email_pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!values.name) {
        errors.name = "Le nom ne doit pas être vide";
    } else{
        errors.name=""
    }
    if (!values.email) {
        errors.email = "L'email ne doit pas être vide";
    } else if (!email_pattern.test(values.email)) {
        errors.email = "L'email ne correspond pas";
    }

    if (!values.password) {
        errors.password = "Le mot de passe ne doit pas être vide";
    } else if (!password_pattern.test(values.password)) {
        errors.password = "Le mot de passe ne correspond pas";
    }

    return errors;
}

export default Validation;

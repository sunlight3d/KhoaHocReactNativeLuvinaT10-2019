const validateEmail = (inputEmail) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(inputEmail).toLowerCase()) ? "" : 
        "Email is not in valid format";
}
const validatePassword = (password) => {
    return (password.length > 5) ? "" : "Message must be > 5 characters"
}
export {validateEmail, validatePassword}
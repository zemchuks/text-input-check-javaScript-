document.querySelector('#login-btn').addEventListener('submit', validateLogin)

function validateLogin() {
    const emailId = document.querySelector('#email-id').value
    const passId = document.querySelector('#password-id').value

    if (emailId === '' || passId === '') {
        return showError('Email and Password Required', 'error')

    } else {
        location.assign('./check.html');
    }

}

//show error
const showError = (msg, className) => {
    const alertBox = document.querySelector('#alert')
    alertBox.classList.add("show", `${className}`);
    alertBox.textContent = `${msg}`;
    setTimeout(() => {
        alertBox.classList.remove("show", `${className}`);
    }, 2000);
}
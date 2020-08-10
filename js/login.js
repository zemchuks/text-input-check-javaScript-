document.querySelector('#login-btn').addEventListener('submit', validateLogin)

function validateLogin() {
    const emailId = document.querySelector('#email-id').value
    const passId = document.querySelector('#password-id').value

    // let string1 = emailId.replace(/\s+/g, ' ').trim().split(' ')
    // let string2 = passId.replace(/\s+/g, ' ').trim().split(' ')

    if (emailId === '' || passId === '') {
        return showError('Email and Password Required', 'error')

    } else {
        location.assign('./check.html');
    }

}

//show error
function showError(msg, className) {
    const alertBox = document.querySelector('#alert')
    alertBox.classList.add("show", `${className}`);
    alertBox.textContent = `${msg}`;
    setTimeout(() => {
        alertBox.classList.remove("show", `${className}`);
    }, 2000);
}
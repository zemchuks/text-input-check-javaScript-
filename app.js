
document.getElementById('submit').addEventListener('click', (e) => {

    // Hide results
    document.getElementById('result').style.display = 'none'

    //show loader
    document.getElementById('loading').style.display = 'block'
    setTimeout(checkMatch, 1000)

    e.preventDefault()
})

function checkMatch() {

    const firstInput = document.getElementById('textarea1').value,
        secondInput = document.getElementById('textarea2').value,
        answer = document.getElementById('answer'),
        matchBox = document.getElementById('match-box')

    let str1 = firstInput.replace(/\s+/g, ' ').trim().toLocaleLowerCase().split(' ')
    let str2 = secondInput.replace(/\s+/g, ' ').trim().toLocaleLowerCase().split(' ')

    let totalSimilarWord = new Set(str1.concat(str2)),
        percentage = 0,
        totalMatch = new Set()

    for (word of str1) {
        if (str2.includes(word)) {
            totalMatch.add(word)
            matchBox.innerHTML = 'words match'
            //show result
            document.getElementById('result').style.display = 'block'
            //hide loader
            document.getElementById('loading').style.display = 'none'
        } else {
            matchBox.innerHTML = 'words dont match'
        }
        if (firstInput === '' || secondInput === '') {
            return showError('Please provide an input', 'error')
        }
    }

    percentage = Math.round((totalMatch.size / totalSimilarWord.size) * 100)

    answer.innerText = percentage + '%'

    matchBox.innerText = Array.from(totalMatch)

}

function showError(msg, className) {
    const alertBox = document.querySelector('#alert')
    alertBox.classList.add("show", `${className}`);
    alertBox.textContent = `${msg}`;
    setTimeout(() => {
        alertBox.classList.remove("show", `${className}`);
    }, 2000);
    //hide result
    document.getElementById('result').style.display = 'none'
    //hide loader
    document.getElementById('loading').style.display = 'none'
}

// function validateLogin() {
//     const email = document.getElementById('email')
//      const password = document.getElementById('password')

//      if (email == '' || email == null) {
//         return showError('please provide', 'error')
//      } else if (password == '' || password == null){
//         return showError('Password must be at least 8 characters long', 'error')
//      }
// }


// function validateLogin() {
//     const reEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/i
//     const rePassword = /^[a-zA-Z]\w{3,14}$/i

//     const email = document.getElementById('email')
//     const password = document.getElementById('password')

//     if (!reEmail.test(email.value) || !rePassword.test(password)) {
//         document.getElementById("login").disabled = true;
//     } else {
//         document.getElementById("login").disabled = false;
//     }

// }
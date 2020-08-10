try {
    document.querySelector('#submit').addEventListener('click', function (e) {

        // Hide results
        document.querySelector('#result').style.display = 'none'

        //show loader
        document.querySelector('#loading').style.display = 'block'
        setTimeout(checkMatch, 1000)

        e.preventDefault()
    })
} catch (error) {
    console.log(error);
}


function checkMatch() {

    const firstInput = document.querySelector('#textarea1').value,
        secondInput = document.querySelector('#textarea2').value,
        answer = document.querySelector('#answer'),
        matchBox = document.querySelector('#match-box')

    if (firstInput === '' || secondInput === '') {
      
        return showError('Please provide an input in both text boxes', 'error')
    }

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
            document.querySelector('#result').style.display = 'block'
            //hide loader
            document.querySelector('#loading').style.display = 'none'

            percentage = Math.round((totalMatch.size / totalSimilarWord.size) * 100)

            answer.innerText = percentage + '%'

            matchBox.innerText = Array.from(totalMatch)
        } else {
            //hide result
            document.querySelector('#result').style.display = 'block'
            //hide loader
            document.querySelector('#loading').style.display = 'none'
            answer.innerText = ''
            matchBox.innerText = "There is no match!"
        }

    }


}


//Show
function showError(msg, className) {
    const alertBox = document.querySelector('#alert')
    alertBox.classList.add("show", `${className}`);
    alertBox.textContent = `${msg}`;
    setTimeout(() => {
        alertBox.classList.remove("show", `${className}`);
    }, 3000);
    //hide result
    document.querySelector('#result').style.display = 'none'
    //hide loader
    document.querySelector('#loading').style.display = 'none'
}


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
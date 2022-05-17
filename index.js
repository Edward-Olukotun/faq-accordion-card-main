
let drop = document.getElementById('drop1')
let dropTwo = document.getElementById('drop2')
let dropThree = document.getElementById('drop3')
let dropFour = document.getElementById('drop4')
let dropFive = document.getElementById('drop5')

invite.addEventListener('click', () => {
    invite = ' You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.'
    let text = document.createElement('p')
    text.innerText = invite
    drop.appendChild(text)
    text.addEventListener('click', () => {
        text.innerText = text.style.display = "none";
    })
})

file.addEventListener('click', () => {
    file = ' No more than 2GB. All files in your account must fit your allotted storage space.'
    let text = document.createElement('p')
    text.innerText = file
    dropTwo.appendChild(text)
    text.addEventListener('click', () => {
        text.innerText = text.style.display = "none";
    })
})
password.addEventListener('click', () => {
    password = '  Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.'
    let text = document.createElement('p')
    text.innerText = password
    dropThree.appendChild(text)
    text.addEventListener('click', () => {
        text.innerText = text.style.display = "none";
    })
})
sub.addEventListener('click', () => {
    sub = " Yes! Send us a message and we'll process your request no questions asked.."
    let text = document.createElement('p')
    text.innerText = sub
    dropFour.appendChild(text)
    text.addEventListener('click', () => {
        text.innerText = text.style.display = "none";
    })
})
support.addEventListener('click', () => {
    support = "Chat and email support is available 24/7. Phone lines are open during normal business hours."
    let text = document.createElement('p')
    text.innerText = support
    dropFive.appendChild(text)
    text.addEventListener('click', () => {
        text.innerText = text.style.display = "none";
    })
})
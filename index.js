document.addEventListener("DOMContentLoaded", (e) => {

    const loginbutton = document.getElementById('submit1')
    const signupbutton = document.getElementById('submit2')

    loginbutton.addEventListener('click', (e) => {
        location.href='profile.html'
    })

    signupbutton.addEventListener('click', (e) => {
        location.href = 'profile.html'
    })

})
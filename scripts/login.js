async function getInputsLogin() 
{
    const itensLogin = document.querySelectorAll(".input-cadastro")
    console.log(itensLogin)
    let userDataLogin = {}
    const buttonLogin = document.querySelector("#button-login-form")

    buttonLogin.addEventListener("click", async (event)=>{
        console.log("click")
        event.preventDefault()
        itensLogin.forEach(element =>{
            userDataLogin[element.name] = element.value
        })
        const userLoginDataJSON = userDataLogin.json
        console.log(JSON.stringify(userDataLogin))

        const request = await login(userDataLogin);
    })
    return userDataLogin
}


async function login(data) {
    
    const response = await fetch('http://localhost:6278/auth/login', {
        method: 'POST',
            body: JSON.stringify(data),

            headers: {
                'Content-Type': 'application/json'
            },
        }).catch((err) => console.log(err))
        console.log(JSON.stringify(data))
    
        const loginUserJson = await response.json()
        console.log(loginUserJson)
        localStorage.setItem(``)

}


getInputsLogin()
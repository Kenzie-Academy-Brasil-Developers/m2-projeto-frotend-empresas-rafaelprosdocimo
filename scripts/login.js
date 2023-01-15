
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


async function getAuthorization(token) {
    console.log(await token)
    const tokenGET = await token
    const userValidation = await fetch('http://localhost:6278/auth/validate_user',
    {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${tokenGET.token}`
        }
    })

    .then((response) => {
        return response.json()
    })

    .then((response) => {
        return response
    })

    return userValidation
}   

async function getUser(dataUser) {
    const token = JSON.parse(localStorage.getItem(`token-${dataUser.email}`))
    console.log(token.token)
    return token;
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
        localStorage.setItem(`token-${data.email}`, JSON.stringify(loginUserJson))
        const authorizedSepa = await getAuthorization(getUser(data))
        console.log(authorizedSepa.is_admin)
        if (!response.ok) {
            window.location.replace("/pages/cadastro.html")
            
        }
        else{
            localStorage.setItem("loggedUserInfo", JSON.stringify(data))

            localStorage.setItem("isLoggedBool", true)
            window.location.replace("/pages/painelDeControle.html")
            
        }
        
        

        return 


}


getInputsLogin()

//dar uma olhada no local storage e onde eles tão sendo criados.
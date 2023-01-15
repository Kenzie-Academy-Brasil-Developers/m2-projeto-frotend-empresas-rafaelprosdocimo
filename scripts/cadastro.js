async function getInputs() 
{
    const itensCadastro = document.querySelectorAll(".input-cadastro");
    console.log(itensCadastro)
    let userData = {}
    const button = document.querySelector("#button-cadastro")
    console.log(button)
    button.addEventListener("click",async (event)=>{
        console.log("click")
        event.preventDefault()
        console.log("botão")
        itensCadastro.forEach(element => {
            userData[element.name] = element.value

        });
        const userDataJSON = userData.json
        const request = await register(userData);
        console.dir(request)
    })
    return userData
}

async function register(data) {

    
    const response = await fetch('http://localhost:6278/auth/register', {
            method: 'POST',
            body: JSON.stringify(data),

            headers: {
                'Content-Type': 'application/json'
            },
        }).catch((err) => console.log(err))
        localStorage.setItem('@KenzieEmpresas:user',JSON.stringify(data))
        
        const newUserJson = await response.json()
        localStorage.setItem(`${ JSON.stringify(newUserJson.username)}`, JSON.stringify(newUserJson))

        console.log(newUserJson.error
            )
        if (!response.ok) {
            console.log(error)
            window.location.replace("/pages/login.html")
            //toast(loginDataJson.message, "#C20803");
          } else {
            //toast("Login realizado com sucesso", "#08C203");
            window.location.replace("/pages/painelDeControle.html");
          }
        

      return newUserJson;
} 


getInputs();

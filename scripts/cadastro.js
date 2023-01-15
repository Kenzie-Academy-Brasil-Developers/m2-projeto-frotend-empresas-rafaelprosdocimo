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

        localStorage.setItem('@KenzieEmpresas:user', JSON.stringify(request))
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
            
        const newUserJson = await response.json()
        console.log(newUserJson)
        if (!response.ok) {
            console.log('erro')
            //toast(loginDataJson.message, "#C20803");
          } else {
            //toast("Login realizado com sucesso", "#08C203");
            window.location.replace("/pages/painelDeControle.html");
          }
        

      return loginDataJson;
} 


getInputs();

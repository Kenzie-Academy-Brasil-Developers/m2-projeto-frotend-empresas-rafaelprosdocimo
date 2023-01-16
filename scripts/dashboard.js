
const data = localStorage.getItem("loggedUserInfo");
const convertData = JSON.parse(data)
console.log(convertData)

const dataToken = localStorage.getItem(`token-${convertData.email}`);
const convertDataToken = JSON.parse(dataToken)
const tokenUser = convertDataToken.token
console.log(tokenUser)

async function getAuthorization(token) {
    console.log(await token)
    const tokenGET = await token
    console.log(await token.token)

    const headerReq = {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${tokenGET.token}`
        }
    }
    console.log(headerReq)
    const userValidation = await fetch('http://localhost:6278/users/profile', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${tokenGET.token}`
        }
    }
    )
    

    .then((response) => {
        return response.json()
    })

    .then((response) => {
        return response
    })

    return userValidation
}   
let renderDepartment;
let renderWork;
const userInfo = (await getAuthorization(convertDataToken));
console.log(userInfo)
if (userInfo.kind_of_work == null) {
    renderWork = "";
}
else {
    renderWork = userInfo.kind_of_work;  
}


if (userInfo.department_uuid == null) {
    renderDepartment = `
    <section id="section-conexoes">           
        <h2 id="h2-encontrado">Você ainda não foi encontrado</h2>
    </section>
    `;
}
else {
    renderDepartment = userInfo.department_uuid;  
}

async function renderUserPage() {
    const mainDoc = document.querySelector("main")
    console.log(mainDoc)
    console.log(renderDepartment)
    if (renderDepartment == `
    <section id="section-conexoes">           
        <h2 id="h2-encontrado">Você ainda não foi encontrado</h2>
    </section>
    `) {
        mainDoc.insertAdjacentHTML("afterbegin",
        `
        <section id="section-user">
                <div>
                    <h2>${userInfo.username}</h2>
                    <div id="div-user-contents">
                        <p>Email: ${userInfo.email}</p>
                        <p>${userInfo.professional_level}</p>
                        <p>${renderWork}</p>
                    </div>
                </div>
                <button id="button-edit"><img src="/assets/iconelapis.png" alt=""></button>
            </section>
        `)
    
    }
    editarPerfil()

    //part 2 userPage

    mainDoc.insertAdjacentHTML("beforeend",
    renderDepartment
    )
}

renderUserPage();


async function getAuthorizationDepartmentList(token) {
    console.log(await token)
    const tokenGET = await token
    console.log(await token)
    if (userInfo.department_uuid == null) {
        return
    }
    else
    {
        const headerReq = {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${tokenGET.token}`
            }
        }
        console.log(headerReq)
        const userValidation = await fetch('http://localhost:6278/users/departments', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${tokenGET.token}`
            }
        }
        )
        

        .then((response) => {
            return response.json()
        })

        .then((response) => {
            return response
        })

        return userValidation
    }
}   
const departmentListAuthorization = (await getAuthorizationDepartmentList(convertDataToken));
if (!(departmentListAuthorization == undefined)) {
    console.log("uo")
    //http://localhost:6278/users/departments/coworkers
    //if user is linked to a company then:
    async function getAuthorizationDepartmentCoworkers(token) {
        console.log(await token)
        const tokenGET = await token
        const userValidation = await fetch('http://localhost:6278/users/departments/coworkers',
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

}
console.log(departmentListAuthorization)


async function editarPerfil() {
    const buttonEditar = document.querySelector("#button-edit")
    console.log(buttonEditar)
    buttonEditar.addEventListener("click", async (event)=>{
        console.log("click")
        const mainDoc = document.querySelector("main")

        mainDoc.insertAdjacentHTML("beforeend",
        `
            <div id=div-wrapper-modal class="modal">
                <div class="div-modal">
                    <button id="button-close-edit" class="close-button-modal"><img src="/assets/close_FILL0_wght400_GRAD0_opsz48 1.png" alt=""></button>
                    <h2 class="h2-modal">Editar Perfil</h2>
                    <form action="" class="form-editar">
                        <input type="text" name="" class="input-modal" placeholder="Seu Nome">
                        <input type="text" name="" class="input-modal" placeholder="Seu e-mail">
                        <input type="text" name="" class="input-modal" placeholder="Sua senha">
                        <button  class="button-modal">Editar Perfil</button>
                    </form>
                </div>
            </div >
        `
        )

        buttonCloseModal();

        
    })
}
function buttonCloseModal() {
    const buttonCloseEditar = document.querySelector(".close-button-modal")
    console.log(buttonCloseEditar) //Preciso pegar o botão de fechar
    buttonCloseEditar.addEventListener("click", ()=>{
        console.log("click")
        const divErase = document.querySelector("main")
        divErase.innerHTML = ""
        renderUserPage()
    })
}



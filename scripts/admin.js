const buttonCriarDepartment = document.querySelector("#button-criar")
const buttonEditarDepartamento = document.querySelectorAll(".img-lapis")
const buttonDeletarDepartamento = document.querySelectorAll(".img-delete")
const buttonDeletarUserDepartamento = document.querySelectorAll(".img-delete2")

const mainDoc = document.querySelector("main")

console.log(buttonEditarDepartamento)

const modalCriarDepartment =         `
<div class="modal">
        <div class="div-modal" id="criar-departamento">
            <button class="close-button-modal"><img src="/assets/close_FILL0_wght400_GRAD0_opsz48 1.png" alt=""></button>
            <h2 class="h2-modal">Criar Departamento</h2>
            <form action="" class="form-editar">
                <input type="text" name="" class="input-modal" placeholder="Nome do departamento">
                <input type="text" name="" class="input-modal" placeholder="Descrição">
                <select class="input-modal" name="" id="">
                    <option  id="option-placeholder" value="" disabled selected>Selecionar Empresa</option>

                </select>
                
                <button class="button-modal">Criar Departamento</button>
            </form>
        </div>
    </div >
`
;
const criarModalEditDepartment = `
<div class="modal">
                <div class="div-modal" id="div-editar-departamento">
                    <button class="close-button-modal"><img src="/assets/close_FILL0_wght400_GRAD0_opsz48 1.png" alt=""></button>

                    <h2 id="department-name">Nome do departamento</h2>
                    <div id="header-modal-edit">
                        <div id="description-modal-edit">
                            <h3 id="h3-modal-edit">Descrição do departamento</h3>
                            <p id="p-modal-edit">Empresa pertencente</p>
                        </div>
                        <div id="div-form-modal-edit">
                            <form action="" id="form-modal-edit">
                                <select class="input-modal" name="" id="select-modal-edit">
                                    <option  id="option-placeholder" value="" disabled selected>Selecionar Usuário</option>

                                </select>
                                <button id="button-modal-edit">Contratar</button>
                            </form>
                        </div>
                    </div>
                    <div id="div-modal-edit-wrapper">
                        <ul id="ul-modal-edit">
                            <li class="card-departamento" class="li-modal-card">
                                <h3 class="h3-departamento" class="h3-modal-card">Username</h3>
                                <p class="p-descrição" class="p-modal-card">Pleno</p>
                                <p class="p-nome" class="p2-modal-card">Company Name</p>
                                <button class="button-modal-card" class="input-modal" >Desligar</button>
                            </li>
                            <li class="card-departamento" class="li-modal-card">
                                <h3 class="h3-departamento" class="h3-modal-card">Username</h3>
                                <p class="p-descrição" class="p-modal-card">Pleno</p>
                                <p class="p-nome" class="p2-modal-card">Company Name</p>
                                <button class="button-modal-card" class="input-modal" >Desligar</button>
                            </li>
                            <li class="card-departamento" class="li-modal-card">
                                <h3 class="h3-departamento" class="h3-modal-card">Username</h3>
                                <p class="p-descrição" class="p-modal-card">Pleno</p>
                                <p class="p-nome" class="p2-modal-card">Company Name</p>
                                <button class="button-modal-card" class="input-modal" >Desligar</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div >
`;
const criarModalDeleteDepartment = `
<div class="modal">
                    <div class="div-modal" id="div-remover-departamento">
                        <button class="close-button-modal"><img src="/assets/close_FILL0_wght400_GRAD0_opsz48 1.png" alt=""></button>
                        <h2 class="h2-modal" id="remover-usuario">Realmente deseja deletar o departamento NOME? e demitir seus funcionários?</h2>
                        <div id="div-excluir">    
                            <button class="button-modal" id="confirm-button" id="confirmar-deletar-departamento">Confirmar</button>
                        </div>
                    </div>
            </div >
`;


const criarModalDeleteUser = `<div class="modal">
<div class="div-modal" id="div-remover-usuario">
    <button class="close-button-modal"><img src="/assets/close_FILL0_wght400_GRAD0_opsz48 1.png" alt=""></button>
    <h2 class="h2-modal" id="remover-usuario">Realmente deseja remover o usuário NOME?</h2>
    <div id="div-excluir">    
        <button class="button-modal" id="confirm-button" id="confirmar-deletar-user">Deletar</button>
    </div>
</div>
</div >`;


function closeButton() {
    const closedButtons = document.querySelectorAll(".close-button-modal");
    console.log(closeButton)
    closedButtons.addEventListener("click",()=>{
        mainDoc.innerHTML = ``
    })
}


function clicks() {

    

    buttonCriarDepartment.addEventListener("click",()=>{
        console.log("click")
        mainDoc.insertAdjacentHTML("beforeend", 
            modalCriarDepartment
        )
        closeButton()
    })
    buttonEditarDepartamento.forEach(element => {
        element.addEventListener("click",()=>{
            console.log("click")
            mainDoc.insertAdjacentHTML("beforeend", 
            criarModalEditDepartment
        )
        })
    })
    buttonDeletarDepartamento.forEach(element => {
        element.addEventListener("click",()=>{
            console.log("click")
            mainDoc.insertAdjacentHTML("beforeend", 
            criarModalDeleteDepartment
        )
        })
    });
    buttonDeletarUserDepartamento.forEach(element => {
        element.addEventListener("click",()=>{
            console.log("click")
            mainDoc.insertAdjacentHTML("beforeend", 
            criarModalDeleteUser

        )
        })
    });
}

clicks();


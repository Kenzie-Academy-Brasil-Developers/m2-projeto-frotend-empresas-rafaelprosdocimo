const getAllCompanies = async () => {
    const allCompanies = await fetch('http://localhost:6278/companies',
    {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    })

    .then((response) => {
        return response.json()
    })

    .then((response) => {
        return response
    })

    return allCompanies
}   

const getAllSectors = async () => {
    const allSectors = await fetch('http://localhost:6278/sectors',
    {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    })

    .then((response) => {
        return response.json()
    })

    .then((response) => {
        return response
    })

    return allSectors
}   

const setores = await getAllSectors();


const companies = await getAllCompanies()
console.log(companies)

async function renderizaCompany(array) {

    const ulTag = document.querySelector("#ul-empresas");
  
    ulTag.innerHTML = "";
  
    array.forEach(element => {
        ulTag.insertAdjacentHTML(
            "beforeend",
            `
            <li class="li-card-empresa">
                <h2 class="h2-nome-empresa">${element.name}</h2>
                <div class="div-card-info">
                    <p class="p-horas">${element.opening_hours}</p>
                    <p class="p-setor">${element.sectors.description}</p>
                </div>
            </li>
         `
          );
        
    });
  
  }

renderizaCompany(companies);

const selectPlace = document.getElementById("select-setores");
console.log(selectPlace)

console.log(setores);

async function renderSelect() {
    const selectButton = document.querySelector("#button-dropdown")
    const ulTag = document.querySelector("#ul-empresas")
    let booleanoSelect = false;
    selectButton.addEventListener("click",  () =>{
        console.log("clock")
        ulTag.insertAdjacentHTML("beforebegin", 
        `
        <select name="setores" id="select-setor">
            <option id="option-placeholder" value="" disabled selected>Todos os Setores</option>
                        
        </select>
        `
        )
        const selectPlace = document.querySelector("select");
        if (booleanoSelect == false) {
            setores.forEach(element => {
                
                selectPlace.insertAdjacentHTML("beforeend",
                    `
                    <option value="${element.description}">${element.description}</option>
                    `
                )
            })
        }
        reRenderizarSetores(setores);


    })
}

renderSelect();


function reRenderizarSetores(array) {
    const selectPlace = document.querySelector("select");
    

    console.log(selectPlace)
    selectPlace.addEventListener("change",async ()=>{
        const ulTag = document.querySelector("#ul-empresas")

        ulTag.innerHTML = ("")
        console.log(selectPlace.value)
        console.log(`http://localhost:6278/companies/${selectPlace.value}`)
        
        const getAllCompaniesBySector = async () => {
            const allCompaniesBySector = await fetch(`http://localhost:6278/companies/${selectPlace.value}`,
            {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                }
            })
        
            .then((response) => {
                return response.json()
            })
        
            .then((response) => {
                return response
            })
        
            return allCompaniesBySector
        }   
        const companiesBySector = await getAllCompaniesBySector();
        console.log(companiesBySector)
        renderizaCompany(companiesBySector);
    })



       


}





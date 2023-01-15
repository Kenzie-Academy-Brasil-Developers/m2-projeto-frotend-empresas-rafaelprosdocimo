
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
    renderDepartment = "";
}
else {
    renderDepartment = userInfo.department_uuid;  
}

async function renderUserPage() {
    const mainDoc = document.querySelector("main")
    console.log(mainDoc)
    
    mainDoc.insertAdjacentHTML("afterbegin",
    `
    
    `)

}
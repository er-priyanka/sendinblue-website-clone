export const postData = (user)=>{
    return fetch(`http://localhost:8080/signup`,{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(user)
    }).then(res=>res.json());
}

export const deleteLoginData = ()=>{
    return fetch(`http://localhost:8080/login/1`, {
        method:"DELETE",
        headers:{
            'Content-Type':'application/json'
        }
    }).then(res=>res.json());
}

export const addLogin = (user)=>{
    return fetch(`http://localhost:8080/login`,{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(user)
    }).then(res=>res.json());
}


export const getLoginUser = ()=>{
    return fetch(`http://localhost:8080/login`).then(res=>res.json());
}


export const getSignupUser = (email, password)=>{
    return fetch(`http://localhost:8080/signup?email=${email}&password=${password}`).then(res=>res.json())
}
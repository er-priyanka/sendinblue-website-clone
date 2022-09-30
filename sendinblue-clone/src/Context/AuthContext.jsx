import { createContext, useState } from "react";
import { addLogin, deleteLoginData, getLoginUser, postData, getSignupUser } from "./AuthApi";
export const authContext = createContext();




export const AuthContextProvider = ({children})=>{
    const [isAuth, setIsAuth] = useState(false);
    const [registeredUser, setRegisteredUser] = useState(null);
   
    // const [signupUser, setSignupUser] = useState(null);

    const handleSignup = (user)=>{
        postData(user)
        .then(res=>{
            console.log(res);
            setIsAuth(true);
        })
        .catch(err=>{
            console.log(err);
        })

       addLoginData(user);
        

    }

    const addLoginData = (user)=>{
        getLoginUser()
        .then(res=>{
            // console.log(res);
            setRegisteredUser(res);
            if(registeredUser !== null)
                deleteLoginData();
        })
        .catch(err=>{
            console.log(err);
        })

        


        addLogin(user)
        .then(res=>{
            console.log(res);
        })
        .catch(err=>{
            console.log(err);
        })


        getLoginUser()
        .then(res=>{
            // console.log(res);
            setRegisteredUser(res);
        })
        .catch(err=>{
            console.log(err);
        })
    }

    const handleLogin = (inputUser)=>{
        const {email, password} = inputUser;
        getSignupUser(email, password)
        .then(res=>{
            // console.log(res);
            if(res.length !== 0){
                addLoginData(res[0]);
                setIsAuth(true);
                alert("Login Successfully!");
            }
            else{
                setIsAuth(false);
                alert("Login Failed!!");
            }
        })
        .catch(err=>{
            console.log(err);
        })
        
    }

    return (
        <authContext.Provider value={{isAuth, registeredUser, handleSignup, handleLogin}}>
            {children}
        </authContext.Provider>
    )
}
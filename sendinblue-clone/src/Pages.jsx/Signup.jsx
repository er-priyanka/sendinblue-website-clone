import { Box } from "@chakra-ui/react"
import { useState } from "react"
import { Signup_1 } from "../Components/Signup_1"
import { Signup_2 } from "../Components/Signup_2"
import { Signup_3 } from "../Components/Signup_3"
import { Signup_4 } from "../Components/Signup_4"


const userDetails={
    email:"",
    password:"",
    first_name:"",
    last_name:"",
    company_name:"",
    website:"",
    address:"",
    zipcode:"",
    city:"",
    country:"",
    team:"",
    contacts:"",
    online_selling:"no",
    plan:""
}

export const Signup = ()=>{
   const [part, setPart] = useState(1);
   const [user, setUser] = useState(userDetails);

   const handlePart=()=>{
    setPart(prev =>prev+1);
   }

   const handleChange=(e)=>{
    const {name, value} = e.target;
    
    setUser({...user, [name]:value});
    // console.log(user);
   }


    return (
        <Box>
            { 
                (part === 1)
                    ?<Signup_1 
                    user={user}
                    handleChange={handleChange} 
                    handlePart={handlePart}/>
                :(part === 2)
                    ?<Signup_2 
                    user={user}
                    handleChange={handleChange} 
                    handlePart={handlePart} 
                    /> 
                :(part===3)
                    ?<Signup_3
                    user={user} 
                    handleChange={handleChange} 
                    handlePart={handlePart} 
                    />
                    :<Signup_4 
                    user={user}
                    handleChange={handleChange} 

                    />
            }
        </Box>
        
    )
}
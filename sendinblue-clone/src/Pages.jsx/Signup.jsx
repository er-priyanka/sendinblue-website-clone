import { Box } from "@chakra-ui/react"
import { Signup_1 } from "../Components/Signup_1"
import { Signup_2 } from "../Components/Signup_2"
import { Signup_3 } from "../Components/Signup_3"
import { Signup_4 } from "../Components/Signup_4"


const useDetails={
    email:"",
    password:"",
    first_name:"",
    last_name:"",
    company_name:"",
    website:"",
    Address:"",
    zipcode:"",
    city:"",
    country:"",
    team:"",
    contacts:"",
    online_selling:"",
    plan:""
}

export const Signup = ()=>{
   


    return (
        <Box>
            <Signup_1/>
            {/* <Signup_2 /> 
            <Signup_3 />
            <Signup_4 /> */}
        </Box>
        
    )
}
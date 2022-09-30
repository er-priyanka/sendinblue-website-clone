import {Box, Flex} from "@chakra-ui/react";
import { Dashboard_Email } from "../Components/Dashboard_Email";
import { Dashboard_Home } from "../Components/Dashboard_Home";
import { NavbarAfter } from "../Components/NavbarAfter";
import { Sidebar } from "../Components/Sidebar";


export const Dashboard = ()=>{
    return(
        <Box>
            <NavbarAfter />

            <Flex>
                <Sidebar />
                {/* <Dashboard_Home /> */}
                <Dashboard_Email />
            </Flex>
        </Box>
    )
}
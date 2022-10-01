import {Box, Flex} from "@chakra-ui/react";
import { useState } from "react";
import { Dashboard_Email } from "../Components/Dashboard_Email";
import { Dashboard_Home } from "../Components/Dashboard_Home";
import { NavbarAfter } from "../Components/NavbarAfter";
import { Sidebar } from "../Components/Sidebar";
import {Dashboard_Templates} from "../Components/Dashboard_Templates";
import {Dashboard_Statistics} from "../Components/Dashboard_Statistics";
import {Dashboard_Settings} from "../Components/Dashboard_Settings";


export const Dashboard = ()=>{
    const [view, setView]= useState("Dashboard");

    const handleView = (title)=>{
        setView(title);
    }

    return(
        <Box>
            <NavbarAfter />

            <Flex>
                <Sidebar view={view} handleView={handleView} />
                
                {
                    (view==="Dashboard")
                    ?<Dashboard_Home />
                    :(view==="Email")
                    ?<Dashboard_Email />
                    :(view==="Templates")
                    ? <Dashboard_Templates />
                    :(view === "Statistics")
                    ?<Dashboard_Statistics />
                    :<Dashboard_Settings />
                }
                
            </Flex>
        </Box>
    )
}
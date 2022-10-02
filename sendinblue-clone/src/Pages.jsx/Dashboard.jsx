import {Box, Flex, Icon, Show} from "@chakra-ui/react";
import { useState } from "react";
import { Dashboard_Email } from "../Components/Dashboard_Email";
import { Dashboard_Home } from "../Components/Dashboard_Home";
import { NavbarAfter } from "../Components/NavbarAfter";
import { Sidebar } from "../Components/Sidebar";
import {Dashboard_Templates} from "../Components/Dashboard_Templates";
import {Dashboard_Statistics} from "../Components/Dashboard_Statistics";
import {Dashboard_Settings} from "../Components/Dashboard_Settings";
import {GiHamburgerMenu} from "react-icons/gi"

export const Dashboard = ()=>{
    const [view, setView]= useState("Dashboard");
    const [show, setShow ] = useState(false);


    const handleView = (title)=>{
        setView(title);
    }

    const handleClick=()=>{
        setShow(!show);
    }

    return(
        <Box>
            <NavbarAfter />

            <Flex>
                <Show below="md">
                    <Icon onClick={handleClick} fontSize="2xl" as={GiHamburgerMenu} />
                    {
                        show&&<Sidebar />
                    }
                
                
                </Show>
                <Show above="md">
                    <Sidebar view={view} handleView={handleView} />
                </Show>
                
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
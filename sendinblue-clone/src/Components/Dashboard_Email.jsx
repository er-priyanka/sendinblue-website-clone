import { Box, Button, Flex, Heading, Input, InputGroup, InputRightElement, Spacer, Tab, Table, TabList, TabPanel, TabPanels, Tabs, Tbody, Td, Tr } from "@chakra-ui/react"
import {SearchIcon} from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";



const getEmails = ()=>{
    return fetch(`http://localhost:8080/emails`).then(res=>res.json());
}




export const Dashboard_Email = ()=>{
    const navigate = useNavigate();
    const [emails, setEmails] = useState([]);

    const handleClick = ()=>{
        navigate("/dashboard/email");
    }

    useEffect(()=>{
        getEmails()
        .then(res=>{
            setEmails(res);
            console.log(res);
        })

    }, []);

    return (
        <Box w="80%" mx="auto">

            <Flex  p="4">
                <Heading textAlign="left" fontSize="3xl" color="blue.900">Email campaigns</Heading>
                <Spacer />
                <Button onClick={handleClick} colorScheme="blue">Create an email campaign</Button>
            </Flex>

            <Tabs>
                <TabList>
                    <Tab>All ({emails.length})</Tab>
                    <Tab>Sent (0)</Tab>
                    <Tab>Drafts (0)</Tab>
                    <Tab>Scheduled (0)</Tab>
                    <Tab>Suspended (0)</Tab>
                    <Tab>Running (0)</Tab>
                    <Tab>Archived(0)</Tab>
                </TabList>

                <InputGroup mt="20px" w="250px" >
                    <Input  placeholder="Campaign ID, Name" />
                    <InputRightElement color="gray.600" children={<SearchIcon />} />
                </InputGroup>


                <TabPanels>
                    <TabPanel>
                        
                        
                        {
                            (emails===null)
                            ? <Heading fontSize="2xl">No Data Found</Heading> 
                            :(
                                <Table >
                                    <Tbody >
                                        {
                                           emails.map((item, i)=>(
                                            <tr key={i}>
                                                <Td w="100px" maxW="fit-content" >{`ID: ${item.id}`}</Td>
                                                <Td maxW="fit-content">{item.campaign_name}</Td>
                                                <Td>{`From: ${item.from}`}</Td>
                                                <Td>{`To: ${item.to}`}</Td>
                                            </tr>
                                           )) 
                                        }
                                    </Tbody>
                                </Table>
                            ) 
                        }
                        

                    </TabPanel>

                    <TabPanel>
                        <Heading fontSize="2xl">No Data Found</Heading> 
                    </TabPanel>

                    <TabPanel>
                        <Heading fontSize="2xl">No Data Found</Heading> 
                    </TabPanel>

                    <TabPanel>
                        <Heading fontSize="2xl">No Data Found</Heading> 
                    </TabPanel>

                    <TabPanel>
                        <Heading fontSize="2xl">No Data Found</Heading> 
                    </TabPanel>

                    <TabPanel>
                        <Heading fontSize="2xl">No Data Found</Heading> 
                    </TabPanel>
                    
                    <TabPanel>
                        <Heading fontSize="2xl">No Data Found</Heading> 
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
}
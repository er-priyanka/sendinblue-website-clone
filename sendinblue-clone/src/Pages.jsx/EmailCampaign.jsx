import { Alert, AlertIcon, Box, Button, CloseButton, Divider, Flex, FormControl, FormLabel, Grid, GridItem, Heading, Input, Spacer, Stack, Text, Textarea, useDisclosure } from "@chakra-ui/react"
import { useState } from "react"
import { NavbarAfter } from "../Components/NavbarAfter"
import { ShowEmail } from "../Components/ShowEmail";
import { useNavigate } from "react-router-dom";

const ini = {
    campaign_name:"",
    from:"",
    to:"",
    subject:"",
    body:""
}

const sendEmail = (newEmail)=>{
    return fetch(`http://localhost:8080/emails`, {
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(newEmail)
    }).then(res=>res.json())
}

export const EmailCampaign = ()=>{
    const [email, setEmail] = useState(ini);
    const {isOpen:isVisible,
    onClose, onOpen} = useDisclosure({defaultIsOpen:false});
    const navigate = useNavigate();
    

    
    const handleChange = (e)=>{
        const {name, value} = e.target;

        setEmail({...email, [name]:value});
        console.log(email);
    }

    const handleSend = ()=>{
        sendEmail(email)
        .then(res=>{
            console.log(res);
            onOpen();
            
        })
        .catch(err=>{
            console.log(err);
        })
    }

    const handleClose = ()=>{
        onClose();
        navigate('/dashboard');
    }
    
    return (
        <Box bg="blackAlpha.100">
            <NavbarAfter />


            <Flex py="20px" direction={{base:"column", md:"row"}} gap="20px" >
                <Stack border="1px" borderColor="blackAlpha.100" 
                w={{base:"80%", md:"48%"}}
                m="auto"  
                textAlign='left'
                p="10"
                spacing="5"
                bg="white"
                borderRadius="15"
                >
                    <Heading 
                    fontSize="2xl"
                    color="blue.900"
                    // mb="4"
                    >Create an email campaign</Heading>

                    <Divider />

                    <Grid 
                    templateColumns={{base:"repeat(1, 1fr)", md:"repeat(2, 1fr)"}}
                    gap="5"
                    >

                        <GridItem colSpan={{base:1, md:2}}>
                            <FormControl isRequired>
                                <FormLabel>Campaign Name</FormLabel>
                                <Input type="text" name="campaign_name" value={email.campaign_name} onChange={handleChange} placeholder="Enter campaign name here" />
                            </FormControl>
                        </GridItem>


                    <GridItem>
                            <FormControl isRequired>
                                <FormLabel>From</FormLabel>
                                <Input type="email" name="from" value={email.from} onChange={handleChange} placeholder="Enter sender's email" />
                            </FormControl>
                    </GridItem>


                    <GridItem>
                            <FormControl isRequired>
                                <FormLabel>To</FormLabel>
                                <Input type="email" name="to" value={email.to} onChange={handleChange} placeholder="Enter receiver's email"/>
                            </FormControl>
                    </GridItem>


                    <GridItem colSpan={{base:1, md:2}}>
                            <FormControl isRequired>
                                <FormLabel>Subject</FormLabel>
                                <Input type="text" name="subject" value={email.subject} onChange={handleChange} placeholder="Enter subject" />
                            </FormControl>
                    </GridItem>


                    <GridItem colSpan={{base:1, md:2}}>
                            <FormControl isRequired>
                                <FormLabel>Body</FormLabel>
                                <Textarea
                                name="body"
                                value={email.body}
                                onChange={handleChange}
                                placeholder="Compose email"
                                />
                            </FormControl>
                    </GridItem>


                    <GridItem>
                            <FormControl>
                                <FormLabel>Select Design</FormLabel>
                                <Button>Select template</Button>
                            </FormControl>
                    </GridItem>

                    </Grid>
                    
                    
                </Stack>

                <Spacer />

                <ShowEmail email={email} />

            </Flex>

            {
                isVisible?(
                    <Alert status='success'>
                        <AlertIcon />
                        Email sent successfully !!

                        <CloseButton
                        alignSelf='flex-start'
                        position="relative"
                        right={-1}
                        top={-1}
                        onClick={handleClose}
                        />

                    </Alert>
                )
                :<Button 
                disabled ={email.campaign_name==="" || email.from==="" || email.to==="" || email.body==="" || email.subject===""} 
                onClick={handleSend}  px="20" colorScheme="blue" mb="10">Send Email</Button>

            }
        </Box>
    )
}
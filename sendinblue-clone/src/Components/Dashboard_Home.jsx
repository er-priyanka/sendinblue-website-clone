import { Box, Button, Center, CircularProgress, CircularProgressLabel, Divider, Flex, Heading, Icon, Image, Spacer, Stack, Text } from "@chakra-ui/react"
import {FaUsers, FaEye, FaBan} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import {AiFillCheckCircle} from "react-icons/ai";
import {BsHandIndexThumb} from "react-icons/bs";
import {BiPlusMedical} from "react-icons/bi";
import {QuestionOutlineIcon} from "@chakra-ui/icons";
import {useNavigate} from "react-router-dom";


const contents = [
    {icon:FaUsers, count:1, desc:"All your contacts", percent:"_", color:"black"},
    {icon: FaEye , count:0, desc:"opened Details", percent:"0%", color:"blue.400"},
    {icon:BsHandIndexThumb, count:0, desc:"clicked", percent:"0%", color:"green.500"},
    {icon:FaBan, count:0, desc:"blacklisted", percent:"0%", color:"orange.400"}
]


export const Dashboard_Home = ()=>{
    const navigate = useNavigate();

    const handleClick = ()=>{
        navigate('/dashboard/email')
    }

    return (
        <Box  w="75%" m="auto" >

            <Heading color="blue.900" textAlign="left" my="4" fontSize="3xl">Dashboard</Heading>
            <Divider color="blue.300" />

            <Box mt="20px" bg="#F9FAFC" padding="6">
                <Flex >
                    <Box textAlign="left" lineHeight="45px">
                        <Heading color="blue.900" fontSize="2xl">Get started with email campaigns</Heading>
                        <Text fontSize="1.1rem">Follow these first steps to send your first email campaign.</Text>
                    </Box>

                    <Spacer />

                    <Text 
                    color="blue.400"
                    fontWeight="500"
                    cursor="pointer"
                    _hover={{
                        bg:"white",
                        textDecor:"underline"
                    }}
                    >Skip this step</Text>

                </Flex>

                <Flex  gap={9}>
                    <Center display="flex" flexDirection="column">
                        <CircularProgress size="150px" value={33} color="blue.400">
                            <CircularProgressLabel>33%</CircularProgressLabel>
                        </CircularProgress>
                        <Text color="gray.700" fontSize="md">Email campaigns setup</Text>
                    </Center>
                    <Box fontSize="1.1rem" w="80%">
                        <Flex gap="4" padding="13px" color="gray">
                            <Center  boxSize='12' borderRadius="50">
                                <Icon boxSize='12' color="green.500" as={AiFillCheckCircle} />
                            </Center>
                            
                            <Box textAlign='left' lineHeight={7} >
                                <Text as="b">Complete your profile form</Text>
                                <Text>Fill out your profile form to complete your sign-up</Text>
                            </Box>
                        </Flex>


                        <Divider />


                        <Flex gap="4" padding="13px" 
                        cursor="pointer"
                        _hover={{
                            bg:"blackAlpha.50"
                        }}
                        >
                            <Center border='1px' borderColor="blue.900" boxSize='12' borderRadius="50">
                                <Icon boxSize='5' color="blue.700" as={FaUsers} />
                            </Center>
                            
                            <Box textAlign='left' lineHeight={7}>
                                <Text as="b" _hover={{color:"blue.400"}}>Import all of your contacts</Text>
                                <Text>Upload your contacts in order to start sending them email campaigns</Text>
                            </Box>
                        </Flex>


                        <Divider />


                        <Flex gap="4" padding="13px" cursor="pointer"
                        _hover={{
                            bg:"blackAlpha.50"
                        }}>
                            <Center border='1px' borderColor="blue.900" boxSize='12' borderRadius="50">
                                <Icon boxSize='6' color="blue.500" as={MdEmail} />
                            </Center>
                            
                            <Box textAlign='left' lineHeight={7}>
                                <Text as="b"  _hover={{color:"blue.400"}}>Schedule your first email campaign</Text>
                                <Text>Set up, design and schedule your email campaign</Text>
                            </Box>
                        </Flex>

                    </Box>

                </Flex>
            </Box>

                <Flex mt="20px"  justifyContent="space-between">
                    {
                        contents.map((item,i)=>(
                            <Stack textAlign="center" w="23%" key={i} border="1px" borderColor="gray.300" p="20px">
                                <Icon fontSize="30"  m="auto" color={item.color} as={item.icon} />
                                <Heading color={item.color}>{item.count}</Heading>
                                <Text>{item.desc}</Text>
                                <Text color={i==0?"white":"gray.600"}>{item.percent}</Text>
                            </Stack>
                        ))
                    }
                </Flex>

                <Stack border="1px" 
                borderColor="gray.300" 
                w="49%" mt="30px" p="20px"
                spacing="6"
                >
                    <Heading fontSize="2xl" textAlign='left'>Email Campaigns</Heading>
                    <Text fontSize="1.2rem" as="i" color="gray.400">No campaign found</Text>
                    
                    <Center>
                        <Button onClick={handleClick} fontSize="0.9rem" maxW="fit-content" colorScheme='blue' gap={1}>
                            <Icon as={BiPlusMedical} /> Create a New Campaign
                        </Button>
                    </Center>
                    
                </Stack>
           

            <Button bg="blue.900" 
            borderRadius="50px" 
            color="white" 
            gap="2" position='sticky' 
            bottom="3" left="90%" 
            right="10px"
            padding="5"
            _hover={{bg:"blue.900"}}
            >
                <QuestionOutlineIcon />
                Support
            </Button>

        </Box>
    )
}
import {Box, Container, Divider, Flex, Heading, HStack, Icon, Image, List, ListItem, Menu, MenuList, Spacer, Stack, Text} from "@chakra-ui/react";
import {ChevronRightIcon} from "@chakra-ui/icons";
import {BiCopyright} from "react-icons/bi";

const logos=[
    {
        name:"facebook",
        src:"https://www.sendinblue.com/wp-content/themes/sendinblue2019/assets/images/footer/rs-facebook.svg",
    },
    {
        name:"twitter",
        src:"https://www.sendinblue.com/wp-content/themes/sendinblue2019/assets/images/footer/rs-twitter.svg",

    },
    {
        name:"linkedIn",
        src:"https://www.sendinblue.com/wp-content/themes/sendinblue2019/assets/images/footer/rs-linkedin.svg",

    },
    {
        name:"instagram",
        src:"https://www.sendinblue.com/wp-content/themes/sendinblue2019/assets/images/footer/rs-instagram.svg",

    },
    
    {
        name:"youtube",
        src:"https://www.sendinblue.com/wp-content/themes/sendinblue2019/assets/images/footer/rs-youtube.svg"
    }
]


const footerList = [
    {
        title:"Solutions",
        content:[
            "Features", 
            "Enterprise offer",
            "Sendinblue vs. Mailchimp",
            "Service Lab",
            "Partner with us"
        ]
    },
    {
        title:"Company",
        content:[
            "About us",
            "Jobs",
            "Press",
            "Our carbon footprint",
            "Contact us",
            "GDPR"
        ]
    },
    {
        title:"Resources",
        content:[
            "Blog",
            "Help center",
            "Sendinblue Academy",
            "Glossary",
            "Plugins",
            "API docs",
            "Status",
            "Find an Expert",
            "Product Updates"
        ]
    }
]

export const Footer = ()=>{
    return (
        <Box  p={10}>
                {/* Icons and Logo  */}
                <Flex w="70%"
                 m="auto"
                //  justifyContent="space-between"
                gap={4}
                 direction={{base:"column", md:"row"}}
                 >
                    <Image  w={{base:"250px",md:"200px"}} alt="Logo" src="https://www.sendinblue.com/wp-content/themes/sendinblue2019/assets/images/common/logo-color.svg" />
                    <Spacer />
                    <HStack  spacing="4" >
                        {
                            logos.map(item=>(
                                <Image cursor="pointer" w={10}  key={item.name} src={item.src} alt={item.title}  />
                            ))
                        }
                    </HStack>

                    
                </Flex>

                {/* Middle section  */}
                <Flex w="70%" m="auto" my="10" gap={8}  direction={{base:"column", md:"row"}}>
                    <Flex w={{md:"37%"}} 
                    gap={8} 
                    direction={{base:"column", md:"row"}} > 
                        <Image boxSize="130px" alt="footer image" src="https://www.sendinblue.com/wp-content/uploads/2019/05/CEO_Footer_image.jpg" />
                        <Box  textAlign='left' >
                            <Text color="gray.600" fontSize="sm">Email, SMS, Facebook, Chat, CRM, and more, all-in-one platform to help you grow your business through
                            building stronger customer relationships.</Text>

                            <HStack color="blue.400"
                            cursor='pointer'
                            spacing="2" 
                            mt="3"
                            fontWeight='bold'
                            _hover={{
                                color:"blue.700"
                            }}
                            >
                                <ChevronRightIcon />
                                <Text>Why Sendinblue?</Text>
                            </HStack>
                        </Box>
                    </Flex> 
                    
                    <Spacer />

                    <Flex w="60%"  gap={10}
                    direction={{base:"column", md:"row"}} 
                    >
                        {
                            footerList.map((item,i)=>(
                                
                                <List key={i} textAlign="left" spacing={2} fontSize="1.1rem">
                                    <Heading color="blue.900" fontSize="lg" mb={8}>{item.title}</Heading>
                                    {
                                        item.content.map((el, i)=>(
                                            <ListItem cursor='pointer'
                                             color="gray.600" 
                                             key={i}
                                             _hover={{
                                                color:"black"
                                             }}
                                            >{el}</ListItem>
                                        )

                                        )
                                    }
                                </List>
                            ))
                        }
                    </Flex>  
                </Flex>


                <Divider w="70%" m="auto" />
                

                {/* BOTTOM SECTION  */}
                <Flex w="70%" m='auto' mt="5"
                direction={{base:"column", md:"row"}}
                >
                    <Text fontSize="0.9rem" color="gray.600" display='flex' alignItems="center" gap={1} >
                        <Icon boxSize={3} as={BiCopyright} />
                        2022 Seninblue. All rights reserved
                    </Text>
                    <Spacer />
                    <Text fontSize="sm" color="gray.600">
                        Cookies Settings, Anti-Spam, Privacy, User agreement, Legal Notice and Responsible Disclosure
                    </Text>
                </Flex>


        </Box>
       
       
    )
}
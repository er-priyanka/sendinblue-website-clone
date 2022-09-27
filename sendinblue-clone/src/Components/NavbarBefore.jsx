import {Flex, Box, Image,
    Menu, MenuButton, MenuItem,
    Button, MenuList, MenuGroup, MenuDivider, Center, 
    Spacer, 
    Text,
    Link,
    textDecoration
    } from "@chakra-ui/react";

import {ChevronDownIcon} from "@chakra-ui/icons"
import { useNavigate } from "react-router-dom";


export const NavbarBefore = ()=>{
    const navigate = useNavigate();

    const handleClick = ()=>{
        navigate('/');
    }

    const handleSignup = ()=>{
        navigate('/signup');
    }

    

    return (
        <Flex
            // border="1px"
            justifyContent="space-around"
            padding={5}
            position="sticky"
            top="0"
            z-index="100"
            bg="white"
        >
           
           <Box>
                <Image onClick={handleClick} w={60} ml={20} src="https://www.sendinblue.com/wp-content/themes/sendinblue2019/assets/images/common/logo-color.svg" alt="logo"  />

           </Box>
            

            <Spacer />

            <Flex>
                <Center gap={10}>
                    <Menu>
                        <MenuButton >
                            Solutions <ChevronDownIcon />
                        </MenuButton>
                        <MenuList >
                            <MenuItem>Why Sendinblue?</MenuItem>
                            <MenuItem>EnterPrise</MenuItem>
                        </MenuList>
                    </Menu>


                    <Menu>
                        <MenuButton >
                            Features <ChevronDownIcon />
                        </MenuButton>

                        <MenuList display="flex" >
                            <MenuGroup title="Communicate">
                                <MenuItem>Email Marketing</MenuItem>
                                <MenuItem>Email API</MenuItem>
                                <MenuItem>SMS Marketing</MenuItem>
                                <MenuItem>Chat</MenuItem>
                                <MenuItem>Inbox</MenuItem>
                            </MenuGroup>

                            <MenuDivider />

                            <MenuGroup title="Personalize">
                                <MenuItem>Sales CRM</MenuItem>
                                <MenuItem>Marketing Automation</MenuItem>
                                <MenuItem>Transactional Emails</MenuItem>
                            </MenuGroup>

                            <MenuDivider />
                            <MenuGroup title="Convert">
                                <MenuItem>Signup Forms</MenuItem>
                                <MenuItem>Landing Pages</MenuItem>
                                <MenuItem>Facebook Ads</MenuItem>
                            </MenuGroup>
                        </MenuList>
                    </Menu>

                    <Link
                        href="/pricing"
                        _hover={{
                                textDecoration:'none'
                            }}
                    >Pricing</Link>
                    
                    <Menu>
                        <MenuButton >
                            Solutions <ChevronDownIcon />
                        </MenuButton>
                        <MenuList display="flex" >
                            <MenuGroup title="Learning">
                                <MenuItem>Help Center</MenuItem>
                                <MenuItem>API Docs</MenuItem>
                                <MenuItem>Sendinblue Academy</MenuItem>
                                
                            </MenuGroup>

                            <MenuDivider />

                            <MenuGroup title="Platform">
                                <MenuItem>Product Updates</MenuItem>
                                <MenuItem>Case Studies</MenuItem>
                                <MenuItem>Service Lab</MenuItem>
                                <MenuItem>Platform Status</MenuItem>
                                <MenuItem>Plugins</MenuItem>
                            </MenuGroup>

                            <MenuDivider />
                            <MenuGroup title="Partnerships">
                                <MenuItem>Expert Directory</MenuItem>
                                <MenuItem>Become an Expert</MenuItem>
                                <MenuItem>Affiliates</MenuItem>
                            </MenuGroup>
                        </MenuList>
                    </Menu>

                    <Link
                        _hover={{
                            textDecoration:'none'
                        }}
                    >Blog</Link>
                </Center>
            </Flex>

            <Spacer />

            <Flex mr={20}>
                <Center gap={4}>
                    <Menu >
                        <MenuButton >
                            <Image mr="1" display="inline" alt="flag" src="https://www.sendinblue.com/wp-content/plugins/multisite-language-switcher/flags/us.png" />
                            En
                        </MenuButton>
                        <MenuList>
                            <MenuItem gap="2" >
                                <Image alt="flag" src="https://www.sendinblue.com/wp-content/plugins/multisite-language-switcher/flags/de.png"/>
                                Deutsch
                            </MenuItem>
                            <MenuItem gap="2">
                                <Image alt="flag" src="https://www.sendinblue.com/wp-content/plugins/multisite-language-switcher/flags/es.png" />
                                Espanol
                            </MenuItem>
                            <MenuItem gap="2">
                                <Image alt="flag" src="https://www.sendinblue.com/wp-content/plugins/multisite-language-switcher/flags/fr.png" />
                                Francais
                            </MenuItem>
                            <MenuItem gap="2">
                                <Image alt="flag" src="https://www.sendinblue.com/wp-content/plugins/multisite-language-switcher/flags/it.png" />
                                Italiano
                            </MenuItem>
                            <MenuItem gap="2">
                                <Image alt="flag" src="https://www.sendinblue.com/wp-content/plugins/multisite-language-switcher/flags/pt.png" />
                                Portugues
                            </MenuItem>
                        </MenuList>
                    </Menu>

                    <Box>
                        <Link
                            href="/login"
                           _hover={
                            {textDecoration:"none"}
                           }
                        >
                        Log in
                        </Link>
                    </Box>
                    
                    <Button
                        colorScheme="blue"
                        borderRadius={50}
                        p={6}

                        onClick={handleSignup}
                    >Sign up free</Button>
                </Center>
            </Flex>
           

        </Flex>
    )
}
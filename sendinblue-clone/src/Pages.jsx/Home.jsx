import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading, HStack, Image, Spacer, Stack, Text } from "@chakra-ui/react";
import { Feature } from "../Components/Feature";
import { Footer } from "../Components/Footer";
import { HomeMidView } from "../Components/HomeMidView";
import styles from "./Home.module.css";

export const Home = ()=>{
    return (
        <div>
           
           <Flex  m='auto' mt="70px" width="80%" >
                <Stack width='36%' spacing={10} >
                    <Heading size='4xl' align="left" >Prepare for takeoff.</Heading>
                    <Text align='left' fontSize='xl' pl="9" pr="9"  borderLeft='2px' borderColor="#FFD201" >
                        Sendinblue is the smartest and most intuitive platform for growing business.
                        Thrive digitally as we guide your business with the right marketing & sales tools.
                    </Text>

                    <Button 
                        maxWidth="fit-content"
                        colorScheme={"blue"}
                        borderRadius="50px"
                        p={7}
                        fontSize="md"
                    >Take a free test drive!</Button>
                </Stack>
                <Spacer />
                <Box border="1px" width="56%"></Box>
           </Flex> 



            <Flex bg="#044A75"
             color="white"
             m="auto"
             mt="160px" 
             w="80%"
             padding="70px"
             className="section_2"
             gap={20}
             position="absolute"
             left="10%"
             zIndex="1"
             >
                <Feature
                    src="https://www.sendinblue.com/wp-content/uploads/2021/08/icn-ftr-1b.svg"
                    title="Pick your tools"
                    desc="We'll help you reach the right people and produce the right content"
                />    
                    

                
                <Feature
                    src="https://www.sendinblue.com/wp-content/uploads/2021/08/icn-ftr-2b.svg"
                    title='Work smart not hard'
                    desc='Focus on the important tasks ans put the rest on autopilot with automation'
                 />    
     
                
                <Feature
                    src="https://www.sendinblue.com/wp-content/uploads/2021/08/icn-ftr-3b.svg"
                    title="We've got your back"
                    desc ="We'll be here round-the-clock to support you with any questions"
                />
                
            </Flex>

        {/* Home Middle view component appended */}

            <HomeMidView />

            <Flex w="70%" margin="auto"
             >
                <Image  boxSize="400px" alt='image' src="https://www.sendinblue.com/wp-content/themes/sendinblue2019/assets/images/common/shield.jpg" />
            
                <Stack padding={10} textAlign="left">
                    <Heading fontSize="5xl" color="blue.900">Your data privacy and security are a top concern for us.</Heading>
                    <HStack spacing={10}>
                        <Image boxSize="100px" src="https://www.sendinblue.com/wp-content/uploads/2021/08/CSA@1x.svg" />
                        <Image boxSize="100px" src="https://www.sendinblue.com/wp-content/uploads/2021/08/signal-spam-grey.svg"/>
                        <Image boxSize="100px" src="https://www.sendinblue.com/wp-content/uploads/2021/08/sncd.svg" />
                    </HStack>
                    <HStack color="blue.400"
                    cursor='pointer'
                    spacing="2" 
                    fontWeight='bold'
                    _hover={{
                        color:"blue.700"
                    }}
                    >
                        <ChevronRightIcon />
                        <Text>Learn about GDPR compliance</Text>
                    </HStack>
                </Stack>
            
            
            
            </Flex>

            
            {/* Bottom section is remaining */}
            <Footer />
        </div>
    )
}
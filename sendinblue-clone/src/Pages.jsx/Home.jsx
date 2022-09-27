import { Box, Button, Flex, Heading, Spacer, Stack, Text } from "@chakra-ui/react"

export const Home = ()=>{
    return (
        <div>
           
           <Flex   m='auto' mt="70px" width="80%" >
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



            <Flex bg="#044A75" color="white" mt="150px" mb="150px">
                <Stack>
                    <Heading>Pick your tools</Heading>
                    <Text>We'll help you reach the right people and produce the right content</Text>
                </Stack>

                <Stack>
                    <Heading>Work smart not hard</Heading>
                    <Text>Focus on the important tasks ans put the rest on autopilot with automation</Text>
                </Stack>
                <Stack>
                    <Heading>We've got your back</Heading> 
                    <Text>We'll be here round-the-clock to support you with any questions</Text>
                </Stack>
            </Flex>




        </div>
    )
}
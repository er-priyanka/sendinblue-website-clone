import { Box, Center, Heading, Stack, Text } from "@chakra-ui/react"



export const ShowEmail = ({email})=>{
    const {campaign_name, from, to, subject, body} = email;
    return (
        <Box w={{base:"80%", md:"48%"}}
        mx="auto" 
        bg="white" 
        borderRadius="15"
        textAlign="left"
        padding="10"
        >
        
        {
            (campaign_name=="" && from =="" && to == "" && subject =="" && body == "") 
            ? (
                
                <Center
                h="100%"
               
                >
                        <Heading as="i" fontSize="2xl" color="gray">You can see your email here!!</Heading>
                </Center>
               
                
            )
            :(
                <Stack 
                spacing="5"
              
                >
                    <Heading textAlign="center" color="blue.900" fontSize="2xl">{campaign_name}</Heading>
                    
                    <Box>
                        <Text >{from !== ""? `From: ${from}`:null}</Text>
                    </Box>
                    <Box>
                        <Text >{to!=="" ? `To: ${to}`:null}</Text>
                    </Box>
                    <Box>
                        <Text >{subject!=="" ? `Subject: ${subject}`:null}</Text>
                    </Box>

                    <Box>
                        {
                            body && body.split('\n').map((item, i)=>(
                                <Text key={i}>{item}</Text>
                            ))
                        }
                    </Box>
                </Stack>
            )
        }
        

       
        

        </Box>
    )
}
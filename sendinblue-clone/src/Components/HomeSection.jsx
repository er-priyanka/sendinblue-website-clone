import { ChevronRightIcon } from "@chakra-ui/icons"
import { Box, Button, Center, Divider, Flex, Grid, GridItem, Heading, Icon, Image, Stack, Text } from "@chakra-ui/react"


const contData = [
    {
        heading:"Be everywhere your customers are.",
        data:[
            {
                image:"https://www.sendinblue.com/wp-content/uploads/2020/03/Email-Marketing@1x.svg",
                title:"Email marketing",
                desc:"Get the word out and sell more with sleek email messages that you can design in no time"
            },
            {
                image:"https://www.sendinblue.com/wp-content/uploads/2020/03/icn-tool-sms.svg",
                title:"SMS marketing",
                desc:"Communicate more directly with customers for urgent messanges or time-sensitive offers"
            },
            {
                image:"https://www.sendinblue.com/wp-content/uploads/2020/03/Chat@1x.svg",
                title:"Chat",
                desc:"Be there for customers instantly when they have a question while browsing your site"
            },
            {
                image:"https://www.sendinblue.com/wp-content/uploads/2020/11/Inbox-2.svg",
                title:"Inbox",
                desc:"Keep your teams organized with a shared inbox and never lose track of your cutomer email history again."
            }
        ]
    },
    {
        heading:"Give life to your custumer journey.",
        data:[
            {
                image:"https://www.sendinblue.com/wp-content/uploads/2020/03/icn-tool-crm.svg",
                title:"CRM",
                desc:"Build stronger relationships by keeping track of all your customer details in one place"
            },
            {
                image:"https://www.sendinblue.com/wp-content/uploads/2020/03/Marketing-Auto@1x.svg",
                title:"Marketing automation",
                desc:"Save time and boost performance by automating your segmentation and marketing messages"
            },
            {
                image:"https://www.sendinblue.com/wp-content/uploads/2020/03/icn-tool-transactionmail.svg",
                title:"Transactional email",
                desc:"Step up the design, engagement, and deliverability of your transactional email messages"
            },
            {
                image:"https://www.sendinblue.com/wp-content/uploads/2020/03/segmentation@1x.svg",
                title:"Segmentation",
                desc:"Get more engagement by sending your marketing messages to a more targeted audience."
            }
        ]
    },
    {
        heading:"Turn your visitors into customers.",
        data:[
            {
                image:"https://www.sendinblue.com/wp-content/uploads/2020/03/icn-tool-landing.svg",
                title:"Landing pages",
                desc:"Create a more targeted visitor experience with dedicated pages for each of your campaigns"
            },
            {
                image:"https://www.sendinblue.com/wp-content/uploads/2020/03/icn-tool-signup.svg",
                title:"Signup forms",
                desc:"Grow your email contact list with custom forms that you can integrate in your website"
            },
            {
                image:"https://www.sendinblue.com/wp-content/uploads/2020/03/icn-tool-fb.svg",
                title:"Facebook Ads",
                desc:"Launch Facebook ads from your account to retarget contacts or reach new audiences based on your contact lists"
            }
        ]
    }
]

export const HomeSection = ()=>{
    return (
        <Stack w="75%" m="auto" mt="100px"  spacing="20">

            
            {
                contData.map((item, i)=>(
                    <Flex key={i} gap='40px'>
                        <Heading fontSize='3xl' w="30%" textAlign='right'>{item.heading}</Heading>
                        <Grid 
                        w="68%"
                        templateColumns={{base:'repeat(1, 1fr)', md:'repeat(2, 1fr)'}}
                        gap={20}
                        >
                            {
                                item.data.map((item, i)=>(
                                    <GridItem key={i}>
                                        <Flex alignItems="flex-start" gap='10px'>
                                            <Image src={item.image} />
                                            <Box textAlign='left'>
                                                <Heading as='h3' fontSize="xl" >{item.title}</Heading>
                                                <Text color="gray.600">{item.desc}</Text>
                                            </Box>
                                            <ChevronRightIcon 
                                            boxSize={5} color="blue.400" 
                                            cursor='pointer'  />
                                        </Flex>
                                    </GridItem>
                                ))
                            }
                        </Grid>
                    </Flex>
                ))
            }
            

            <Center>
                <Button 
                colorScheme='blue'
                w='180px' fontSize='md'
                borderRadius="50"
                >All features</Button>
            </Center>
            
            <Divider />

        </Stack>
    )
}
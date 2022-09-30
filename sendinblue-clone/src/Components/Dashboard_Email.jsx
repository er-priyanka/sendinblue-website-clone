import { Box, Button, Flex, Heading, Input, InputGroup, InputRightElement, Spacer, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import {SearchIcon} from "@chakra-ui/icons";

export const Dashboard_Email = ()=>{
    return (
        <Box w="80%" mx="auto">

            <Flex  p="4">
                <Heading textAlign="left" fontSize="3xl" color="blue.900">Email campaigns</Heading>
                <Spacer />
                <Button colorScheme="blue">Create an email campaign</Button>
            </Flex>

            <Tabs>
                <TabList>
                    <Tab>All (0)</Tab>
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
                        <p>one!</p>
                    </TabPanel>

                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>

                    <TabPanel>
                        <p>three!</p>
                    </TabPanel>

                    <TabPanel>
                        <p>four!</p>
                    </TabPanel>

                    <TabPanel>
                        <p>five!</p>
                    </TabPanel>

                    <TabPanel>
                        <p>six!</p>
                    </TabPanel>
                    
                    <TabPanel>
                        <p>seven!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
}
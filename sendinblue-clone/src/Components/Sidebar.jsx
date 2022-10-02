import { Link, List, ListIcon, ListItem, Stack, Text } from "@chakra-ui/react"
import { AiFillDashboard, AiFillSetting } from "react-icons/ai";
import {MdEmail} from "react-icons/md";
import {GoGraph} from "react-icons/go";
import {RiLayout5Fill} from "react-icons/ri"
import { GrAnalytics } from "react-icons/gr";



const listItems = [
    {title:"Dashboard", logo:AiFillDashboard},
    {title:"Email", logo:MdEmail},
    {title:"Templates", logo:RiLayout5Fill},
    {title:"Statistics", logo:GoGraph},
    {title:"Settings", logo:AiFillSetting},
]


export const Sidebar = ({view, handleView})=>{
    return (
        <Stack
        // border="1px"
        borderColor="red"
        // p="25px"
        textAlign="left"
        spacing={5}
        w={{base:"40%", md:"15%"}}
        bg="gray.50"
        >
            <List p="10px" fontSize="1.1rem" color="gray.500">
                {
                    listItems.map((item, i)=>(
                        <ListItem key={i}
                        cursor="pointer"
                        padding={3}
                        _hover={
                            {
                                bg:"gray.100",
                                color:"blackAlpha.800"
                            }
                        }
                        color={item.title === view?"blue.400" :"gray.500"}
                        onClick={()=>handleView(item.title)}
                        >
                            <ListIcon as={item.logo} />
                            {item.title}
                        </ListItem>
                    ))
                }
            </List>

            <Stack p="25px" spacing="1" fontSize="sm" color="gray.500">
                <Text as="b">Plan FREE</Text>
                <Text>300 emails</Text>
                <Text>Remaining for today</Text>
                <Link color="blue.400" fontWeight="500">Upgrade</Link>
            </Stack>

            <Stack p="25px" spacing="1" fontSize="sm" color="gray.500">
                <Text as="b">0 SMS Credits</Text>
                <Text>Expire : Never</Text>
                <Link color="blue.400" fontWeight="500">Get more credits</Link>
            </Stack>
        </Stack>
    )
}
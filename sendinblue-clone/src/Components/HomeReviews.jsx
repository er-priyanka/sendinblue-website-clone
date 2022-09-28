import { Box, HStack, Link, propNames, Text } from "@chakra-ui/react";
import {StarIcon} from "@chakra-ui/icons";

export const HomeReviews = ({rating, title, reviews})=>{
    return (
        <HStack>
            {
                Array(5)
                .fill('')
                .map((_, i)=>(
                    <StarIcon
                    key={i}
                    color={i<Math.floor(rating)?'#FFD201' : 'gray.300'}
                    fontSize="2xl"
                    />
                ))
            }

            <Text as='b'>{rating}/5</Text>
            <Text>on {title}/ {reviews}+ reviews</Text>
        </HStack>
    )
}
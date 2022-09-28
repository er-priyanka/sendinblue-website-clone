import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react"

export const Feature = ({title, desc, src, ...rest})=>{
    return (
        <Stack direction='row' gap={2}>
            <Image w={5} h={5} alt='icon' src={src}/>
            <Box boxShadow='none'
              {...rest} 
             textAlign='left'
             >
                <Heading fontSize='2xl'>{title}</Heading>
                <Text mt={4} color="whiteAlpha.700" fontSize="1.1rem">{desc}</Text>
            </Box>
        </Stack>
        
    )
}
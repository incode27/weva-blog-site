import { Box, Center, Container, Flex, Grid, GridItem, Heading, Image, Spacer, Text } from "@chakra-ui/react";
import React from "react";

const MediaSocial = () => {
    return (
        <React.Fragment>
            <Container py={25} px={50} border='1px' borderColor='wevaBasic.200' borderRadius='25px' boxShadow='base'>
            <Grid templateColumns='repeat(5, 1fr)' gap={2}>
                <GridItem m='auto' colSpan={3} textTransform='capitalize' >
                    <Heading fontSize='2xl'>partner bisnis clothing terbaik!</Heading>
                    <Text fontSize='sm'>bersama sosial media weva textile</Text>
                </GridItem>
                <GridItem colSpan={2} textTransform='capitalize' >
                    <Heading fontSize='lg'>sosial media weva</Heading>
                    <Text fontSize='2xs'>temukan inspirasi menarik, product knowledge, hingga tips seputar ide bisnis hanya di Sosial Media Weva Textile.</Text>
                </GridItem>
            </Grid>
            <Flex py={25}>
                <Image src="https://wevatextile.com/wp-content/uploads/2022/02/fb-80x80.png" height={{base:'50px', sm:'35px'}}/>
                <Spacer />
                <Image src="https://wevatextile.com/wp-content/uploads/2022/02/ig-80x80.png" height={{base:'50px', sm:'35px'}}/>
                <Spacer />
                <Image src="https://wevatextile.com/wp-content/uploads/2022/02/yt-80x80.png" height={{base:'50px', sm:'35px'}}/>
                <Spacer />
                <Image src="https://wevatextile.com/wp-content/uploads/2022/02/tiktok-80x80.png" height={{base:'50px', sm:'35px'}}/>
            </Flex>
            </Container>
        </React.Fragment>
    )
}

export default MediaSocial;
import {
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Marketplace = () => {
  return (
    <React.Fragment>
      <Container bgColor="brand.900">
        <Grid p={10} templateColumns="repeat(4, 1fr)">
          <GridItem colSpan={2}>
            <Heading fontSize="2xl" lineHeight={1.1}>
              Mau Belanja<span>Gratis Ongkir?</span>
            </Heading>
            <Text py={3} fontWeight="thin" fontSize="lg" lineHeight={1}>
              Buruan ke Marketplace Weva Textile!
            </Text>
          </GridItem>
          <GridItem colSpan={1} m="auto">
            <Heading
              fontSize="xs"
              textAlign="center"
              fontWeight="black"
              lineHeight={1}
            >
              Marketplace Weva
            </Heading>
            <Text pt={3} fontWeight="thin" fontSize="2xs" lineHeight={1}>
              Temukan kemudahan belanja dengan gratis ongkir dan promo menarik
              lainnya hanya di Marketplace Weva Textile
            </Text>
          </GridItem>
          <GridItem m='auto' colSpan={1}>
            <Flex>
                <Spacer />
              <Image
                src="https://wevatextile.com/wp-content/uploads/2022/02/fb-80x80.png"
                height={{ base: "50px", sm: "25px" }}
              />
              <Spacer />
              <Image
                src="https://wevatextile.com/wp-content/uploads/2022/02/ig-80x80.png"
                height={{ base: "50px", sm: "25px" }}
              />
              <Spacer />
              <Image
                src="https://wevatextile.com/wp-content/uploads/2022/02/yt-80x80.png"
                height={{ base: "50px", sm: "25px" }}
              />
              <Spacer />
              <Image
                src="https://wevatextile.com/wp-content/uploads/2022/02/tiktok-80x80.png"
                height={{ base: "50px", sm: "25px" }}
              />
            </Flex>
          </GridItem>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Marketplace;

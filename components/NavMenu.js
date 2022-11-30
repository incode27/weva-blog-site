import React from "react";
import { Center, Flex, Link, Spacer, Text } from "@chakra-ui/react";

const NavMenu = () => {
  return (
    <React.Fragment>
      <Flex px={25} py={2} textTransform='uppercase' fontSize='2xs'>
          <Link>belanja</Link>
          <Spacer />
          <Link>kain kaos terlaris</Link>
          <Spacer />
          <Link>katalog kain</Link>
          <Spacer />
          <Link>panduan</Link>
          <Spacer />
          <Link>daftar harga</Link>
          <Spacer />
          <Link>tentang kami</Link>
      </Flex>
      <Center textTransform='capitalize' w='100%' bgColor='brand.900' py={2}>
        <Text>download daftar harga <Link color='wevaBasic.100'>disini!</Link></Text>
      </Center>
    </React.Fragment>
  );
};

export default NavMenu;

import {
  Box,
  Center,
  Flex,
  Image,
  Icon,
  InputGroup,
  Input,
  Link,
  Spacer,
  Text,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";
import {
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineSwap,
} from "react-icons/ai";

const Toolbar = () => {
  return (
    <React.Fragment>
      <Flex p={15} borderBottom="1px" borderColor="brand.900">
        {/* logo image */}
        <Box>
          <Image
            src="https://wevatextile.com/wp-content/uploads/2020/12/wevatextile-logo.png"
            h={35}
          ></Image>
        </Box>
        <Spacer />
        {/* search bar */}
        <Center px={2}>
          <InputGroup>
            <Input
              focusBorderColor="brand.900"
              variant="filled"
              placeholder="Cari produk..."
              borderRadius="full"
              fontSize="sm"
            />
            <InputRightElement
              children={<Icon as={AiOutlineSearch} fontSize="xl" />}
            />
          </InputGroup>
        </Center>
        {/* add to cart icon  */}
        <Center px={2}>
          <Link>
            <Icon as={AiOutlineShoppingCart} fontSize="xl" />
          </Link>
        </Center>
        {/* transaction history */}
        <Center px={2}>
          <Link>
            <Icon as={AiOutlineSwap} fontSize="xl" />
          </Link>
        </Center>
      </Flex>
    </React.Fragment>
  );
};

export default Toolbar;

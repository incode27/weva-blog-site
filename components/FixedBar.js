import React from "react";
import { Box, Center, Flex, Icon, Text } from "@chakra-ui/react";
import { StarIcon, WarningIcon } from "@chakra-ui/icons";

export default function FixedBars() {
  return (
    <React.Fragment>
      <Flex px={15} py={1} bg="brand.900" id="header">
        <Center pr={15}>
          <StarIcon />
          <Text pl={2} fontSize="sm">
            Weva Rewards
          </Text>
        </Center>
        <Center borderLeft="1px" borderColor="wevaBasic.900" pl={15}>
          <WarningIcon />
          <Text pl={2} fontSize="sm">
            Akunku
          </Text>
        </Center>
      </Flex>
    </React.Fragment>
  );
}

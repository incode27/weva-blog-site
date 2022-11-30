import { Box, Center, Flex, Text } from "@chakra-ui/react"
import React from "react"
Flex

export default function MobileCall() {
    return (
        <React.Fragment>
            <Flex>
                <Center h={75}>
                    <Text>01</Text>
                </Center>
                <Center h={75}>
                    <Text>01</Text>
                </Center>
                <Center h={75}>
                    <Text>01</Text>
                </Center>
            </Flex>
            <div className="bg-black grid grid-cols-5 gap-0 place-items-center h-20 text-sm" >
                <div className="text-white">
                    01
                </div>
                <div className="text-white ">
                    02
                </div>
                <div className="text-white">
                    03
                </div>
                <div className="text-white">
                    04
                </div>
                <div className="text-white">
                    05
                </div>

            </div>
        </React.Fragment>
    )
}
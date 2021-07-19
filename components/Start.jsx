import { Box, Heading, Text, Flex, Image } from "@theme-ui/components";
import React from "react";

export const Start = () => {
    return (
        <div>
            <Flex id="start" sx={{ mb: 4, mt: [5, 2, 5, 6], pt: [4, 2, 6, 6], textAlign: ['left', 'center'], flexDirection: 'column' }}>
                <Heading as="h1" sx={{ variant: 'text.title' }}>Getting Started</Heading>
                <Heading as="h2" sx={{ variant: 'text.subtitle' }}>Easier than learning how to shuffle cards</Heading>
            </Flex>
            <Flex sx={{ display: ['flex', 'none'], flexDirection: 'column' }}>
                <Box mb="5">
                    <Image src="images/Deposit.svg" sx={{ mb: 3, width: '100%' }}></Image>
                    <Heading as="h3" sx={{ variant: 'text.h3' }}>Deposit</Heading>
                    <Text>Safely and securely deposit rCELO into Poof and receive a private magic password for the transaction.</Text>
                </Box>
                <Box mb="5">
                    <Image src="images/Wait.svg" sx={{ mb: 3, width: '100%' }}></Image>
                    <Heading as="h3" sx={{ variant: 'text.h3' }}>Wait</Heading>
                    <Text>Simply wait to increase privacy. The more deposits after yours, the better the privacy for your transaction.   </Text>
                </Box>
                <Box mb="5">
                    <Image src="images/Earn.svg" sx={{ mb: 3, width: '100%' }}></Image>
                    <Heading as="h3" sx={{ variant: 'text.h3' }}>Earn</Heading>
                    <Text>Get rewarded for your patience. You earn anonymity points as your deposit sits in the fund pools.</Text>
                </Box>
                <Box>
                    <Image src="images/Withdraw.svg" sx={{ mb: 3, width: '100%' }}></Image>
                    <Heading as="h3" sx={{ variant: 'text.h3' }}>Withdraw</Heading>
                    <Text>Whenever you’re ready, easily send money or withdraw your funds with the magic password.</Text>
                </Box>
            </Flex>
            <Image sx={{ display: ['none', 'none', 'flex', 'flex'] }} src="images/Start.svg"></Image>
            <Flex sx={{ flexDirection: 'row', display: ['none', 'flex'], width: '100%', justifyContent: 'space-between', mb: 6 }}>
                <Box sx={{ display: ['none', 'block'], width: '22%' }}>
                    <Heading as="h3" sx={{ variant: 'text.h3' }}>Deposit</Heading>
                    <Text>Safely and securely deposit rCELO into Poof and receive a private magic password for the transaction.</Text>
                </Box>
                <Box sx={{ display: ['none', 'block'], width: '22%' }}>
                    <Heading as="h3" sx={{ variant: 'text.h3' }}>Wait</Heading>
                    <Text>Simply wait to increase privacy. The more deposits after yours, the better the privacy for your transaction.   </Text>
                </Box>
                <Box sx={{ display: ['none', 'block'], width: '22%' }}>
                    <Heading as="h3" sx={{ variant: 'text.h3' }}>Earn</Heading>
                    <Text>Get rewarded for your patience. You earn anonymity points as your deposit sits in the fund pools.</Text>
                </Box>
                <Box sx={{ display: ['none', 'block'], width: '22%' }}>
                    <Heading as="h3" sx={{ variant: 'text.h3' }}>Withdraw</Heading>
                    <Text>Whenever you’re ready, easily send money or withdraw your funds with the magic password.</Text>
                </Box>
            </Flex>
        </div>

    );
};
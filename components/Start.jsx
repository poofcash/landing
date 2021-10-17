import { Box, Heading, Text, Flex, Image } from "@theme-ui/components";
import React from "react";

export const Start = () => {
  return (
    <div>
      <Flex
        id="start"
        sx={{
          mb: 4,
          mt: [5, 2, 5, 6],
          pt: [4, 2, 6, 6],
          textAlign: ["left", "center"],
          flexDirection: "column",
        }}
      >
        <Heading as="h1" sx={{ variant: "text.title" }}>
          Getting Started
        </Heading>
        <Heading as="h2" sx={{ variant: "text.subtitle" }}>
          Easier than learning how to shuffle cards
        </Heading>
      </Flex>
      <Flex sx={{ display: ["flex", "none"], flexDirection: "column" }}>
        <Box mb="5">
          <Image src="images/Deposit.svg" sx={{ mb: 3, width: "100%" }}></Image>
          <Heading as="h3" sx={{ variant: "text.h3" }}>
            Deposit
          </Heading>
          <Text>
            Deposit crypto into the Poof private savings account. While
            deposited, no one can see your balance except for you.
          </Text>
        </Box>
        <Box mb="5">
          <Image src="images/Wait.svg" sx={{ mb: 3, width: "100%" }}></Image>
          <Heading as="h3" sx={{ variant: "text.h3" }}>
            Wait
          </Heading>
          <Text>
            Simply wait to increase privacy. The more transactions after your
            deposit, the better the privacy for your transaction.
          </Text>
        </Box>
        <Box mb="5">
          <Image src="images/Earn.svg" sx={{ mb: 3, width: "100%" }}></Image>
          <Heading as="h3" sx={{ variant: "text.h3" }}>
            Earn
          </Heading>
          <Text>
            Automatically earn interest while deposited into Poof via lending
            APR. You can earn additional yield at no cost by taking out a 0%
            interest pToken loan.
          </Text>
        </Box>
        <Box>
          <Image
            src="images/Withdraw.svg"
            sx={{ mb: 3, width: "100%" }}
          ></Image>
          <Heading as="h3" sx={{ variant: "text.h3" }}>
            Transfer
          </Heading>
          <Text>Transfer crypto privately in any amount to any user.</Text>
        </Box>
      </Flex>
      <Image
        sx={{ display: ["none", "none", "flex", "flex"] }}
        src="images/Start.svg"
      ></Image>
      <Flex
        sx={{
          flexDirection: "row",
          display: ["none", "flex"],
          width: "100%",
          justifyContent: "space-between",
          mb: 6,
        }}
      >
        <Box sx={{ display: ["none", "block"], width: "22%" }}>
          <Heading as="h3" sx={{ variant: "text.h3" }}>
            Deposit
          </Heading>
          <Text>
            Deposit crypto into the Poof private savings account. While
            deposited, no one can see your balance except for you.
          </Text>
        </Box>
        <Box sx={{ display: ["none", "block"], width: "22%" }}>
          <Heading as="h3" sx={{ variant: "text.h3" }}>
            Wait
          </Heading>
          <Text>
            Simply wait to increase privacy. The more transactions after your
            deposit, the better the privacy for your transaction.
          </Text>
        </Box>
        <Box sx={{ display: ["none", "block"], width: "22%" }}>
          <Heading as="h3" sx={{ variant: "text.h3" }}>
            Earn
          </Heading>
          <Text>
            Automatically earn interest while deposited into Poof via lending
            APR. You can earn additional yield at no cost by taking out a 0%
            interest pToken loan.
          </Text>
        </Box>
        <Box sx={{ display: ["none", "block"], width: "22%" }}>
          <Heading as="h3" sx={{ variant: "text.h3" }}>
            Withdraw
          </Heading>
          <Text>Transfer crypto privately in any amount to any user.</Text>
        </Box>
      </Flex>
    </div>
  );
};


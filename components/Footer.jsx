import { Box, Heading, Text, Flex, Link } from "@theme-ui/components";
import React from "react";

export const Footer = () => {
    return (
        <Flex sx={{ mt: 5, py: [4, '72px'], justifyContent: 'center' }}>
            <Flex sx={{ width: ['100%', '80%'], flexDirection: ['column', 'row'], justifyContent: 'space-between' }}>
                <Flex sx={{ width: ['100%', '60%'], flexDirection: 'column', alignItems: "flex-start", mb: 5 }}>
                    <Heading as="h3" sx={{ variant: 'text.logo', mb: 2 }}>poof</Heading>
                    <Text sx={{ width: ['100%', '60%'] }}>Making it possible to have privacy in this public world, with a little bit of magic.</Text>

                    <Text mt="3">Copyright © Poof 2021. All rights reserved</Text>
                    <Text>Created by Brian Li. Designed by dang.</Text>
                </Flex>
                <Flex sx={{ width: ['100%', '40%'], flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <Flex sx={{ width: '50%', flexDirection: 'column', alignItems: "flex-start" }}>
                        <Heading as="h3" sx={{ variant: 'text.h3', color: 'primary', mb: 2 }}>Product</Heading>
                        <Link variant='footer' href="https://app.poof.cash/" target="_blank" mr="3">
                            App
                        </Link>
                        <Link variant='footer' href="https://rcelo.studio/" target="_blank" mr="3">
                            rCelo Studio
                        </Link>
                        <Link variant='footer' href="https://alfajores.poof.cash" target="_blank" mr="3">
                            Testnet
                        </Link>
                        <Link variant='footer' href="https://romulus.page/romulus" target="_blank" mr="3">
                            Governance
                        </Link>
                        <Link variant='footer' href="https://deploy.poof.cash" target="_blank" mr="3">
                            Deployment
                        </Link>
                        <Link variant='footer' href="https://alfajores.poof.cash" target="_blank" mr="3">
                            Testnet
                        </Link>

                        <Link variant='footer' href="https://docs.poof.cash/" target="_blank" mr="3">
                            Docs
                        </Link>
                    </Flex>
                    <Flex sx={{ width: '50%', flexDirection: 'column', alignItems: "flex-start" }}>
                        <Heading as="h3" sx={{ variant: 'text.h3', color: 'primary', mb: 2 }}>Socials</Heading>
                        <Link variant='footer' href="https://discord.com/invite/xgEbWkGgu7" target="_blank" mr="3">
                            Discord
                        </Link>
                        <Link variant='footer' href="https://t.me/joinchat/7BfoYBMc499jYTAx" target="_blank" mr="3">
                            Telegram
                        </Link>
                        <Link variant='footer' href="https://www.reddit.com/r/poofcash/" target="_blank" mr="3">
                            Reddit
                        </Link>
                        <Link variant='footer' href="https://twitter.com/PoofCash" target="_blank" mr="3">
                            Twitter
                        </Link>
                        <Link variant='footer' href="https://poofcash.medium.com/" target="_blank" mr="3">
                            Medium
                        </Link>
                    </Flex>
                </Flex>

            </Flex >
        </Flex >

    );
};
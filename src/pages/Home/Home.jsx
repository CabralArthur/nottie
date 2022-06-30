import {
    Button,
    Flex,
    Heading,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';
import React from 'react'

const Home = () => {
    const spanBarStyle = {
        content: "''",
        width: 'full',
        height: useBreakpointValue({ base: '20%', md: '30%' }),
        position: 'absolute',
        bottom: 1,
        left: 0,
        bg: 'purple.600',
        zIndex: -1,
    };

    return (
        <Stack minH={'80vh'} direction={{ base: 'column', md: 'row' }}>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={6} w={'full'} maxW={'lg'}>
                    <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} textAlign={'center'}>
                        <Text as={'span'} position={'relative'} _after={spanBarStyle}>
                            Write and Download
                        </Text>

                        <Text color={'purple.600'} as={'span'} align={'center'}>
                            Your Readme
                        </Text>
                    </Heading>

                    <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'} textAlign={'center'}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Exercitationem, explicabo odit dolorum numquam et tempore dignissimos.
                    </Text>

                    <Stack direction={{ base: 'column', md: 'row' }} spacing={4} justifyContent={'center'}>
                        <Button
                        rounded={'full'}
                        bg={'purple.600'}
                        color={'white'}
                        _hover={{ bg: 'purple.500' }}>
                            Create a Readme
                        </Button>
                        <Button rounded={'full'}>Github Project</Button>
                    </Stack>
                </Stack>
            </Flex>
        </Stack>
    )
}

export default Home;
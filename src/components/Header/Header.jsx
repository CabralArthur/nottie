import React from 'react'
import styled from 'styled-components';
import NottieIconSource from '../../assets/icon/nottie-icon.svg';
import { Box, Image, Flex, Stack, Text, Button } from '@chakra-ui/react';

const Header = () => {
    const imageHoverStyle = {
        border: '1px solid red',
        borderRadius: '8px'
    };

    const buttonHoverStyle = {
        backgroundColor: '#E9D8FD',
        color: '#6B46C1'
    };

    
    const ImageFull = styled(Image)``

    return (
        <Box paddingY={8}>
            <Flex
                justifyContent={'space-between'}
            >
                <Stack
                    direction={'row'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                >
                    <ImageFull
                        maxW={10}
                        src={NottieIconSource}
                        _hover={imageHoverStyle}
                    />
                    <Text
                        color={'purple.600'}
                        fontWeight={600}
                        fontSize={'xl'}
                    >
                        Nottie 
                    </Text>
                </Stack>
                <Stack
                    direction={'row'}
                    alignItems={'center'}
                >
                    <Button
                        color={'purple.50'}
                        backgroundColor={'purple.600'}
                        _hover={buttonHoverStyle}
                    >
                        Nottie Generator!
                    </Button>
                </Stack>
            </Flex>
        </Box>
    )
}

export default Header
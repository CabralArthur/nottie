import React from 'react'
import { Box, Flex, Stack, Button } from '@chakra-ui/react';
import Logo from '../Logo/Logo';

const Header = ({
    onNavigateToGenerator
}) => {
    const buttonHoverStyle = {
        backgroundColor: '#E9D8FD',
        color: '#6B46C1'
    };

    return (
        <Box paddingY={8}>
            <Flex justifyContent={'space-between'} >
                <Logo/>
                <Stack direction={'row'} alignItems={'center'}>
                    <Button color={'purple.50'} backgroundColor={'purple.600'} _hover={buttonHoverStyle} onClick={onNavigateToGenerator}>
                        Nottie Generator!
                    </Button>
                </Stack>
            </Flex>
        </Box>
    )
}

export default Header
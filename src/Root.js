import Home from './pages/Home';
import Header from './containers/Header'
import { 
    Box,
    Flex,
    Container,
    useColorModeValue,
    Button,
    useColorMode,
    Text
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

const Root = () => {
    const { colorMode, toggleColorMode } = useColorMode()
 
  return (
    <Router>
        <Container maxWidth={1280}>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>} />
            </Routes>
        </Container>
        <Box bg={useColorModeValue('gray.50', 'gray.900')} color={useColorModeValue('gray.700', 'gray.200')}>
            <Box py={2}>
                <Flex
                    align={'center'}
                    _before={{
                        content: '""',
                        borderBottom: '1px solid',
                        borderColor: useColorModeValue('gray.200', 'gray.700'),
                        flexGrow: 1,
                        mr: 8,
                    }}
                    _after={{
                        content: '""',
                        borderBottom: '1px solid',
                        borderColor: useColorModeValue('gray.200', 'gray.700'),
                        flexGrow: 1,
                        ml: 8,
                    }}
                >
                    <Button onClick={toggleColorMode}>
                        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    </Button>
                </Flex>
                <Text pt={6} fontSize={'sm'} textAlign={'center'}>
                    © 2022 Nottie - All rights reserved
                </Text>
            </Box>
        </Box>
    </Router>
  );
}

export default Root;

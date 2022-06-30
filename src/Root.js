import Home from './pages/Home';
import Header from './containers/Header'
import Footer from './containers/Footer';
import { Container } from '@chakra-ui/react';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

const Root = () => { 
  return (
    <Router>
        <Container maxWidth={1280}>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>} />
            </Routes>
        </Container>
        <Footer/>
    </Router>
  );
}

export default Root;

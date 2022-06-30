import Home from './pages/Home';
import Header from './components/Header'
import { Container } from '@chakra-ui/react';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

const Root = () => {
  return (
    <Router>
        <Container maxWidth={1280}>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>} />
                {/* <Route path="/generator" element={<Generator />} /> */}
            </Routes>
        </Container>
    </Router>
  );
}

export default Root;

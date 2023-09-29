import { Box, Button, Link, Text } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const MainPage = () => {
    return (
        <Box display='flex' w='100%' h='100vh' bg='#1A202C'>
            <Box b='white' w='350px' h='100%' display='flex' flexDir='column' gap='75px' alignItems='center' justifyContent='center' borderRight='solid' bg='#111827'>
                <Text top='75px' position='fixed' color='white' fontSize='2xl' fontWeight='bold'>Dashboard</Text>
                <Link href="query" color='#171923' fontWeight='bold'><Button bg='#1A202C' color='white' w='195px' h='45px'>Consulta Principal</Button></Link>
                <Link href="queries" color='#171923' fontWeight='bold'><Button bg='#1A202C' color='white' w='195px' h='45px'>Otras Consultas</Button></Link>
            </Box>
            <Box w="100%" h='100%' display="flex" flexDir="column" justifyContent="center">
                <Outlet />
            </Box>
        </Box>
    );
};

export default MainPage;
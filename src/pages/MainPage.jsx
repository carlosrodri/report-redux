import { Box, Button, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const MainPage = () => {
    return (
        <Box w='100%' h='100vh' display='flex' flexDir='column' alignItems='center' justifyContent='center' gap={7}>
            <Heading size='lg' fontSize='50px'>
                Carlos's Dashboard
            </Heading>
            <Link to='query'>
                <Button size='lg' bg='magenta' color='white'>
                    Go to main panel
                </Button>
            </Link>
        </Box>
    )
};

export default MainPage;

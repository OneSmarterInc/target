import React from 'react';
import { Box, Heading, Button, VStack, HStack, Image, Input,Text } from '@chakra-ui/react';
import logo from '../assets/log.png';
import { useNavigate } from 'react-router-dom'; // Assuming you are using react-router
import { MdPerson, MdLogout } from 'react-icons/md';
import { MdHelp } from 'react-icons/md';
import Sidebar from '../components/Sidebar';



const Navbar = () => {
    const navigate = useNavigate(); // Hook for navigation
    
    const styles = {
        nav: {
            height: '30px',
            width: '30px',
            marginRight: '10px',
            borderRadius: '50%',
        },
    };
    
    return (
        <>
        <Sidebar />
        <Box bg="#B31C1C" color="white" py={4} px={8}>
            <HStack justifyContent="space-between" alignItems="center">
                <HStack alignItems="center">
                    <Text w={"30px"}>{'     '}</Text>
                    <Image src={logo} style={styles.nav} alt="BestBuy Logo" onClick={() => { navigate('/home') }} title='home' cursor={'pointer'}/> 
                    <Heading as="h1" size="lg" onClick={() => { navigate('/home') }} title='home' cursor={'pointer'}>+</Heading>
                    <Input ml={24} placeholder="Search" w={{ base: '100px', md: '500px' }} bg={'white'}></Input>
                </HStack>
                <HStack spacing={4} alignItems="center">
                    
                    <Button variant="link" colorScheme="white" onClick={() => { navigate('/news') }}>
                        <MdHelp size={30} style={{ marginRight: '10px' }} /> HELP CENTER
                    </Button>
                    <Button variant="link" colorScheme="white" onClick={() => { navigate('/') }}>
                        <MdPerson size={30} style={{ marginRight: '10px' }} /> PROFILE
                    </Button>
                    <Button variant="link" colorScheme="white" onClick={() => { navigate('/') }}>
                        <MdLogout size={30} style={{ marginRight: '10px' }} />
                    </Button>
                </HStack>
            </HStack>
        </Box>
        </>
    );
};

export default Navbar;

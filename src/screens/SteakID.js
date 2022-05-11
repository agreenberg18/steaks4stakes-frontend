import React from 'react';
import { useState } from 'react';
import {
    Box,
    VStack,
    Grid,
    Image,
    Text,
    Textarea,
    Button,
    Input
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import BG from '../assets/BG.png'
import Logo from '../assets/Logo.png'
import Chef from '../assets/Chef.png'

function SteakID() {
    return (
        <Box
            backgroundImage={BG}
            backgroundSize='cover'
            backgroundRepeat='no-repeat'
            backgroundPosition='center center'
            // textAlign="center"
            fontSize="lg">
            <Grid minH="100vh">
                <VStack spacing={6}>
                    <Box>
                        <Image mt={6} src={Logo} alt="G Logo" />
                    </Box>
                    <Box>
                        <Image src={Chef} alt="G Logo" />
                    </Box>
                    <Box>
                        <Text my={3} fontWeight='bold' fontSize="2xl">Enter Unique Steak ID</Text>
                        <Input width='70vw' placeholder='AzLklkflipM' />
                    </Box>
                    <Box>
                    <Button mt={12} colorScheme='teal' width='70vw'>
                        Show me the Steaks
                        </Button>
                    </Box>
                </VStack>
            </Grid>
        </Box>

    )
}
export default SteakID
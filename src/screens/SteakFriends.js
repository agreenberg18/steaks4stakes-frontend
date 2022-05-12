import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'

import {
    Box,
    VStack,
    Grid,
    Image,
    Text,
    Textarea,
    Button,
    Input,
    InputGroup,
    InputLeftElement,
    HStack
} from '@chakra-ui/react';

import BG from '../assets/BG.png'
import Logo from '../assets/Logo.png'
import { InfoIcon } from '@chakra-ui/icons'

const data = {
    "_id": "627b0aee10b2fb13d79e12cf",
    "stakeid": "5DwqX4bME",
    "initiator": "Joe Dirt",
    "date": "2022-08-18",
    "stakes": "the best",
    "restaurant": "mcdonalds",
    "active": false,
    "friends": []
}

function SteakFriends() {
    const [active, setActive] = useState(false)
    const [initiator, setInitiator] = useState('')

    useEffect(() => {
        setActive(data.active)
        if (localStorage.getItem("SteakMaster") == data.stakeid){
            setInitiator('you')
        }
        else {
            setInitiator(data.initiator)
        }
    }, [active])

    return (
        <Box
            backgroundImage={BG}
            backgroundSize='cover'
            backgroundRepeat='no-repeat'
            backgroundPosition='center center'
            // textAlign="center"
            fontSize="lg">
            <Grid minH="100vh">
                <VStack spacing={4}>
                    <Box>
                        <Image mt={6} src={Logo} alt="G Logo" />
                    </Box>
                    <Box>
                        <Text fontWeight='bold' fontSize='xl'>Steak Challengers</Text>
                    </Box>
                    <Box borderRadius='6' p={6} backgroundColor='#BEE3F8' minW="75%">
                     <HStack><InfoIcon mr={4} color='#3182CE' /> <Text>Hello World</Text></HStack>
                         
                    </Box>
                </VStack>
            </Grid>
        </Box>
    )
}

export default SteakFriends
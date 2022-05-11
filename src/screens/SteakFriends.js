
import { useNavigate } from 'react-router-dom';

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
    InputLeftElement
} from '@chakra-ui/react';

import BG from '../assets/BG.png'
import Logo from '../assets/Logo.png'

const data = [{
    "_id": "62747f5775120e38a3c195f0",
    "stakeid": "2390392efjeifefjiefj",
    "initiator": "Joe Dirt",
    "date": "2022-08-18",
    "stakes": "the best",
    "restaurant": "mcdonalds",
    "friends": [{
        "name" : "Janice Doe",
        "Bet" : "June 25th"
    }]
}]

function SteakFriends() {
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
                </VStack>
            </Grid>
        </Box>
    )
}

export default SteakFriends
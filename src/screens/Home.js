import React from 'react';
import { useState, useEffect } from 'react';
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

import { PhoneIcon } from '@chakra-ui/icons'

import DatePicker from 'react-date-picker';
import PlacesAutocomplete from 'react-places-autocomplete/dist/PlacesAutocomplete';
import BG from '../assets/BG.png'
import Logo from '../assets/Logo.png'
import { useNavigate } from 'react-router-dom';

function Home() {
    const [address, setAddress] = useState('')
    const searchOptions = {
        types: ["restaurant"]
    }

    const [date, dateChange] = useState('');
    const [dateFmt, setDateFmt] = useState('');
    const [theStakes, setTheStakes] = useState('')
    const [theSteaks, setTheSteaks] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [bet, setBet] = useState('')
    const [btnState, setBtnState] = useState(true)
    const [steakID, setSteakID] = useState('')

    const handleCreateStake = async () => {
        console.log(dateFmt)
        console.log(theStakes)
        console.log(address)
        console.log(name)
        console.log(phone)
        console.log(bet)
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let payload = JSON.stringify({
            "steakid": steakID,
            "stakes": theStakes,
            "restaurant": "Little Sammy Shop",//address,
            "phone": phone,
            "name": name,
            "date": dateFmt
        });

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: payload,
            redirect: 'follow'
        };
        try {
            let resp = await fetch("/api/create-steak", requestOptions)
            let respFmt = await resp.json()
            console.log("API Resp", respFmt)
            if (respFmt.stakes) {
                localStorage.setItem('SteakMaster', steakID)
                goToSteakFriends()
            }
            else {
                alert('error')
            }
        }
        catch (e) {
            alert('Error, API down maybe?', e)
        }
    }
    useEffect(() => {
        const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-';
        const randomString = (length, chars) => {
            var result = '';
            for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
            return result;
        }
        setSteakID(randomString(9, chars))
    }, [])

    useEffect(() => {
        if (date !== '') {
            let dateString = date.toLocaleDateString()
            setDateFmt(dateString)
        }
    }, [date])

    useEffect(() => {
        if (date !== "" && theStakes !== "" && name !== "" && phone !== "" && bet !== "") {
            setBtnState(false)
        }
        else {
            //false
            setBtnState(false)
        }
    }, [date, theStakes, name, phone, bet])


    const handleSelect = async value => {
        const results = await value;
        console.log(results)
        // const results = await geocodeByAddress(value);
        // const latLng = await getLatLng(results[0]);
        setAddress(value);
    };

    let navigate = useNavigate();

    const goToSteakID = () => {
        navigate('/steak-id')
    }

    const goToSteakFriends = () => {
        navigate('steak-friends')
    }

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
                        <Text fontWeight='bold' fontSize='xl'>The Stakes Are Steaks</Text>
                    </Box>
                    <Box>
                        <Button onClick={goToSteakID} width='70vw' color='#319795' variant='outline'>Enter Steak ID</Button>
                    </Box>
                    <Box>
                        <Text mb={1} fontSize="lg">The Stakes*</Text>
                        <Textarea value={theStakes} onChange={(e => { setTheStakes(e.target.value) })} width='70vw' placeholder='Danny will pop the question to Megan on September 20th' />
                    </Box>
                    <Box>
                        <Text mb={1} fontSize="lg">The Steaks*</Text>
                        <PlacesAutocomplete
                            value={address}
                            onChange={setAddress}
                            onSelect={handleSelect}
                            width='70vw'
                            searchOptions={searchOptions}
                        >
                            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                <div>
                                    <Input width='70vw' {...getInputProps({ placeholder: "Type address" })} />

                                    <div>
                                        {loading ? <div>...loading</div> : null}

                                        {suggestions.map(suggestion => {
                                            const style = {
                                                backgroundColor: suggestion.active ? "#41b6e6" : "#D3D3D3",
                                                cursor: 'pointer',
                                                width: '70vw'
                                            };

                                            return (
                                                <ul {...getSuggestionItemProps(suggestion, { style })}>
                                                    {suggestion.description}
                                                </ul>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </PlacesAutocomplete>
                    </Box>
                    <Box width='70vw'>
                        <Text mb={1} fontSize="lg">The Date*</Text>
                        <DatePicker width='70vw' style={{ width: '70vw' }} className="datepicker" onChange={dateChange} value={date} />
                    </Box>
                    <Box>
                        <Text mb={1} fontSize="lg">Your Name*</Text>
                        <Input value={name} onChange={(e => { setName(e.target.value) })} width='70vw' placeholder='Andrew G' />
                    </Box>
                    <Box>
                        <Text mb={1} fontSize="lg">Your Number*</Text>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents='none'
                                children={<PhoneIcon color='gray.300' />}
                            />
                            <Input value={phone} onChange={(e => { setPhone(e.target.value) })} width='70vw' placeholder='012-345-6789' type='number' />
                        </InputGroup>
                    </Box>
                    <Box>
                        <Text mb={1} fontSize="lg">Your Bet*</Text>
                        <Textarea value={bet} onChange={(e => { setBet(e.target.value) })} width='70vw' placeholder='July 25th' />
                    </Box>
                    <Button isDisabled={btnState} onClick={handleCreateStake} colorScheme='teal' width='70vw'>
                        The Steaks Are On!
                    </Button>
                </VStack>
            </Grid>
        </Box>
    );
}

export default Home;

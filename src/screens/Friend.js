import {
    Avatar,
    Grid,
    GridItem,
    HStack,
    Text
} from '@chakra-ui/react';

function Friend(props) {
    return (
        <Grid>
            <GridItem>
                <HStack>
                    <Avatar color="white" bg='teal.700' name={props.steakName}></Avatar>
                    <Text>{props.steakName}</Text>
                </HStack>
                <Text m="2">{props.stakes}</Text>
            </GridItem>
        </Grid>)
}

export default Friend
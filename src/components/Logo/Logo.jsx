import React from 'react'
import { 
    Image,
    Stack,
    Text
} from '@chakra-ui/react';
import NottieIconSource from '../../assets/icon/nottie-icon.svg';

const Logo = props => {
    const imageHoverStyle = {
        border: '1px solid #6B46C1',
        borderRadius: '8px',
        cursor: 'pointer',
        padding: .5
    };

    return (
        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
            <Image maxW={props.maxWidth || 10} src={NottieIconSource} _hover={imageHoverStyle}/>
            { !props.withtoutLabel ? <Text color={'purple.600'} fontWeight={600} fontSize={'xl'}> Nottie </Text> : '' }
        </Stack>
    )
}

export default Logo

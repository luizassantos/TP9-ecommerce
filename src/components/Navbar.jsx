import React, { useEffect } from 'react'

import { Box, HStack, Pressable, Icon, Text } from 'native-base'
import { Feather } from '@expo/vector-icons'


const Navbar = ({ navigation }) => {
  return (
    <Box
        backgroundColor={"#f8f8f8"}
        flexDirection={"column"}
    >
        <HStack
        padding={4} w={"100%"}
        alignItems={"center"} justifyContent={"space-between"}
        safeArea background={"brown"}
        >
            <Box>
                <Pressable onPress={() => navigation.navigate('Home')} color={"#fff"}>
                    <Text fontWeight={"bold"} color={"#fff"} fontSize={'lg'} > LutasPRO </Text>
                </Pressable>
            </Box>

            <Box flexDir={"row"}>
                <Pressable
                    onPress={() => navigation.navigate('Carrinho')}
                >
                <Icon 
                    as={Feather}
                    name={"shopping-cart"}
                    size={7}
                    color={"#fff"}
                    marginRight={4}
                    />
                </Pressable>

                <Pressable>
                <Icon 
                    as={Feather}
                    name={"user"}
                    size={7}
                    color={"#fff"}
                />
                </Pressable>
            </Box>
        </HStack>
  </Box>
  )
}

export default Navbar

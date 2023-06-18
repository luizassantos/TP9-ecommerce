import React from 'react'

import { Box, Image, Heading, Text, Icon, Button } from 'native-base'
import { addProduto } from '../infra/carrinho'

import { useToast } from 'native-base';

const Produto = ({produto}) => {

    const toast = useToast();

    const addToCart = async() => {
        await addProduto(produto);

        toast.show({
            render: () => {
                return (
                    <Box bg="emerald.500" px="2" py="1" rounded="lg" mb={5} >
                        Produto adicionado ao carrinho!
                    </Box>
                )
            }
        })
    }

  return (
    <Box 
        flex={1}
        flexDirection={"column"}
        marginBottom={4}
        backgroundColor={"#fff"}
        padding={1}
        borderRadius={7}
        
    >
        <Box
            textAlign={"center"}
        >
            
            <Box flex={1} textAlign={"center"} alignItems={"center"} margin={4}>
                <Image
                    source={{uri: produto.imagem}}
                    size={170}
                    borderRadius={7}
                    alt={produto.nome}
                />
            </Box>

            <Box textAlign={"center"} >
                <Heading textAlign="center" size={"lg"}>{produto.nome}</Heading>
                <Text textAlign="center" fontSize="md" marginTop={2} >Preço: R${produto.preco}</Text>
            </Box>

            <Button
                size="md" 
                variant="ghost"
                onPress={addToCart}
            >
                ADICIONAR AO CARRINHO
            </Button>
        </Box>

    </Box>
  )
}

export default Produto

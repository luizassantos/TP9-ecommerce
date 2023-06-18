import React, { useState } from 'react'

import { Box, Image, Heading, Text, Button, useSafeArea } from 'native-base'
import { addProduto, deletarProdutoCarrinho, listarProdutosCarrinho } from '../infra/carrinho'

const ProdutoCarrinho = ({produtoCarrinho, setProdutosCarrinho}) => {

    const [produto,setProd] = useState(produtoCarrinho.produto)

    const deleteProdCart = async() => {
        await deletarProdutoCarrinho(produtoCarrinho.id);
        updateList()
    }

    const updateList = async() => {
        const updatedCart = await listarProdutosCarrinho()
        setProdutosCarrinho(updatedCart)
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
            flexDirection={"row"}
        >
            
            <Box >
                <Image
                    source={{uri: produto.imagem}}
                    size={110}
                    borderRadius={7}
                    alt={produto.nome}
                    margin={2}
                />
            </Box>

            <Box flex={1} marginLeft={4} alignContent={"center"} justifyContent={"center"}>
                <Heading 
                    size={"md"} 
                    textAlign={"center"}
                >
                    {produto.nome}
                </Heading>

                <Text textAlign="center" fontSize="md" >Preço: R${produto.preco}</Text>
                <Button
                    size="md" 
                    variant="ghost" 
                    colorScheme="secondary"
                    onPress={deleteProdCart}
                >
                    Excluir do carrinho
                </Button>
            </Box>
        </Box>
    </Box>
  )
}

export default ProdutoCarrinho

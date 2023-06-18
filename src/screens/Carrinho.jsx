import React, { useState, useEffect } from 'react'

import {Box, Icon, FlatList,  Text} from 'native-base'

import { Feather } from '@expo/vector-icons'

import Navbar from '../components/Navbar'
import { listarProdutosCarrinho } from '../infra/carrinho'
import ProdutoCarrinho from '../components/ProdutoCarrinho'


const Carrinho = ({navigation}) => {

  const [produtosCarrinho, setProdutosCarrinho] = useState([])
  const [isCarrinhoVazio, setIsCarrinhoVazio] = useState(true)

  const getProductsCart = async() =>{
    const produtosLista = await listarProdutosCarrinho();
    setProdutosCarrinho(produtosLista)
  }  

  useEffect(() => {
    getProductsCart()

    if(!(produtosCarrinho.length === 0)){
      setIsCarrinhoVazio(false)
    }
  },[produtosCarrinho])

  
  return (
   
      <Box
        flex={1} 
        backgroundColor={"#f8f8f8"}
        flexDirection={"column"}
      >
        <Navbar navigation={navigation}/>
        
        {isCarrinhoVazio ? (
          <Box flex={1} paddingX={4} marginTop={45} alignItems={"center"}>

              <Text fontSize={"2xl"}  marginBottom={5}>Seu carrinho está vazio</Text>
              <Icon
                as={Feather}
                name={"shopping-bag"}
                size={20}
              />
            
          </Box>
        ) : (
          <Box paddingX={4} >

            <FlatList
              marginY={4}
              data={produtosCarrinho}
              renderItem={({ item }) => 
                <ProdutoCarrinho produtoCarrinho={item} setProdutosCarrinho={setProdutosCarrinho}/>
              }
            />
          </Box>
        )}
    </Box>
   
  )
}

export default Carrinho;



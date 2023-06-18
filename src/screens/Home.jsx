import React, { useEffect, useState } from 'react'

import { Box, FlatList } from 'native-base'
import Navbar from '../components/Navbar'
import Produto from '../components/Produto'
import { listarProdutos } from '../infra/produtos'

const Home = ({ navigation }) => {

  const [produtos, setProdutos] = useState("")

  const getProductsList = async() =>{
    const produtosLista = await listarProdutos()
    setProdutos(produtosLista)

    
  }  

  useEffect(() => {
    getProductsList()
    console.log(produtos)
  },[])
  
    
  return (

    <Box
      flex={1} 
      backgroundColor={"#f8f8f8"}
      flexDirection={"column"}

     >
      <Navbar navigation={navigation}/>

      <Box paddingX={4} >
        <FlatList
          marginTop={15}
          data={produtos}
          renderItem={({ item }) => <Produto produto={item} />}
          showsVerticalScrollIndicator={false}
          marginBottom={20}
        />
      </Box>
    </Box>

  )
}

export default Home
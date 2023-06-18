import { collection, getDocs, deleteDoc, doc, addDoc } from "firebase/firestore";
import { db } from "./firebase";

export const addProduto = async (produto) => {
    const newProduct = {produto}
    try {
        await addDoc(collection(db, "carrinho"), newProduct);
    } catch (error) {
        console.error("Erro: ", error)
    }
}

export const listarProdutosCarrinho = async () => {
    const doc_refs = await getDocs(collection(db, "carrinho"));
    const retorno = [];
    doc_refs.forEach(produto => {
        retorno.push({id:produto.id, ...produto.data()});
    });
    return retorno;
}

export const deletarProdutoCarrinho = async (id) =>{
    const task_doc = doc(db, "carrinho", id);
    return  deleteDoc(task_doc);    
}

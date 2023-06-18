import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export const listarProdutos = async () => {
    const doc_refs = await getDocs(collection(db, "produtos"));
    const retorno = [];
    doc_refs.forEach(produto => {
        retorno.push({id:produto.id, ...produto.data()});
    });
    return retorno;
}


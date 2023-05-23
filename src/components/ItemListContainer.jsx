import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import productos from "./json/productos.json"
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    
useEffect(() => {
    const promesa = new Promise ((resolve)=>{
        setTimeout(() => {  
            resolve(productos)
        }, 2000);
    })

    promesa.then(data =>{
        setItems(data);
    })
}, [])

    
    return (
            <div className="container ">
                <div className="row">
                <ItemList productos={items}/> 
                <ItemCount stock={15}/>
                </div>
            </div>
    );
};

export default ItemListContainer;

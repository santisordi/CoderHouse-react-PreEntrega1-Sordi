import { useEffect, useState } from "react";
import productos from "./json/productos.json"
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
        const [item, setItem] = useState({});

        useEffect(()=>{
            const promesa = new Promise((resolve)=>{
                setTimeout(() => { 
                    resolve(productos.find(item => item.id === 2)); 

                }, 2000);
        })

        promesa.then(data => {
            setItem(data);
        })

    },[]);
    
    return(
        <div> 
            <ItemDetail producto= {item}/>
        </div>
    )
}

export default ItemDetailContainer;
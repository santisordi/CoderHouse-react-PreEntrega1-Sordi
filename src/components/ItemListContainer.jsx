import { useEffect, useState } from "react";
//import productos from "./json/productos.json"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
// import { getFirestore, doc, getDoc } from "firebase/firestore"
import { getFirestore, getDocs, collection } from "firebase/firestore"
const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();

// acceder a json local        
// useEffect(() => {
//     const promesa = new Promise ((resolve)=>{
//         setTimeout(() => {  
//             resolve(id ? productos.filter(item => item.categoria === id) : productos);
//         }, 2000);
//     })

//     promesa.then(data =>{
//         setItems(data);
//     })
// }, [id])

//acceder desde firestore a un producto especifico
    // useEffect(() => {
    //     const db = getFirestore();
    //     const producto = doc(db, "Items","hn7TqY7VYxEuHu90mE1n");
    //     getDoc(producto).then(resultado=>{
    //         if (resultado.exists()) {
    //             setItems ({ id:resultado.id, ...resultado.data()})
    //         } else {
    //             console.log("Error")
    //         }
    //     })

    // }, [])

//acceder a una coleccion
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "Items");
        getDocs(itemsCollection).then(resultado=>{
            if (resultado.size > 0) {
            setItems(resultado.docs.map(producto => ({id:producto.id, ...producto.data()})))
            } else {
                console.log("Error no se encontron productos")
            }
        })

    }, [])
    
    return (
            <div className="container my-5">
                <div className="row">
                <ItemList productos={items}/> 
                    {/* <div className="col-md-4 offset-md-2">
                        <img src={items.imagen} alt={items.Nombre} className="img-fluid"/>

                    </div>
                </div>
                <div className="row">
                        <div className="col-md-4">
                            <h2>{items.Nombre}</h2>
                            <p>${items.precio}</p>
                        </div> */}
                </div>
            </div>
    );
};

export default ItemListContainer;

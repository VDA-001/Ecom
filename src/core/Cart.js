import React,{ useState, useEffect} from 'react';
import Base from "./Base";
import Card from "./Card";
import { loadCart } from './helper/cartHelper';
import PaymentB from './PaymentB';



const Cart = () =>{
    const [reload, setReload] = useState(false)
    const [products, setProducts]=useState([]);

    useEffect(()=>{
        setProducts(loadCart());
    }, [reload]);
    const loadAllProducts= () =>{
        return(
            <div>
                {products.map((products, index)=>(
                    <div>
                    <Card 
                        key={index} 
                        product={products} 
                        removeFromCart={true} 
                        addtoCart={false} 
                        reload={reload}
                        setReload={setReload}
                    />
                    <hr />
                    </div>
                ))}
            </div>
        );
    };

    const loadCheckout = () =>{
        return(
            <div>
                <h1>Checkout</h1>
            </div>
        );
    };
    return(
        <Base title="Cart page" description="Welcome to checkout">
            <div className="row text-center">
                <div className="col-3 CartElements">
                    {products.length>0 ? (loadAllProducts(products)) : (
                        <h4>No products</h4>
                    )}
                </div>
                <div className=" col-5 PaymentGateway">
                    {products.length>0 ? (
                        <PaymentB products={products} setReload={setReload} />
                    ) : (
                        <h3>Please login or add something in cart </h3>
                    )}
                </div>
            </div>
        </Base>
    );
};

export default Cart;
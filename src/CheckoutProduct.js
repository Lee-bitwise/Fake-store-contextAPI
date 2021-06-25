import React from "react";
import "./style/CheckoutProduct.css";
import { useStateValue } from "./Provider";

function CheckoutProducts({ id, image, title, price }) {
  const [dispatch] = useStateValue();
  const removeFromBasket = (id) => {
    // console.log(id);
    dispatch({
      type: "REMOVE_FROM_BASKET",
      payload: id,
    });
  };


//   // for adding item to cart
// const AddToCart =(id)=>dispatch=>{

//  dispatch({
//      type:ADD_ITEMS,
//      payload:id
//  });
// };

// //    for deleting the items from the cart

//  const deleteItem =(id)=>dispatch=>{

//     dispatch({
//         type:DELETE_ITEM,
//         payload:id
    
//     })
//     }


//    //    for increasing item inside cart

//  const increaseItem =(id)=>dispatch=>{

//     console.log(`increase :${id}`);
//     dispatch({
//         type:INCREASE_ITEM,
//         payload:id
    
//     })
   
//    }


//       //    for increasing item inside cart

// export const decreaseItem =(id)=>dispatch=>{

//     console.log(`DECREASE :${id}`);
//     dispatch({
//         type:DECREASE_ITEM,
//         payload:id
    
//     })
   
//    }

//          //  for getting the total price of items inside the cart

// export const getTotals =()=>dispatch=>{

//     dispatch({
//         type:TOTAL_ITEMS,
      
//     })
   
//    }




  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt=""/>
        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{title}</p>
          <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <button onClick={() => removeFromBasket(id)}>Delet</button>
      </div>
    </div>
  );
}

export default CheckoutProducts;

export const initialState = {
  basket: [],
  detail: [],
  quantity: 1,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
   
    case "ADD_TO_DETAIL":
      return {
        ...state,
        basket: [...state.basket], detail: [action.payload],
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex((basketItem) => basketItem.id === action.payload);
      let newBasket = [...state.basket];
   
      if (index >= 0) {newBasket.splice(index, 1);} else {console.warn(`Cant remove product (id: ${action.id}) as its not in basket!`);}
      return {
        ...state, basket: newBasket, };

    case "EMPTY_BASKET":
      return {...state, basket: [],};

      default:
        return state;
      }
      };
      export default reducer;
 

// // increasing ites inside basket
// case "INCREASE_ITEM":
      
//   let incResults = state.cart.map(item=>{
//       if(item._id===action.payload){
//           item={...item, count:item.count +1}
//       }
//       return item
//   })

//  return{
//      ...state,
//      cart:incResults

//  }

//  // decrease item inside the basket
//  case "DECREASE_ITEM":
     
//  let decResults = state.cart.map(item=>{
//      if(item._id===action.payload){
//          item={...item, count:item.count===1 ?item.count=1:item.count - 1}
//      }
//      return item;
//  })

//  return{
//     ...state,
//     cart:decResults

//      }

//  //get total price 
// case "TOTAL_ITEMS":

//   const totals = state.cart.reduce((prev, item)=>{
//     return prev + (item.price * item.count)
//   },0)

//  return{
//      ...state,
//      total:totals
//  }


// case "DETAILS":
 
//  return{
//      ...state
//  }


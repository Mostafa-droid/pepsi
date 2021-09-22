import { createStore } from 'vuex'

export default createStore({
  state: {
      productArr : [],
      count : 0,
      done  : false
  },
  mutations: {
     Api_product(state){
      fetch("https://gist.githubusercontent.com/Mostafa-droid/affb25722d9c6703f6776a06596330b6/raw/ccf78fe3b9d438c04b6b43a94df3c45db39c485c/dataJson")
      .then((res) => res.json())
      .then((data) => (state.productArr = data))
      .catch((err) => console.log(err.message));
     },
     increaseCount(state){
      return (state.count < state.productArr.product.length-1)  ?  state.count++ :  (state.count = 0) ;
     },
     decreaseCount(state){
      (state.count == 0)  ?  (state.count = state.productArr.product.length-1) :  state.count-- ;
    }
    

  },
  actions: {
  },
  modules: {
  },
})



import { createStore } from 'vuex'

export default createStore({
  state: {
      productArr : [],
      count : 0,
      done  : false
  },
  mutations: {
     Api_product(state){
      fetch("http://localhost:3000/product")
      .then((res) => res.json())
      .then((data) => (state.productArr = data))
      .catch((err) => console.log(err.message));
     },
     increaseCount(state){
      return (state.count < state.productArr.length-1)  ?  state.count++ :  (state.count = 0) ;
     },
     decreaseCount(state){
      (state.count == 0)  ?  (state.count = state.productArr.length-1) :  state.count-- ;
    }
    

  },
  actions: {
  },
  modules: {
  },
})



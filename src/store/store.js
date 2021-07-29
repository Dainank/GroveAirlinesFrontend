import { createStore } from "vuex" 

const store = createStore({
   state:{
      flights: [],
      airports: [],
      arrivingAirports: []
   }
})

export default store

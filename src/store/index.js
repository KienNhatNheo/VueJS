import { loadRouteLocation } from 'vue-router';
import { createStore } from 'vuex'
import router from '@/router';
export default createStore({
  state: {
    email:"",
    curAccount: {
      username: '',
      password: ''
    }
  },
  getters: {
  },
  mutations: {
    login(state,email){
      state.email = email;
      localStorage.setItem('email',email);
      console.log(state.email);
      router.push('demo1');
    },
    logout(state){
      state.email = "";
      localStorage.removeItem('email');
      router.push('/');
    },
    demo(state){
      if(loadRouteLocation.getItem('email')){
        state.email = localStorage.getItem('email');
      }
    }
  },
  actions: {
  },
  modules: {
  }
})

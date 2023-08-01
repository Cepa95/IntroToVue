import { createStore } from 'vuex';

const counterModule = {
    namespaced: true,
    state() {
      return {
        counter: 0,
  
      }
    },
    mutations: {
      increment(state) {
        state.counter++;
      },
      increase(state, payload) {
        console.log(state)
        state.counter = state.counter + payload.value;
      },
    },
    actions: {
      increment(context) {
        setTimeout(function () {
          context.commit('increment');
        }, 2222);
      },
      increase(context, payload) {
        console.log(context);
        context.commit('increase', payload);
      },
    },
    getters: {
      finalCounter(state) {
        return state.counter * 3;
      },
      normalizedCounter(_, getters) {
        const finalCounter = getters.finalCounter;
        if (finalCounter < 0) {
          return 0;
        } else if (finalCounter > 100) {
          return 100;
        }
        return finalCounter;
      },
    },
  }
  
  const store = createStore({
    modules: {
      numbers: counterModule,
    },
    state() {
      return {
       
        isLoggedIn: false,
      };
    },
    mutations: {
     
      setAuth(state, payload) {
        state.isLoggedIn = payload.isAuth;
      },
    },
    actions: {
     
      login(context) {
        context.commit('setAuth', { isAuth: true });
      },
      logout(context) {
        context.commit('setAuth', { isAuth: false });
      },
    },
    getters: {
  
      userIsAuthenticated(state) {
        return state.isLoggedIn;
      },
    },
  });

  export default store;
  
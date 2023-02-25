import { createStore } from 'vuex'


const store = createStore({
    state: {
        cart: [],
    },
    mutations: {
        SET_CART: (state, product) => {
            state.cart.push(product)
        }
    },


    actions: {
        ADD_TO_CART({ commit }, product) {
            commit('SET_CART', product)
        }
    },
    getters: {
        CART(state) {
            return state.cart;
        }
    },
})

export default store;
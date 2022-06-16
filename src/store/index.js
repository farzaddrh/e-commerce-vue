import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      activeSlide: null,
      productNumber: 0,
      cartIsVisible: false,
      cartProductNumber: 0,
    };
  },
  getters: {
    activeSlide(state) {
      return state.activeSlide;
    },
    productNumber(state) {
      return state.productNumber;
    },
    cartIsVisible(state) {
      return state.cartIsVisible;
    },
    cartProductNumber(state){
        return state.cartProductNumber
    }
  },
  mutations: {
    SHOWACTIVESLIDE(state, payload) {
      state.activeSlide = payload;
    },
    CHANGEPRODUCTNUMBER(state, payload) {
      payload === "add" && state.productNumber++;
      if (state.productNumber >= 1 && payload === "subtract")
        state.productNumber--;
    },
    TOGGLECART(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    ADDPRODUCTTOCART(state) {
      state.cartProductNumber+=state.productNumber
    },
  },
  actions: {
    showActiveSlide(context, payload) {
      context.commit("SHOWACTIVESLIDE", payload);
    },
    addProduct(context) {
      context.commit("CHANGEPRODUCTNUMBER", "add");
    },
    subtractProduct(context) {
      context.commit("CHANGEPRODUCTNUMBER", "subtract");
    },
    toggleCart(context) {
      context.commit("TOGGLECART");
    },
    addProductToCart(context) {
      context.commit("ADDPRODUCTTOCART");
    },
  },
});

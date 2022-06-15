import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      activeSlide: null,
      productNumber: 0,
      cardIsVisible: false,
      cardHasProduct: false,
    };
  },
  getters: {
    activeSlide(state) {
      return state.activeSlide;
    },
    productNumber(state) {
      return state.productNumber;
    },
    cardIsVisible(state) {
      return state.cardIsVisible;
    },
    cardHasProduct(state) {
      return state.cardHasProduct;
    },
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
    TOGGLECARD(state) {
      state.cardIsVisible = !state.cardIsVisible;
    },
    ADDPRODUCTTOCARD(state) {
      if (state.productNumber > 0) state.cardHasProduct = true;
      else state.cardHasProduct=false
      console.log(state.cardHasProduct);
    },
  },
  actions: {
    showActiveSlide(context, payload) {
      context.commit("SHOWACTIVESLIDE", payload);
    },
    addToCart(context) {
      context.commit("CHANGEPRODUCTNUMBER", "add");
    },
    subtractFromCart(context) {
      context.commit("CHANGEPRODUCTNUMBER", "subtract");
    },
    toggleCard(context) {
      context.commit("TOGGLECARD");
    },
    addProductToCard(context) {
      context.commit("ADDPRODUCTTOCARD");
    },
  },
});

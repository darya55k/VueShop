<template>
  <div class="product-list">
    <cart-card
      class="product-card"
      v-for="(cart, index) in carts"
      :key="cart.id"
      :cart="cart"
      @addToCart="addToCart"
      @deleteFromCart="deleteFromCart(index)"
      @increment="increment(index)"
      @decrement="decrement(index)"
    />
    <div class="cart__total">
      <p>Total</p>
      <p>{{ cartTotalCost }}</p>
    </div>
  </div>
</template>

<script>
import CartCard from "./CartCard";
import { mapActions } from "vuex";

export default {
  props: {
    carts: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    cartTotalCost() {
      return this.carts.reduce((acc, item) => {
        return acc + item.quantity * item.price;
      }, 0);
    },
  },

  components: { CartCard },
  methods: {
    ...mapActions([
      "DELETE_FROM_CART",
      "INCREMENT_CART_ITEM",
      "DECREMENT_CART_ITEM",
    ]),
    increment(index) {
      this.INCREMENT_CART_ITEM(index);
    },
    decrement(index) {
      this.DECREMENT_CART_ITEM(index);
    },
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    },
  },
};
</script>
<style>
.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, 280px);
  justify-content: center;
  gap: 50px;
  margin: 0 auto;
}
</style>
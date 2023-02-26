<template>
  <div class="cart-layout">
    <h2 class="product__title">Корзина</h2>
    <cart-list v-if="CART.length" :carts="CART" />
  </div>
</template>

<script>
import CartList from "../components/CartList";
import { mapGetters } from "vuex";

export default {
  components: { CartList },

  computed: {
    ...mapGetters(["CART"]),
  },
};
</script>
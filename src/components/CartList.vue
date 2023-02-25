<template>
  <div class="product-list">
    <cart-card
      class="product-card"
      v-for="cart in carts"
      :key="cart.id"
      :cart="cart"
      @addToCart="addToCart"
    />
  </div>
</template>

<script>
import CartCard from "./CartCard";

export default {
  props: {
    carts: {
      type: Array,
      default: () => [],
    },
  },

  components: { CartCard },
};
</script>
<style>
.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, 380px);
  justify-content: center;
  gap: 16px;
  margin: 0 auto;
}
</style>
<template>
  <div class="product-list">
    <product-card
      class="product-card"
      v-for="product in products"
      :key="product.id"
      :product="product"
      @addToCart="addToCart"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import ProductCard from "./ProductCard";

export default {
  props: {
    products: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    ...mapActions(["ADD_TO_CART"]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
  },
  components: { ProductCard },
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
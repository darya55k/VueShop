<template>
  <div class="product-page container">
    <h2 class="product__title">Новинки</h2>
    <product-list :products="products" />
  </div>
</template>

<script>
import ProductList from "../components/ProductList";
import products from "../mocks/carts";

export default {
  components: { ProductList },
  data() {
    return {
      products,
    };
  },
};
</script>
<style>
.product__title {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 130%;
}
</style>
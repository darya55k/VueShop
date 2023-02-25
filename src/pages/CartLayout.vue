<template>
  <div class="cart-layout">
    <cart-list :carts="CART" />
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
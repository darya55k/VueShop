<template>
  <div class="product-card">
    <img class="cart__img" :src="cart.img" :alt="cart.title" />
    <router-link
      :to="{ name: 'productPage', params: { id: cart.id } }"
      class="more-info"
    >
      <p class="title">{{ cart.title }}</p>
    </router-link>

    <p class="description">{{ cart.description1 }}</p>
    <p class="price">{{ cart.price }}</p>
    <p class="quantity">Количество: {{ cart.quantity }}</p>
    <button class="button" @click="deleteFromCart">Убрать из корзины</button>
  </div>
</template>
<script>
export default {
  props: {
    cart: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  /* mounted() {
    const cartItemData = this.cart;
    cartItemData.quantity = 1;
    },
 */

  methods: {
    deleteFromCart() {
      this.$emit("deleteFromCart");
    },
  },
};
</script>

<style lang="scss" scoped>
.product-card {
  width: 300px;
}
.cart__img {
  width: 280px;
  height: 280px;
  object-fit: contain;
}
.title {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #1a1a1a;
}
.description {
  padding-top: 10px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  /* identical to box height, or 112% */

  color: #5c5c66;
}
.price {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  color: #1a1a1a;
  padding-top: 15px;
}
</style>
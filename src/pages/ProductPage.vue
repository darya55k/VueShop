<template>
  <div class="product-page">
    <div class="container" v-if="product">
      <div class="main-container">
        <img :src="product.img" :alt="product.title" />
        <div class="main-info">
          <p class="section__description">{{ product.description1 }}</p>
          <h1 class="title__product">{{ product.title }}</h1>
          <p class="article">Артикул: {{ product.article }}</p>
          <p class="section__price">{{ product.price }}</p>
          <button class="button" @click="addToCart">Добавить в корзину</button>
        </div>
      </div>
      <div class="items__info">
        <ul class="items__card">
          <li class="items__card_one">
            <img class="items__img" src="../assets/pic1.png" />
            <p class="items__text">Бесплатная доставка от 1000 руб</p>
          </li>
          <li class="items__card_one">
            <img class="items__img" src="../assets/pic2.png" />
            <p class="items__text">Доставка по всей территории РФ</p>
          </li>
          <li class="items__card_one">
            <img class="items__img" src="../assets/pic3.png" />
            <p class="items__text">Гарантия качества продукции</p>
          </li>
        </ul>
      </div>
      <div class="full__info">
        <p class="full__info_title"></p>
        <h1 class="title">{{ product.title }}</h1>
        <p class="article">Артикул: {{ product.article }}</p>
        <p class="section__description">{{ product.description2 }}</p>
      </div>
      <div class="points">
        <p class="title">Подробные характеристики</p>
        <table>
          <tr>
            <td class="table__title">Вид ухода</td>
            <td class="table__text">{{ product.type_uhoda }}</td>
          </tr>
          <tr>
            <td class="table__title">Эффект</td>
            <td class="table__text">{{ product.effect }}</td>
          </tr>
          <tr>
            <td class="table__title">Вес</td>
            <td class="table__text">{{ product.weight }}</td>
          </tr>
          <tr>
            <td class="table__title">Объем</td>
            <td class="table__text">{{ product.value }}</td>
          </tr>
          <tr>
            <td class="table__title">Страна-производитель</td>
            <td class="table__text">{{ product.country }}</td>
          </tr>
          <tr>
            <td class="table__title">Тип волос</td>
            <td class="table__text">{{ product.hair }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import products from "../mocks/carts";
import { mapActions } from "vuex";

export default {
  props: {
    products: {
      type: Array,
      default: () => [],
    },
  },

  created() {
    const product = products.find(
      (product) => product.id == this.$route.params.id
    );
    if (product) {
      this.product = product;
    }
  },
  methods: {
    ...mapActions(["ADD_TO_CART"]),
    addToCart(product) {
      this.ADD_TO_CART(product);
      console.log(product);
    },
  },
};
</script>
<style>
.section__price {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 150%;
  padding-top: 20px;
}
.button {
  background-color: black;
  color: white;
  padding: 15px 40px;
  margin-top: 30px;
}
.title__product {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 900;
  font-size: 48px;
  line-height: 130%;
  margin: 0;
  padding-top: 20px;
  /* or 62px */

  letter-spacing: 0.0375em;
  text-transform: uppercase;
}
table {
  padding-top: 20px;
}
.article {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 200%;
  /* identical to box height, or 28px */

  color: #afafaf;
}
.points {
  padding-top: 50px;
  padding-bottom: 20px;
}
.table__title {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  /* identical to box height, or 21px */

  color: #afafaf;
  min-width: 200px;
}
.table__text {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  max-width: 700px;
}
.product-page {
  padding: 40px 100px;
}
.main-container {
  display: flex;
}
.items__card {
  display: flex;
  margin: 0;
  padding: 0;
  margin-top: 30px;
  margin-bottom: 50px;
}
.items__card_one {
  display: flex;
  align-items: center;
  max-width: 250px;
  padding-right: 20px;
}
.items__text {
  padding-left: 20px;
}
.section__description {
  max-width: 900px;
  padding-top: 20px;
}
</style>

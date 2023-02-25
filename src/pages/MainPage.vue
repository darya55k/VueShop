<template>
  <div class="container">
    <main-header />

    <div class="main-page">
      <div class="main__img">
        <div class="main__info">
          <h2 class="main__title">SKINDOM</h2>
          <p class="main__text">Специальные цены только до 30 апреля</p>
          <button class="main__button">Перейти в каталог</button>
        </div>
      </div>
    </div>
    <main-about />
    <all-products-page />
    <main-footer />
  </div>
</template>

<script>
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import MainAbout from "../components/MainAbout";
import AllProductsPage from "../components/AllProductsPage.vue";

export default {
  components: { MainHeader, MainAbout, AllProductsPage, MainFooter },
};
</script>

<style lang="scss" scoped>
.main__title {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 99px;
  line-height: 150%;
}
.main__info {
  padding: 30px 150px;
  padding-bottom: 200px;
}
.main__text {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 150%;
}
.main__button {
  background-color: black;
  color: white;
  padding: 15px 40px;
  margin-top: 40px;
}
.main-page {
  h1 {
    color: #ffffff;
    font-size: 70px;
    margin-bottom: 20px;
  }
  .main__img {
    background-image: url(../assets/photo.png);
    width: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-size: 100% auto;
  }
}
</style>
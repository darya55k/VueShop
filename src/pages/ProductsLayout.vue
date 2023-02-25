<template>
  <div class="products-layout">
    <main-header />
    <router-view></router-view>
    <main-footer />
  </div>
</template>

<script>
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";

export default {
  components: { MainHeader, MainFooter },
};
</script>
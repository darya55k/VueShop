<template>
  <header>
    <div class="header__info">
      <p class="header__city">Санкт-Петербург</p>
      <p class="hedare__phone">8 495 259 25 00</p>
    </div>
    <div class="header__menu">
      <div class="header__menu_first">
        <router-link :to="{ name: 'main' }"
          ><img class="header__logo" src="../assets/logo.png" />
        </router-link>

        <div class="header__types">
          <router-link :to="{ name: 'AllCatalogPage' }"
            ><p class="header__type header__catalog">Каталог</p>
          </router-link>

          <p class="header__type header__club">Клуб косметологов</p>
          <p class="header__type header__sertificate">Сертификаты</p>
          <p class="header__type header__delivery">Доставка и оплата</p>
          <p class="header__type header__contact">Контакты</p>
          <p class="header__type header__blog">Блог</p>
        </div>
      </div>
      <div class="header__icons">
        <img
          class="header__icon header__icons_search"
          src="../assets/icon_search.png"
        />
        <img
          class="header__icon header__icons_like"
          src="../assets/icon_like.png"
        />
        <router-link :to="{ name: 'productCart' }" class="more-info">
          <img
            class="header__icon header__icons_buy"
            src="../assets/icon_buy.png"
          />
        </router-link>

        <img
          class="header__icon header__icons_person"
          src="../assets/icon_profile.png"
        />
      </div>
    </div>
  </header>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  padding: 0;
  margin: 0;
}

.header__info {
  display: flex;
  justify-content: space-between;
  padding: 14px 120px;
  background-color: black;
  color: white;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
}
.header__menu {
  display: flex;
  justify-content: space-between;
  padding: 14px 120px;
}
.header__menu_first {
  display: flex;
  justify-content: space-between;
}
.header__types {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header__logo {
  padding-right: 25px;
}
.header__type {
  padding-right: 25px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
}
/* .header__type:last-child {
  padding-right: 0;
} */
.header__icon {
  margin-left: 20px;
}
/* .header__icon:first-child {
  margin-left: 0;
} */
p {
  margin: 0;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

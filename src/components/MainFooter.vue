<template>
  <footer>
    <div class="container">
      <div class="container__info">
        <div class="contacts">
          <img class="contacts__logo" src="../assets/logo.png" />
          <p class="contacts__phone">8 495 259 25 00</p>
          <p class="contacts__email">Sale@kkshop.ru</p>
          <p class="contacts__address">Москва, ул. Шаболовка, д. 34, стр. 7</p>
        </div>
        <div class="catalog">
          <p class="title catalog__title">Каталог</p>
          <p class="catalog__item">Очищение</p>
          <p class="catalog__item">Пилинги и скрабы</p>
          <p class="catalog__item">Тоники</p>
          <p class="catalog__item">Кремы</p>
          <p class="catalog__item">Концентраты</p>
          <p class="catalog__item">Концентраты с ферментами</p>
          <p class="catalog__item">Сыворотки</p>
          <p class="catalog__item">Эссенции</p>
          <p class="catalog__item">Эмульсии и гели</p>
          <p class="catalog__item">Маски для лица</p>
          <p class="catalog__item">Жемчужная линия</p>
          <p class="catalog__item">Уход за телом</p>
          <p class="catalog__item">Уход за волосами</p>
          <p class="catalog__item">Наборы и аксессуары</p>
        </div>
        <div class="information">
          <div class="info">
            <p class="title info__title">Инфомация</p>
            <p class="info__item">Клуб косметологов</p>
            <p class="info__item">Сертификаты</p>
            <p class="info__item">Доставка и Оплата</p>
            <p class="info__item">Конфиденциальность</p>
            <p class="info__item">Контакты</p>
            <p class="info__item">Блог</p>
            <p class="info__item">Возврат</p>
          </div>
          <div class="social">
            <p class="title social__title">Мы в социальных сетях</p>
            <div class="social__images">
              <img class="social__img" src="../assets/telegram.png" />
              <img class="social__img" src="../assets/ok.png" />
              <img class="social__img" src="../assets/facebook.png" />
              <img class="social__img" src="../assets/watsapp.png" />
              <img class="social__img" src="../assets/viber.png" />
              <img class="social__img" src="../assets/instagram.png" />
              <img class="social__img" src="../assets/vk.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
footer {
  padding: 60px 100px;
  margin-top: 60px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
}
.info {
  padding-right: 100px;
}
.container__info {
  display: flex;
  justify-content: space-between;
}
.information {
  display: flex;
}
.title {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 150%;
}
.catalog__item {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  /* identical to box height, or 24px */

  color: #4e4e4e;
}
.info__item {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  /* identical to box height, or 24px */

  color: #4e4e4e;
}
.social__images {
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
}
</style>
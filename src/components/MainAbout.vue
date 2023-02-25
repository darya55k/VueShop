<template>
  <div class="container">
    <div class="about">
      <img class="about__img" src="../assets/about.png" />
      <div class="about__info">
        <p class="about__title">
          Ведущий эксперт на российском рынке профессиональной косметики из
          Кореи—ККshop™
        </p>
        <p class="about__text">
          Мы делаем мир профессиональной корейской косметики доступным для
          каждого косметолога в России, предоставляя возможность работать с
          лучшими достижениями корейских учёных и специалистов в области
          сохранения здоровья и ухода за кожей
        </p>
        <p class="about__href">Подробнек</p>
      </div>
    </div>
    <div class="items">
      <ul class="items__all">
        <li class="items__one items__contains">
          Безупречный состав<br />
          и эффективность
        </li>
        <li class="items__one items__nature">
          Натуральность<br />
          и экологичность
        </li>
        <li class="items__one items__money">
          Наличный<br />
          и безналичный расчет
        </li>
        <li class="items__one items__delivery">
          Доставка<br />
          по всей России
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.about {
  padding: 40px 100px;
  display: flex;
}
.about__img {
  width: 700px;
  padding-right: 72px;
}
.about__title {
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 130%;
}
.about__text {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  padding-top: 20px;
  padding-bottom: 20px;
}
.items {
  padding: 40px 100px;
}
.items__all {
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: center;
}
.items__one {
  border: 1px solid rgba(0, 0, 0, 0.2);

  list-style: none;
  width: 400px;
  padding-top: 17px;
  padding-left: 30px;
  padding-bottom: 17px;
  font-style: normal;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  /* or 27px */

  color: #464646;
}
</style>
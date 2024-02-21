<script setup>
  import {ref} from 'vue'
  import { RouterLink, RouterView } from 'vue-router'
  import slide from '../components/slide.vue'
  const serviceData = ref([
    {
        id:1,
        img:'./image/store.jpg',
        title:'門市據點',
        englisg:'Store Map',
    },
    {
        id:2,
        img:'./image/breakfast3.jpg',
        title:'美味餐點',
        englisg:'Menu',
    },
    {
        id:3,
        img:'./image/hands.jpg',
        title:'我要加盟',
        englisg:'Join us',
    },
    {
        id:4,
        img:'./image/hire.jpg',
        title:'人才招募',
        englisg:'Hiring',
    },
    {
        id:5,
        img:'./image/member.jpg',
        title:'加入會員',
        englisg:'Join us',
    },
    {
        id:6,
        img:'./image/wash.jpg',
        title:'吃的安心',
        englisg:'Certification',
    },
  ])
  const newsData = ref([
    {
        id:1,
        img:'./image/newYear.jpg',
        title:'【龍年大回饋】',
        date:'2024-01-08',
    },
    {
        id:2,
        img:'./image/food.jpg',
        title:'【超值加點小物】',
        date:'2024-02-10',
    },
    {
        id:3,
        img:'./image/cocoa.jpg',
        title:'【熱可可】 溫暖整個冬天',
        date:'2023-11-01',
    },
  ])
  const toTop =(() =>{
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  })
</script>

<template>
  <header>
    <div>
      <slide/>
    </div>
  </header>
  <main>
    <div class="image">
      <img class="banner" src="../assets/hamburger.png" alt="">
      <img class="logo" src="../assets/orangeLogo.svg" alt="">
    </div>
    <div class="text">
      <h2 data-aos="fade-up">一天的活力 從這開始</h2>
      <h4 data-aos="fade-up">―  Good to Eat  ―</h4>
      <h3>品味每一天的美好開始！我們的新鮮早餐店以新鮮食材為基礎，用心製作每一份料理，為您呈現源自原汁原味的美味。享受新鮮，感受活力，讓我們成為您早晨美好的開始！</h3>
    </div>
    <div class="news">
      <div class="container">
        <div class="title">
          <img src="../assets/loud.svg" alt="">
          <h2>最新消息</h2>
          <h3>―  News  ―</h3>
        </div>
        <div class="cardCntainer">
          <div class="card" v-for="item in newsData" :key="item.id">
            <img :src="item.img" alt="">
            <div class="board">
              <div class="txt">
                <h3>{{ item.title }}</h3>
              </div>
            </div>
            <div class="date">
              <h4>
                {{ item.date }}    
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="service">
      <div class="sContainer">
        <div class="sTitle">
          <img class="sLogo" src="../assets/orangeLogo.svg" alt="">
          <h2>我們的服務</h2>
          <h3>―  Service  ―</h3>
        </div>
        <div class="sCard">
          <div class="item" v-for="item in serviceData" :key="item.id">
            <router-link to="/">
              <img :src="item.img" alt="">
              <div class="board">
                <div class="txt">
                  <h3>{{ item.title }}</h3>
                  <h4>{{ item.englisg }}</h4>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="topBtn">
        <h3 @click="toTop">Top</h3>
      </div>
    </div>
  </main>
  <footer>
    <div class="top">
      <div class="tContainer">
        <div class="video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/4DLRPQzutzo?si=ey8QBQudoluiolF8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div class="text">
          <h2>加盟 MYbreakfast 邁向成功</h2>
          <h3>―  Join us  ―</h3>
          <p>我們的口號是『每天都是新的滋味！』，讓您在美味的早晨開始一天。品味每一口，感受溫馨與美好。在這裡，MYbreakfast不僅是早餐，更是快樂與活力的起點。和我們一起迎接每天的全新開始，讓美味成為您的日常享受！</p>
          <div class="more">
            <h3 >More</h3>
          </div>
        </div>
      </div>
    </div>
  </footer>
  
</template>
<style lang="scss" scoped>
  @import'../assets/style/global.scss';
  @import'../assets/style/HomeView.scss';
  @import'../assets/style/HomeViewRwd.scss';
</style>

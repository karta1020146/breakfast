<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import { ref, onMounted, computed, watch } from 'vue'

  const isFixed = ref(false)

  const scrollHandler = () => {
    const currentScroll = window.scrollY || 
    document.documentElement.scrollTop;
    if (window.scrollY >= 800) {
      isFixed.value = true;
    } else {
      isFixed.value = false;
    }
  }
  onMounted(() => {
    window.addEventListener('scroll', scrollHandler)
  })

  const fixedStyle = computed(()=>{
    return isFixed.value? 'fixedNav': 'absoluteNav'
  })

</script>

<template>
  <div class="rwdHeader">
    <div class="logo">
      <RouterLink to="/">
        <img alt="Vue logo" class="logo" src="@/assets/breadLogoOrange.svg"/>
      </RouterLink>
    </div>
    <input type="checkbox" id="menu_control">
    <div class="hamburger">
      <label for="menu_control" class="menuBtn">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
    <nav>
      <RouterLink to="/">關於我們</RouterLink>
      <RouterLink to="/">最新消息</RouterLink>
      <RouterLink to="/">美味餐點</RouterLink>
      <RouterLink to="/">我要加盟</RouterLink>
      <RouterLink to="/">人才招募</RouterLink>
      <RouterLink to="/">門市據點</RouterLink>
      <RouterLink to="/">聯絡我們</RouterLink>
      <RouterLink to="/">新人專區</RouterLink>
    </nav>
  </div>
  <header >
    <div class="wrapper" :class="fixedStyle" >
      <div class="logo">
        <RouterLink to="/">
          <img alt="Vue logo" class="logo" src="@/assets/breadLogoOrange.svg"/>
        </RouterLink>
      </div>
      <nav>
        <!-- <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink> -->
        <RouterLink to="/">關於我們</RouterLink>
        <RouterLink to="/">最新消息</RouterLink>
        <RouterLink to="/">美味餐點</RouterLink>
        <RouterLink to="/">我要加盟</RouterLink>
        <RouterLink to="/">人才招募</RouterLink>
        <RouterLink to="/">門市據點</RouterLink>
        <RouterLink to="/">聯絡我們</RouterLink>
        <RouterLink to="/">新人專區</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
  <footer>
    <div class="map">
      <div class="mContainer">
        <div class="text">
          <h3>漢堡股份有限公司</h3>
          <p><span>聯絡電話:</span> 0800-000-000</p>
          <p><span>聯絡地址:</span> 110台北市信義區信義路</p>
        </div>
        <div class="frame">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d985.5508601611273!2d121.56436819801692!3d25.033519373232995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abb6e9d93249%3A0xd508f7b3aa02d931!2z5Y-w5YyXMTAx6KeA5pmv5Y-w!5e0!3m2!1szh-TW!2stw!4v1708412182317!5m2!1szh-TW!2stw" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <div class="community">
        <a href=""><img src="./assets/ins.svg" alt=""></a>
        <a href=""><img src="./assets/fb.svg" alt=""></a>
        <a href=""><img src="./assets/apple.svg" alt=""></a>
        <a href=""><img src="./assets/android.svg" alt=""></a>
      </div>
    </div>
    <div class="bottom">
      <div class="logo">
        <img alt="Vue logo" class="logo" src="./assets/breadLogoOrange.svg"/>
      </div>
      <div class="year">Copyright © 2024 karta1020146 All Rights Reserved</div>
    </div>
  </footer>
</template>

<style>
  .fixedNav{
    position: fixed;
    height: 80px;
    background-color: white;
    box-shadow: 2px 0px 10px gray;
    & a{
      color: black;
    }
  }
  .absoluteNav{
    height: var(--nav-h);
    position: absolute;
    background-color: transparent;
    & a{
      color:white;
    }
  }
  .rwdHeader{
    display: none;
  }
  .wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    & .logo{
      width: 8%;
      & img{
        width: 80px;
        height: 80px;
        vertical-align: bottom;
        margin-left: 10%;
      }
    }
    & nav{
      width: 90%;
      text-align: right;
      & a{
        font-family: "Noto Sans TC", sans-serif;
        font-weight:400;
        margin: 0 1%;
        text-decoration: none;
      }
      & a:hover{
        color: orange;
      }  
    }
  }
  footer{
    background-color: black;
    color: white;
    & .community{
    width: 100%;
    text-align: center;
    & img{
      width: 40px;
      margin: 0 .5% 1% ;
    }
  }
  & .map{
      width: 100%;
      display: flex;
      flex-direction: column;
      background-color: #1e1e1e;
      & .mContainer{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        & .frame{
          box-sizing: border-box;
          padding: 1.5%;
        }
        & h3{
          font-size: 2rem;
        }
        & p{
          margin: 2% 0;
          & span{
            color: gray;
          }
        }
      }
      & .community{
        width: 100%;
        text-align: center;
        & img{
          width: 40px;
          margin: 0 .5% 1% ;
        }
      }
    }
    & .bottom{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      & .logo{
        width: 100%;
        text-align: center;
        & img{
          width: 80px;
          margin: 1% 0 0 0;
        }
      }
      .year{
        color: gray;
        margin:1% 0 1.5% 0;
      } 
    }
  }
  @media screen and (max-width:1024px) {
    .wrapper{
      display: none;
    }
    .rwdHeader {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 80px;
      background-color: #353535;
      position: fixed;
      z-index: 10;
      & .logo{
        width: 50%;
        display: flex;
        margin: auto;
        & img{
          width: 50px;
        }
      }
      & input{
        opacity: 0;
        display: flex;
        z-index: -999;
      }
      & .hamburger{
        width: 50%;
        position: relative;
        
        & .menuBtn{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: #353535;
          height: 40px;
          width: 40px;
          position: absolute;
          top: 50%;
          right: 10px;
          transform: translate(0, -50%);
          box-sizing: border-box;
        }
        & span{
          background-color:white;
          width: 80%;
          height: 3px;
          margin: 4px auto;
        }
      }
      #menu_control:checked ~ .hamburger span:nth-child(1){
        position: absolute;
        rotate: 45deg;
        transition: rotate .2s .2s;
      }
      #menu_control:checked ~ .hamburger span:nth-child(2){
        opacity: 0%;
        display: none;
        transition: display .2s;
      }
      #menu_control:checked ~ .hamburger span:nth-child(3){
        position: absolute;
        rotate: -45deg;
        transition: rotate .2s .2s;
      }
      #menu_control:checked ~ nav{
        transition: .3s;
        left: 0;
      }
      nav{
        background-color:#353535;
        width: 100%;
        position: absolute;
        top:80px;
        left: -100%;
        z-index: 10;
        transition: .3s;
        & a{
          display: block;
          text-decoration: none;
          padding: 3% 0 3% 1.5%;
          color: white;
          border-bottom: 1px solid white;
        }
      }
    }
    footer{
      & .map .mContainer{
        flex-direction: column;
        padding: 1.5% 0;
      }
    }
  }
  @media screen and (max-width:768px) {
    
  }
</style>

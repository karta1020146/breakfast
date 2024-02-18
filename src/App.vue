<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <div class="logo">
        <RouterLink to="/">
          <img alt="Vue logo" class="logo" src="@/assets/breadLogo.svg"/>
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
</template>

<style scoped>
.wrapper {
  width: 100%;
  height: var(--nav-h);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  position:absolute;
  top: 0;
  left: 0;
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
      color: white;
    }
    & a:hover{
      color: orange;
    }  
  }
}
</style>

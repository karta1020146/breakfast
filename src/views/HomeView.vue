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
      <div class="top">
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
<style scoped>
  header{
    width: 100%;
    background-color: white;
  }
  main{
    width: 100%;
    .image{
      width: 100%;
      height: 62vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: auto;
      text-align: center;
      & .logo{
        width: 80px;
      }
      & .banner{
        width: 35%;
      }
      &  svg{
        width: 80px;
        height: 80px;
      }
    }
    & .text {
      height: 38vh;
      text-align: center;
      & h2{
        font-size: 2.5rem;
      }
      & h3{
        color: gray;letter-spacing: 1px;
        line-height: 1.5;
        margin:2% auto;
        text-align: center;
        width: 25%;
        font-size: 1rem;
        letter-spacing: 3px;
      }
      & h4{
        width: 100%;
        text-align: center;
        color: gray;
        font-family: "Courgette";
        font-size: 1rem;
        margin: 1.5% 0;
      }
    }
    .news{
      width: 100%;
      height: 100vh;
      color: white;
      text-align: center;
      display: flex;
      flex-direction: column;
      z-index: 0;
      background:url(@/assets/table.jpg) fixed;
      background-size: 100%;
      background-position: 50% 50%;
      background-attachment: fixed;
      .container{
        width: 100%;
        backdrop-filter: blur(5px);
        & .title{
          margin: 3% 0;
          & img{
            width: 80px;
            height: 80px;
            vertical-align: bottom;
          }
          & h2{
            display: block;
            z-index: 3;
            font-size: 2.5rem;
            margin:1.5% 0;
          }
          & h3{
            display: block;
            z-index: 3;
            width: 100%;
            font-size: 1.5rem;
            font-family: "Courgette";
          }
        }
        & .cardCntainer{
          margin: auto;
          width: 60%;
          display: flex;
          justify-content: center;
          align-items: center;
          & .card{
            cursor: pointer;
            border-radius: 10px;
            width: calc((100% - var(--nCardCount) * var(--nCardMargin) * 2) / var(--nCardCount) );
            margin: var(--nCardMargin);
            height: 370px;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            & .board{
              border-radius: 10px;
              width: 100%;
              height: 25%;
              text-align: center;
              background-color: rgba(0, 0, 0, 0.61);
              position: absolute;
              transition: .6s;
              & .txt{
                color: white;
                width: 100%;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                & h3{
                  width: 100%;
                  margin: 4% 0;
                  font-size: 1.5rem;
                }
              }
            }
            & img{
              border-radius: 10px;
              width: 100%;
              height: 100%;
              vertical-align: bottom;
              object-fit: cover;
            }
            & .date{
              width: 100px;
              height: 30px;
              display: flex;
              justify-content: center;
              align-items: center;
              background-color: orange;
              border-radius: 5px;
              position: absolute;
              bottom: -5%;
              left: 50%;
              transform: translate(-50%);
            }
          }
          & .card:hover .board{
            height: 100%;
            & .txt{
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50% , -50%);
              & h3{
                color: orange;
              }
            }
          }
        }
      }
    }
    & .service{
    width: 100%;
    height: 130vh;
    .sContainer{
        width: 100%;
        text-align: center;
        & .sTitle{
          margin: 3% 0;
          & .sLogo{
            width: 80px;
            height: 80px;
            vertical-align: bottom;
          }
          & h2{
            display: block;
            z-index: 3;
            font-size: 2.5rem;
            margin:1.5% 0;
          }
          & h3{
            display: block;
            color: gray;
            z-index: 3;
            width: 100%;
            font-size: 1.5rem;
            font-family: "Courgette";
          }
        }
        & .sCard{
          width: 60%;
          display: flex;
          flex-wrap: wrap;
          margin: auto;
          & .item{
            display: flex;
            justify-content: flex-end;
            border-radius: 10px;
            width: calc( ( 100% - var(--sCardCount) * var(--sCardMargin) * 2 ) / var(--sCardCount) );
            margin: var(--sCardMargin);
            height: 360px;
            position: relative;
            & img{
              border-radius: 10px;
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
            & .board{
              border-radius: 10px;
              width: 100%;
              height: 25%;
              text-align: center;
              display: block;
              background-color: rgba(0, 0, 0, 0.61);
              position: absolute;
              bottom: 0;
              transition: .6s;
              & .txt{
                color: white;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50% , -50%);
                & h3{
                  margin: 4% 0;
                  font-size: 1.5rem;
                }
                & h4{
                  margin: 4% 0;
                  font-size: 1rem;
                }
              }
            }
          }
          & .item:hover .board{
            height: 100%;
            & h3{
              color: orange;
            }
          }
        }
      }
      & .top{
        width: 100%;
        display: flex;
        & h3{
          border: 1px solid orange;
          border-radius: 8px;
          width: 80px;
          height: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: .5% auto;
          cursor: pointer;
          transition: .3s;
        }
        & h3:hover{
          background-color: orange;
          color: white;
        }
      }
    }
  }
  footer{
    background-color: black;
    color: white;
    width: 100%;
    & .top{
      background-image: url(/image/footer.jpg);
      background-attachment: fixed;
      width: 100%;
      height: 50vh;
      display: flex;
      justify-content: center;
      align-items: center;
      & .tContainer{
        width: 60%;
        display: flex;
        justify-content: center;
        & .video{
          width: 45%;
          display: flex;
          padding: 2%;
        }
        & .text{
          width: 55%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          & h2{
            font-size: 2.5rem;
          }
          & h3{
            margin: 1% 0;
          }
          & p{
            font-weight: bolder;
            line-height: 1.8;
            margin: 1% 0;
          }
          & .more{
            width: 100%;
            display: flex;
            & h3{
              border: 1px solid orange;
              border-radius: 8px;
              width: 80px;
              height: 30px;
              padding: 3%;
              display: flex;
              justify-content: center;
              align-items: center;
              margin: .5% auto;
              cursor: pointer;
              transition: .3s;
            }
            & h3:hover{
              background-color: orange;
              color: white;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width:1024px) {
    h1{
      background-color: red;
    }
  }
</style>

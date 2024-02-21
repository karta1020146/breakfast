<script setup>
    import { computed, onMounted, ref, watch } from 'vue'
    const data = ref([
        {
            id:1,
            img:'./image/breakfast1.jpg',
            text:'Nice to Eat',
        },
        {
            id:2,
            img:'./image/breakfast2.jpg',
            text:'Good to Eat',
        },
        {
            id:3,
            img:'./image/breakfast3.jpg',
            text:'Excellent to Eat',
        },
        {
            id:4,
            img:'./image/breakfast4.jpg',
            text:'Perfect to Eat',
        },
        {
            id:5,
            img:'./image/breakfast5.jpg',
            text:'All Day to Eat',
        },
    ])

    const firstId = ref(1)
    const name = ref(true)
    const nameShow = computed(() => {
        return name.value ? 'next' : 'pre'
    })
    const carShow = (id) => {
        firstId.value = id
    }
    const nextHandler = () => {
        name.value = true
        if (firstId.value < 5) {
            firstId.value += 1
        } else {
            firstId.value = 1
        }
    }
    const preHandler = () => {
        name.value = false
        if (firstId.value <= 5 && firstId.value >= 2) {
            firstId.value -= 1
        } else {
            firstId.value = 5
        }
    }
    // const autoSlide = onMounted(() => {
    //     setInterval(nextHandler, 5000)
    // })
</script>

<template>
    <div class="all">
        <div class="data">
            <TransitionGroup :name="nameShow">
                <div v-for="item of data" :key="item.id" v-show="item.id == firstId">
                    <h2>
                        {{ item.text }}
                    </h2>
                    <img :src="item.img">
                </div>
            </TransitionGroup>
        </div>
        <div class="control">
            <span @click="preHandler">&larr;</span>
            <div class="center">
                <span v-for="item of data" :key="item.id" @click="carShow(item.id)"> </span>
            </div>
            <span @click="nextHandler">&rarr;</span>
        </div>
    </div>
</template>

<style scoped>
.all{
    display: flex;
    flex-direction: column;
    z-index: -2;
}
.data {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    margin: auto;

    & div {
        width: 100%;
        text-align: center;
        position: absolute;
        margin: auto;

        & img {
            width: 100%;
            height: 100vh;
            object-fit: cover;
            overflow: hidden;
        }
        h2{
            position: absolute;
            top: 50%;
            left:50%;
            transform: translate(-50%, -50%);
            color: white;
            font-size: 80px;
        }
    }
    & div::before {
        content: '';
        display: flex;
        position:absolute ;
        z-index: 0;
        width: 100%;
        height: 100vh;
        background-color: black;
        opacity: 20%;
        overflow: hidden;
    }


}

.control {
    width: 100%;
    margin: .3rem 0;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 50%;
    & span {
        width: 60px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: black;
        color: white;
        margin: 0 10px;
        cursor: pointer;
        font-size: 40px;
        opacity:.5;
    }
    & span:hover{
        opacity:.8;
        transition:.5s;
    }
    .center {
        width: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
        display: none;
        span {
            margin: 0 4%;
            border-radius: 50%;
            width: 7px;
            height: 7px;
            background-color: #353535;
            cursor: pointer;
            padding: -3% 0;
        }
    }    
}

.next-leave-from {
    left: 0%;
}

.next-leave-active {
    transition: .3s ease;
}

.next-leave-to {
    left: -100%;
}

.next-enter-from {
    left: 100%;
}

.next-enter-active {
    transition: .3s ease;
}

.next-enter-to {
    left: 0%;
}

.pre-leave-from {
    right: 0;
}

.pre-leave-active {
    transition: .3s ease;
}

.pre-leave-to {
    right: -100%;
}

.pre-enter-from {
    right: 100%;
}

.pre-enter-active {
    transition: .3s ease;
}

.pre-enter-to {
    right: 0%;
}</style>
<template>
      <div>
        <NavBar />
        <router-view></router-view>
      </div>
</template>

<script>
import Home from '@/views/Home.vue';
import NavBar from '@/components/NavBar.vue';
export default {
  name : "App",
  components :{
    Home,
    NavBar
  }
}
</script>
<style lang="scss">
// color : #265cc5
// background-color: #265cc5;
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
:root{
  --main-bg-color : #265cc5;
  --main-color  : #0065c3;
  --main-color-white  :#fff;
}
body{
 font-family: 'Poppins', sans-serif !important;
}
  .overlay{
    position: fixed;
    left: 0;
    top: 0;
    width:100%;
    height: 100%;
    background-color: #084298;
    z-index: 10000;
  }
</style>

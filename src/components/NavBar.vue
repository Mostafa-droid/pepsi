<template>
  <!-- for responsive nav -->
  <ul class="responsiveUl d-lg-none d-flex">
    <!-- drop menu -->
    <li class="view-product">
      <router-link to="/product" class="link" @click="openCloseNav()"
        >View Products <i class="bi bi-caret-down-fill"></i
      ></router-link>
    </li>
    <i class="bi bi-list icon-menu d-lg-none d-block" @click="openNavUl()"></i>
  </ul>
  
  <nav :class="{ 'd-flex': done }">
    <router-link to="/" class="logo-pepsi">
      <img src="../assets/Logo/logo-pepsi.png" alt="logo-pepsi" />
    </router-link>
    <ul class="navUL d-lg-flex" :class="{ 'd-flex': done }">
      <!-- drop menu -->
      <li>
        <router-link to="/product" class="link view-product" @click="openCloseNav()" 
          >View Products <i class="bi bi-caret-down-fill"></i
        ></router-link>
      </li>
      <!-- What`s New-->
      <li>
        <router-link to="" class="link">What`s New</router-link>
      </li>
      <!-- NewSletter -->
      <li>
        <router-link to="" class="link">NewSletter</router-link>
      </li>
      <!-- Contact Us -->
      <li>
        <router-link to="" class="link">Contact Us</router-link>
      </li>
    </ul>
    <div class="buy-pepsi d-lg-block" :class="{ 'd-block': done }">
      <router-link to="" class="link">Buy Peppsi Products</router-link>
    </div>
  </nav>
</template>
<script>
export default {
  name: "NavBar",
  data() {
    return {
      
    };
  },
  computed : {
    done(){
      return this.$store.state.done;
    }
  },
  methods: {
    openNavUl() {
     this.$store.state.done = !this.$store.state.done ;
    },
    openCloseNav(){
      if(this.$store.state.done == true){
         this.$store.state.done = false ;
      }
    }
  },
};
</script>

<style lang="scss" scoped>
//  main-color  :#265cc5;

// ===================
// == [*] global
// ===================

ul {
  padding: 0px;
  margin: 0px;
  list-style: none;
}
a {
  text-decoration: none;
}

// ===================
// == Auto Mixins
// ===================
@mixin prefixer($prop, $val, $prefixes: ()) {
  @each $pref in $prefixes {
    #{'-'+ $pref+'-'+$prop}: $val;
  }
  #{$prop}: $val;
}

//   [1] logo-pepsi
.logo-pepsi {
  padding: 0px 50px;
  img {
    @include prefixer(transition, all 0.6s ease-in-out, webkit moz o ms);
    &:hover {
      @include prefixer(transform, rotate(360deg), webkit moz o ms);
    }
  }
  @media (max-width: 991px) {
    position: absolute;
    top: -68px;  
    left: 0;
    padding: 0px 17px;
  }
}
.changeBgColor {
  background-color: #fff;
}
.changeColor {
  color: #fff;
}
// [responsiveUl]
.responsiveUl {
  background-color: var(--main-bg-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  .view-product {
    .link {
      color: var(--main-color-white);
      @include prefixer(transition, all 0.1s ease-in-out, webkit moz o ms);
      letter-spacing: 1.2px;
    }
    margin: auto;
  }
  .icon-menu {
    color: #fff;
    font-size: 39px;
    width: 50px;
    cursor: pointer;
  }
}
// [nav-bar]
nav {
  background-color: var(--main-bg-color);
  display: flex;
  position: fixed;
  align-items: center;
  padding: 12px 0px;
  width: 100%;
  z-index: 5;
  @media (max-width: 991px) {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 0px;
  }
  //   [2] navUl
  .navUL {
    display: none;
    padding-left: 22px;
    @media (max-width: 991px) {
    flex-direction: column;
    padding: 0px;;
    }
    li {
      margin: 0px 10px;
      @media (max-width: 991px) {
      padding: 20px;
      }
      .link {
        color: var(--main-color-white);
        @include prefixer(transition, all 0.1s ease-in-out, webkit moz o ms);
        letter-spacing: 1.2px;
        i {
          position: relative;
          top: 10%;
          left: 2px;
        }
        &:hover {
          color: #000;
          font-weight: bold;
        }
      }
    }
  }
  //   [3] buy-pepsi
  .buy-pepsi {
    color: var(--main-color-white);
    position: absolute;
    right: 5%;
    border: 2px solid;
    width: 200px;
    text-align: center;
    padding: 3px 0px;
    display: none;
    @include prefixer(border-radius, 30px, webkit moz o ms);
    @include prefixer(transition, all 0.5s ease-in-out, webkit moz o ms);
    @media (max-width: 991px) {
    position: relative;
    right: 12px;
    margin-bottom: 15px;

    }
    .link {
      color: var(--main-color-white);
      font-size: 16px;
    }
    &:hover {
      background-color: var(--main-color-white);
      .link {
        color: var(--main-color);
        font-weight: bold;
      }
    }
  }
  .icon-menu {
    color: #fff;
    font-size: 39px;
    width: 50px;
  }
}
</style>
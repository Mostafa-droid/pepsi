<template>
  <footer>
    <div class="row footer-row">
      <!-- col 1 -->
      <section class="col-lg-3 col-md-12 col-sm-12">
        <router-link to="/" class="logo-pepsi">
          <img src="../assets/Logo/logo-large.png" alt="logo-pepsi" />
        </router-link>
      </section>
      <!-- col 2 -->
      <section class="col-lg-2 col-md-4 col-4">
        <ul>
          <li>
            <router-link to="" class="link">CONTACT US</router-link>
          </li>
          <li>
            <router-link to="" class="link">TERMS & CONDITIONS</router-link>
          </li>
          <li>
            <router-link to="" class="link">PRIVACY POLICY</router-link>
          </li>
        </ul>
      </section>
      <!-- col 3 -->
      <section class="col-lg-2 col-md-4 col-4">
        <ul>
          <li>
            <router-link to="" class="link">COPYRIGHT</router-link>
          </li>
          <li>
            <router-link to="" class="link">PRODUCT FACTS</router-link>
          </li>
          <li>
            <router-link to="" class="link">STORE LOCATOR</router-link>
          </li>
        </ul>
      </section>
      <!-- col 4 -->
      <section class="col-lg-2 col-md-4 col-4">
        <ul>
          <li>
            <router-link to="" class="link">SERVE PEPSI</router-link>
          </li>
          <li>
            <router-link to="" class="link">ABOUT OUR ADS</router-link>
          </li>
          <li>
            <router-link to="" class="link">CAREERS</router-link>
          </li>
        </ul>
      </section>

      <section class="col-lg-3">
        <div class="subscribe-pepsi">
          <router-link to="" class="link">Subscribe To NewSletter</router-link>
        </div>
        <div class="socials">
          <a href="https://twitter.com/pepsi">
            <i class="bi bi-twitter"></i>
          </a>
          <a href="https://www.instagram.com/pepsi/">
            <i class="bi bi-instagram"></i>
          </a>
          <a href="https://www.youtube.com/pepsi/">
            <i class="bi bi-youtube"></i>
          </a>
          <a href="https://www.facebook.com/PepsiUS">
            <i class="bi bi-facebook"></i>
          </a>
        </div>
      </section>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footer",
};
</script>

<style lang="scss" scoped>
// [*]
// ===================
// == Auto Mixins
// ===================
@mixin prefixer($prop, $val, $prefixes: ()) {
  @each $pref in $prefixes {
    #{'-'+ $pref+'-'+$prop}: $val;
  }
  #{$prop}: $val;
}
.row {
  margin: 0px;
}
footer {
  padding-top: 5%;
  padding-bottom: 5%;
  background-color: var(--main-color);
  overflow: hidden;
      @media (min-width:300px) and (max-width:991px) {
      text-align: center;
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
  }
  ul {
    list-style: none;
    margin: 0px;
    padding: 0px;
    li {
      padding: 10px 0px;
      .link {
        color: #fff;
        text-decoration: none;
        font-size: 13px;
        @include prefixer(transition, all 0.1s ease-in-out, webkit moz o ms);
        @media (min-width:300px) and (max-width:991px) {
        font-size: 11px;
        }
        &:hover {
          color: #000;
          font-weight: bold;
        }
      }
    }
  }
  //   [2] subscribe-pepsi
  .subscribe-pepsi {
    color: #fff;
    border: 2px solid;
    width: 228px;
    text-align: center;
    padding: 3px 0px;
    @include prefixer(border-radius, 30px, webkit moz o ms);
    @include prefixer(transition, all 0.5s ease-in-out, webkit moz o ms);
    @media (min-width:300px) and (max-width:991px) {
    margin: 20px auto;
    }
    .link {
      color: #fff;
      font-size: 16px;
      text-decoration: none;
    }
    &:hover {
      background-color: #fff;
      .link {
        color: #265cc5;
        font-weight: bold;
      }
    }
  }
  .socials {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin-top: 30px;
    gap: 50px;
    @media (min-width:300px) and (max-width:991px) {
    justify-content:center;
    }
    a {
      color: #fff;
      font-size: 30px;
      &:hover{
          color: #000;
      }
    }
  }
}
</style>
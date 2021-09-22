<template>
  <div class="pepsi-product">
    <div class="row products">
      <!-- product 1 -->
      <section
        v-for="product in productArr"
        :key="product.id"
        class="col-lg-3 col-md-6 col-sm-6 product"
      >
        <div
          class="product-overlay"
          :style="'background-color :' + product.bgColor + ''"
        >
          <router-link to="/productSlide" class="product-title title-overlay" @click="CheckCount(product.id)">{{ product.title }}</router-link>
        </div>
        <div class="product-title">{{ product.title }}</div>
        <div class="box-product">
          <div class="product-img">
            <img
              :src="require('../assets/products/product1/' + product.srcImg)"
              :alt="product.alt"
              class="w-100 h-100"
            />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Products",
  data() {
    return {
   
    };
  },
  created() {
      return this.$store.commit('Api_product');
  },
  computed:{
    // this is Array that contain db.json [Api]
    productArr(){
      return this.$store.state.productArr.product;
    },
    count(){
      return this.$store.state.count;
    },
 
  },
  methods:{
    CheckCount(p){
        return this.$store.state.count = p-1
    }

    }
   
  }

</script>

<style lang="scss" scoped>
// ===================
// == Auto Mixins
// ===================
@mixin prefixer($prop, $val, $prefixes: ()) {
  @each $pref in $prefixes {
    #{'-'+ $pref+'-'+$prop}: $val;
  }
  #{$prop}: $val;
}
.pepsi-product {
  padding-top: 10%;
  .products {
    padding: 0px;
    margin: 0px;
    .product {
      padding: 0px;
      border: 1px solid #e9ecef;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 230px;
      position: relative;
      overflow: hidden;
      &:hover {
        .product-overlay {
          height: 100%;
        }
      }
      .product-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 18%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        @include prefixer(transition, all 0.3s ease-in-out, wibkit moz o ms);
        .title-overlay {
          color: #fff;
        }
      }
      .product-title {
        text-align: center;
        font-size: 18px;
        color: #212529;
        margin: 10px 0px;
        text-decoration: none;
      }
      .box-product {
        overflow: hidden;
        width: 50%;
        height: 100%;
        .product-img {
          img {
            object-fit: cover;
          }
        }
      }
    }
  }
}


</style>
<template>
  <section
    class="slide-product"
    :style="{ 'background-color': productArr[count].bgColor }"
  >
    <div class="row">
      <section class="col-lg-6 order-lg-1 order-2">
        <div class="box-fact">
          <table>
            <tr>
              <th>{{ productArr[count].title }}</th>
            </tr>
            <tr>
              <td>NUTRITION FACTS</td>
            </tr>
            <tr>
              <td>Serving Size 12 fl oz (355 mL)</td>
            </tr>
            <tr>
              <td>Servings Per Container 1</td>
            </tr>
            <tr>
              <td>Amount Per Serving</td>
            </tr>
            <tr>
              <td>Calories {{ productArr[count].Calories }}</td>
            </tr>
            <tr>
              <td>% Daily Value *</td>
            </tr>
            <tr>
              <td>Total Fat 0g</td>
              <td>0%</td>
            </tr>
            <tr>
              <td>Sodium 30mg</td>
              <td>{{ productArr[count].Sodium }}</td>
            </tr>
            <tr>
              <td>Total Carbohydrate 41g</td>
              <td>{{ productArr[count].Carbohydrate }}</td>
            </tr>
            <tr>
              <td>Sugars {{ productArr[count].Sugars }}</td>
            </tr>
            <tr>
              <td>Protein {{ productArr[count].Protein }}</td>
            </tr>
            <tr>
              <td>Not a significant source of other nutrients.</td>
            </tr>
            <tr>
              <td>*Percent Daily Values are based on a 2,000 calorie diet.</td>
            </tr>
          </table>
        </div>
      </section>
      <section class="col-lg-6 order-lg-2 order-1 fact-img">
        <div class="box-img text-center">
          <img
            :src="
              require('../assets/products/product1/' + productArr[count].srcImg)
            "
            alt="pepsi"
            class="w-100 h-100"
          />
        </div>
      </section>
    </div>
    <button class="arrow-left arrow" @click="decreaseCount()">
      <i class="bi bi-arrow-left"></i>
    </button>
    <button class="arrow-right arrow" @click="increaseCount()">
      <i class="bi bi-arrow-right"></i>
    </button>
  </section>
</template>

<script>
export default {
  name: "productSlide",
  data() {
    return {
      done: true,
      count: 0,
    };
  },
  created() {
    return this.$store.commit("Api_product");
  },
  computed: {
    // this is Array that contain db.json [Api]
    productArr() {
      return this.$store.state.productArr;
    },
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    increaseCount() {
      return this.$store.commit("increaseCount");
      // (state.count < state.productArr.length-1)  ?  state.count++ :  (state.count = 0)
    },
    decreaseCount() {
      return this.$store.commit("decreaseCount");
      // (state.count == 0)  ?  (state.count = state.productArr.length-1) :  state.count-- ;
    },
  },
};
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

$leftTop: 0;
// slide-product
.slide-product {
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 10%;
  @media (min-width: 300px) and (max-width: 767px) {
    padding: 15px;
  }
  .box-fact {
    padding: 10px;
    border: 1px solid #ccc;
    background-color: #fff;
    margin: auto;
    position: relative;
    left: $leftTop;
    @media (min-width: 992px) and (max-width: 1199px) and (min-width: 1200px) {
      width: 80%;
    }
    @media (min-width: 768px) and (max-width: 991px) {
      width: 72%;
    }
    @media (min-width: 300px) and (max-width: 767px) {
      width: 100%;
    }
    @include prefixer(transition, all 0.3s ease-in-out, webkit moz o ms);
    table {
      background-color: var(--main-color-white);
      width: 100%;
      th {
        font-size: 23px;
        padding: 2px 10px;
        @media (min-width: 300px) and (max-width: 767px) {
          font-size: 15px;
        }
      }
      tr {
        border: 1px solid #6c757d;
        &:nth-of-type(2) {
          border-bottom: 4px solid #000;
          td {
            font-size: 18spx;
            font-weight: bold;
          }
        }
        &:nth-of-type(6) {
          border-bottom: 2px solid #000;
        }
        &:nth-of-type(12) {
          border-bottom: 2px solid #000;
        }
        td {
          padding: 5px 8px 5px 10px;
          font-size: 13px;
        }
      }
    }
  }
  .fact-img {
    .box-img {
      width: 50%;
      margin: auto;
      position: relative;
      top: $leftTop;
      @include prefixer(transition, all 0.3s ease-in-out, webkit moz o ms);
    }
  }
  .arrow {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 10px;
    font-size: 20px;
    border: none;
    background-color: transparent;
    @media (min-width: 300px) and (max-width: 767px) {
      top: 20%;
    }
  }
  .arrow-left {
    left: 5%;
  }
  .arrow-right {
    right: 5%;
  }
}
</style>
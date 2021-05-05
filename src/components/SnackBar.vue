<template>
    <div>
        <snackbar baseSize="1rem" ref="snackbar" :holdTime="1000000000" :position="position"/>
        <!-- <button class="gray" @click="getRecommendation()" > prueba </button> -->
        <div class="checkout-box showBox" ref="showBox">
            <ul class="checkout-list">
                <span>Recomendado para ti:</span>
                <li class="checkout-product">
                    <img :src="newProduct.image" alt="" class="product-image">
                    <h3 class="product-name">{{ newProduct.name }}</h3>
                    <span class="product-price">$ {{ newProduct.price }} </span>
                    <button class="product-remove" @click="addProductToCart(newProduct)">Añadir</button>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import Snackbar from "vuejs-snackbar";
import { mapGetters, mapActions } from "vuex";
import axios from "axios";
import AllProducts from "./AllProducts";

export default {
  data() {
    return {
      position: "top-left",
      recomendation: "",
      newProduct: {}
    };
  },
  computed: {
    ...mapGetters(["getProductsInCart", "getAllProducts"]),
  },
  mounted(){
    this.getRecommendation()
  },
  methods: {
    ...mapActions(["addProduct"]),

    prueba: function(event) {
      this.$refs.snackbar.open(event.target.innerText);
      console.log(event.target.innerText);
    },
    addProductToCart(product) {
      this.addProduct(product);
      this.$refs.showBox.style.display = 'none';
      console.log(product);
    },
    getRecommendation() {
      const request = [];
      for (let i = 0; i < this.getProductsInCart.length; i++) {
        request.push(this.getProductsInCart[i].modelData);
        console.log(this.getProductsInCart[i].modelData);
      }      
      var body = {
        "jsonStr": request
      };
      console.log(body);
      axios({
        method: "post",
        url: "http://shopping-model-shopping-cart.rhos-cc-mx-368027-2db74476dfddf70d0d5ba71d5eb9bfda-0001.us-south.containers.appdomain.cloud/ecommerce",
        data: body
      })
        .then(response => {
          console.log(response);
          console.log(response.data);
          console.log(response.data.recomendation);

          this.recomendation = response.data.recomendation;

          if (this.recomendation != "nothing") {
            for (let i = 0; i < this.getAllProducts.length; i++) {
              if (this.recomendation[0] === this.getAllProducts[i].modelData) {
                this.newProduct = this.getAllProducts[i];
              }
            }
            this.$refs.showBox.style.display = 'flex';
          }
          console.log("====================================");
          console.log(this.newProduct);
          console.log("====================================");
        })
        .catch(function (error) {
          console.log(error);
          });
    }
  },
  components: { Snackbar },
};
</script>
<style scoped>
.snack-bar {
  background-color: darkred;
}
.checkout-box {
  width: 100%;
  max-width: 900px;
  display: none;
  flex-direction: column;
  margin: 50px auto;
  box-sizing: border-box;
  padding: 1em;
}

.checkout-list {
  padding: 0;
}

.checkout-product {
  display: grid;
  grid-template-columns: 1fr 3fr 2fr 0.5fr;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(73, 74, 78, 0.1);
  border-radius: 5px;
  list-style: none;
  box-sizing: border-box;
  padding: 0.8em;
  margin: 1em 0;
}

.checkout-product * {
  place-self: center;
}
.product-image {
  grid-column: 1/2;
  width: 50%;
}

.product-name {
  box-sizing: border-box;
}

.product-price {
  font-size: 1.2em;
  font-weight: bold;
}
.product-remove {
  width: 5em;
  height: 2em;
  border-radius: 5px;
  border: 0;
  background-color: #ee202e;
  color: #fff;
  cursor: pointer;
  font-size: 15px;
}
</style>

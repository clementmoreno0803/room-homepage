<template>
<div class="container">
  <Carousel :images="imageUrl" :styles="imageStyle" :carousel="vsCarousel"></Carousel>
  <div class="informations">
    <h3 class="title">{{ name }}</h3>
    <span>REF:{{ ref }}</span>
    <span class="desc">{{ description }}</span>
    <h4 class="price">{{ price }}</h4>
    <div class="counter">
      <button @click="incrementCounter">+</button>
      {{ counter }}
      <button @click="decrementCounter">-</button>
    </div>
    <base-button @click="addToCart">
      Ajouter au panier
    </base-button>
  </div>
</div>
</template>

<script>
import BaseButton from '@/components/Base/BaseButton.vue'
import Carousel from '../../components/Home/CarouselContainer.vue'
export default {
  components: {
    Carousel,
    BaseButton,
  },
  props: {
    id: {
      type: String,
      require: true
    },

  },
  data() {
    return {
      imageStyle: {
        width: '100%',
        objectFit: 'cover',
        maxHeight: '100vh'
      },
      vsCarousel: {
        position: 'relative',
        width: '100%',
        height: '100vh',
      },
    }
  },
  computed: {
    imageUrl() {
      return this.$store.getters['home/displayImages']
    },
    counter() {
      return this.$store.getters['shop/quantityCounter'][this.id] || 0
    },
    selectedProduct() {
      return this.$store.getters['shop/displayItems'][this.id]
    },
    name() {
      return this.selectedProduct.name
    },
    ref() {
      return this.selectedProduct.ref
    },
    description() {
      return this.selectedProduct.description
    },
    price() {
      return this.selectedProduct.price
    },

  },
  methods: {
    incrementCounter() {
      this.$store.dispatch('shop/updateCounter', {
        id: this.id,
        value: this.counter + 1
      })
    },

    decrementCounter() {
      if (this.counter > 0) {
        this.$store.dispatch('shop/updateCounter', {
          id: this.id,
          value: this.counter - 1
        })
      }
    },
    addToCart() {
      // Call the mutation to push the article and the number of product
      // into the cart
      this.$store.commit('shop/addToCart', this.id)
    }
  },
  created() {
    // Display the item by its Id, and allowed us to call attribut through 'selectedProduct'
    this.$store.dispatch('shop/getListingData')
    this.$store.dispatch('home/getImageHome')

  }

}
</script>

<style scoped>
.container {
  display: flex;
}

.informations {
  width: calc(100% - 100px);
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.vs-carousel {
  position: relative;
  width: 100%;
  height: 100vh;
}

span {
  text-align: left;
}

.title {
  font-size: 2rem;
  text-align: left;
  font-weight: 800;
  font-family: var(--pramiry-font);
  text-transform: uppercase;
  margin: 0;
}

.desc {
  font-weight: 800;
  margin: 30px 0;
}

.counter {
  border: 1px solid var(--main-color);
  margin-bottom: 30px;
}

.counter button {
  border: none;
  padding: 15px;
  background: transparent;
  font-weight: 800;
  font-size: 18px;
}

.price {
  color: var(--main-color);
  margin-bottom: 30px;
  font-size: 1.5rem;
}

@media (min-width:768px) {
  .carousel-img {
    height: auto;
    width: 100%;
    object-fit: cover;
  }

  .vs-carousel__arrows--left {
    right: -48px;
  }

  .vs-carousel__arrows--right {
    right: -96px;
  }
}
</style>

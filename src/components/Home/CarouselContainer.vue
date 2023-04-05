<template>
<carousel :style="carousel" class="story-carousel story-carousel--colors" v-if="images.length > 0">
  <slide v-for='img in images' :key="img.id" class="story-carousel__slide">
    <img class="carousel-img" :src="img.image" :style="styles" alt="carousel image">
  </slide>
</carousel>
</template>

<script>
import {
  Carousel,
  Slide
} from 'vue-snap'
import 'vue-snap/dist/vue-snap.css'

export default {
  components: {
    Carousel,
    Slide
  },
  props: {
    images: {
      type: Array,
      require: true
    },
    styles: {
      type: Object,
      require: true
    },
    carousel: {
      type: Object,
      require: true
    }
  }
}
</script>

<style>

.container {
    display: flex;
    flex-direction: column;
}

.vs-carousel__slide {
  overflow: hidden;
}

.vs-carousel__arrows {
  top: unset;
  background: var(--main-color);
  cursor: pointer;
  border: none;
  color: var(--secondary-color);
}

.story-carousel .story-carousel--colors{
 position: relative;
  width: 100%;
  height: 100vh;
}

.carousel-img {
    height: 100vh;
    width: 100%;
    object-fit: cover;
  }

.vs-carousel__arrows--left {
  right: 48px;
  left: unset;
  border-right: 0.2px solid rgba(255, 255, 255, 0.3);
}

@media (min-width:768px) {
  .container {
    display: flex;
    flex-direction: row;
}
  .vs-carousel__arrows--left {
    right: -48px;
  }

  .vs-carousel__arrows--right {
    right: -96px;
  }

  .carousel-img {
    height: 100vh;
    width: 100%;
    object-fit: cover;
  }
}
</style>

<template>
<div class="container">
  <div class="carousel">
    <Carousel :images="imageUrl" :styles="imageStyle" :carousel="vsCarousel"></Carousel>
  </div>
  <div class="intro">
    <h1>Découvrez des façons inovantes de décorer</h1>
    <span>Nous offrons une qualité, un confort et un style inégalés aux
      propriétaires immobiliers à travers le pays. Nos experts combinent forme
      et fonction pour donner vie à votre vision. Créez une pièce dans votre
      propre style avec notre collection et faites de votre propriété une
      réflexion de vous et de ce que vous aimez.
    </span>
    <router-link to="/shop">Shop <img src="../assets/Homepage/icon-arrow.svg" alt=""></router-link>

  </div>
  <div class="image1">
    <img src="../assets/Homepage/desktop/image-about-dark.jpg" alt="">
  </div>
  <div class="description">
    <h2>A propos de nos meubles</h2>
    <span>Notre collection multifonctionnelle combine design et fonctionnalité
      pour répondre à vos goûts individuels. Rendez chaque pièce unique, ou
      choisissez un thème cohérent qui exprime au mieux vos intérêts et ce qui
      vous inspire. Trouvez les meubles dont vous avez besoin, des styles
      traditionnels aux styles contemporains, ou tout ce qui se trouve entre les
      deux. Des spécialistes du produit sont disponibles pour vous aider à créer
      votre espace de rêve.</span>
  </div>
  <div class="image2">
    <img src="../assets/Homepage/desktop/image-about-light.jpg" alt="">
  </div>
</div>
</template>

<script>
import Carousel from '../components/Home/CarouselContainer.vue'
export default {
  name: 'HomeView',
  components: {
    Carousel
  },
  data() {
    return {
      imageStyle: {
        height: '50vh',
        width: '100%',
        objectFit: 'cover'
      },
      vsCarousel: {
        position: 'relative',
        width: '100%',
        height: 'auto'
      },
    }
  },
  computed: {
    imageUrl() {
      return this.$store.getters['home/displayImages']
    }
  },
  mounted() {
    return this.$store.dispatch('home/getImageHome')
  }
}
</script>

<style scoped>
h1 {
  text-align: left;
  font-size: 1.3rem;
}

h2 {
  font-size: 1rem;
  font-family: var(--pramiry-font);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 3px;
}

span {
  font-size: 0.725rem;
  text-align: left;
}

.image1 img,
.image2 img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.intro {
  grid-area: intro;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 60px 20%;
}

.intro a {
  font-family: var(--pramiry-font);
  font-weight: 800;
  letter-spacing: 10px;
  color: var(--main-color);
  text-transform: uppercase;
  text-decoration: none;
  margin-top: 20px;
  display: flex;
  align-items: center;
  font-size: 0.75rem;
}

.intro a img {
  display: none;
}

.description {
  padding: 30px;
}

@media (min-width:768px) {

  h1 {
    text-align: left;
    font-size: 2rem;
  }

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
      "carousel carousel carousel carousel carousel carousel carousel intro intro intro intro"
      "carousel carousel carousel carousel carousel carousel carousel intro intro intro intro"
      "image1 image1 image1 image1 description description description description image2 image2 image2"
      "image1 image1 image1 image1 description description description description image2 image2 image2";
  }

  .carousel {
    grid-area: carousel;
  }

  .intro {
    grid-area: intro;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    padding: 0 20%;

  }

  .intro a {
    font-family: var(--pramiry-font);
    font-weight: 800;
    letter-spacing: 10px;
    color: var(--main-color);
    text-transform: uppercase;
    text-decoration: none;
    margin-top: 20px;

  }

  .intro a img {
    display: block;
  }

  .image1 {
    grid-area: image1;
  }

  .image1 img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .description {
    grid-area: description;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 10%;
    justify-content: center;
  }

  .image2 {
    grid-area: image2;
  }

  .image2 img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .carousel-img {
    height: 50vh;
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

<template>
<nav>
  <img class="hamburger" @click="isMenuOpen = !isMenuOpen" src="./assets/Homepage/icon-hamburger.svg" alt="">
  <img class="logo" src="./assets/Homepage/logo.svg" alt="logo">
  <div :class="['menu', { 'open': isMenuOpen }]">
    <router-link to="/">Accueil</router-link>
    <router-link to="/shop">Shop</router-link>
    <!-- <router-link to="/about">About</router-link> -->
    <router-link to="/contact">Contact</router-link>
  </div>
  <div class="cart" @click="openTheCart">
    <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.58357 2.20015L4.81194 14.4607C4.85263 14.7175 4.99174 14.9526 5.20434 15.124C5.42861 15.3063 5.71939 15.4048 6.01913 15.4001H19.1998C19.4517 15.4001 19.6973 15.3275 19.9017 15.1924C20.1061 15.0574 20.2589 14.8668 20.3386 14.6477L23.9385 4.74773C23.9986 4.58237 24.015 4.40628 23.9862 4.23399C23.9575 4.06169 23.8845 3.89812 23.7733 3.75675C23.6621 3.61537 23.5158 3.50025 23.3466 3.42087C23.1773 3.34148 22.9899 3.3001 22.7997 3.30014H5.21634L4.78794 0.935163C4.74396 0.664952 4.59111 0.419659 4.35955 0.247668C4.14008 0.0832956 3.86412 -0.00440154 3.58076 0.000170123H1.19999C0.88173 0.000170123 0.576509 0.116062 0.351468 0.32235C0.126427 0.528639 0 0.808426 0 1.10016C0 1.3919 0.126427 1.67168 0.351468 1.87797C0.576509 2.08426 0.88173 2.20015 1.19999 2.20015H2.58357ZM7.01632 13.2001L5.61593 5.50013H21.1353L18.3346 13.2001H7.01632ZM9.59988 19.8C9.59988 20.3835 9.34703 20.9431 8.89695 21.3556C8.44687 21.7682 7.83643 22 7.19991 22C6.5634 22 5.95296 21.7682 5.50288 21.3556C5.0528 20.9431 4.79994 20.3835 4.79994 19.8C4.79994 19.2165 5.0528 18.657 5.50288 18.2444C5.95296 17.8318 6.5634 17.6 7.19991 17.6C7.83643 17.6 8.44687 17.8318 8.89695 18.2444C9.34703 18.657 9.59988 19.2165 9.59988 19.8ZM20.3998 19.8C20.3998 20.3835 20.1469 20.9431 19.6968 21.3556C19.2467 21.7682 18.6363 22 17.9998 22C17.3633 22 16.7528 21.7682 16.3027 21.3556C15.8527 20.9431 15.5998 20.3835 15.5998 19.8C15.5998 19.2165 15.8527 18.657 16.3027 18.2444C16.7528 17.8318 17.3633 17.6 17.9998 17.6C18.6363 17.6 19.2467 17.8318 19.6968 18.2444C20.1469 18.657 20.3998 19.2165 20.3998 19.8Z" fill="#0D0D0D" />
    </svg>
    <span class="totalCart">{{ totalCart }}</span>
  </div>
</nav>
<div class="cart-container" :class="{active:openCart}">
  <span class="closeTheCart" @click="closeTheCart">X</span>
  <cart></cart>
</div>
<router-view />
</template>

<script>
import Cart from './components/Cart/CartContainer.vue'
export default {
  components: {
    Cart
  },
  data() {
    return {
      isMenuOpen: false,
      openCart: false
    }
  },
  computed: {
    totalCart() {
      // Get all the value of page items and then sum up the total of them and
      let sumUp = []
      for (let i = 0; i < Object.values(this.$store.getters['shop/displayCart']).length; i++) {
        sumUp.push(this.$store.getters['shop/displayCart'][i][1])
      }
      return sumUp.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0);
    }
  },
  methods: {
    // open and close the side cart
    openTheCart() {
      return this.openCart = true
    },
    closeTheCart() {
      return this.openCart = false
    }
  }

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=var(--pramiry-font):wght@300;500;900&display=swap');

:root {
  --main-color: black;
  --secondary-color: white;
  --thirdly-color: #3b8b71;
  --pramiry-font: 'Roboto';
}

body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}

h1 {
  font-size: 2rem;
  font-family: var(--pramiry-font);
}

h4 {
  margin: 0;
  color: var(--secondary-color);
  font-family: var(--pramiry-font);
  font-weight: 500;
}

nav {
  padding: 30px;
  position: absolute;
  z-index: 999;
  display: flex;
  align-items: center;
  width: 80%;
  justify-content: space-between;
  position: fixed;
}

nav a {
  font-weight: normal;
  color: var(--thirdly-color);
  text-decoration: none;
  font-weight: 600;
  margin-bottom: 30px;
}

nav a::after {
  position: relative;
  content: '';
  width: 0;
  height: 0;
  left: 0;
  background: var(--thirdly-color);
  display: block;
  transition: all 0.3s ease-in;
  animation-name: hoverEffect;
  animation-duration: 0.4s;
  transform-origin: left;
}

nav a:not(.router-link-exact-active):hover::after {
  height: 1px;
  transition: all 0.3s ease-in;
  right: 0;
  width: 100px;
}

nav a.router-link-exact-active {
  font-weight: bold;
  color: var(--thirdly-color);
  border-bottom: 1px solid var(--thirdly-color);
  font-weight: 800;
}

.logo {
  width: 50px;
  height: auto;
}

.hamburger {
  display: block;
  position: relative;
  z-index: 999;
  filter: invert(1);
}

.menu {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  position: absolute;
  transform: translateX(-100vw);
  transition: all 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
  left: 0;
  top: 0;
}

.menu.open {
  position: absolute;
  transform: translateX(0vw);
  transition: all 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.cart-container {
  position: absolute;
  top: 0;
  bottom: 0;
  background: var(--secondary-color);
  width: 100%;
  height: auto;
  transform: translateY(-100%);
  transition: all 0.6s ease-in;
  z-index: 999;
  padding: 70px 0;
  position: fixed;
}

.active {
  transform: translateY(0);
  transition: all 0.6s ease-out;
}

.closeTheCart {
  position: absolute;
  top: 0px;
  right: 0;
  background: black;
  color: white;
  padding: 10px 20px;
}

.cart {
  position: relative;
}

.totalCart {
  position: absolute;
  padding: 0px 7px;
  background: var(--thirdly-color);
  color: var(--secondary-color);
  border-radius: 25px;
  top: -10px;
  left: -10px;
}

@media (min-width:768px) {
  .hamburger {
    display: none;
  }

  nav {
    padding: 30px;
    position: absolute;
    z-index: 999;
    display: flex;
    width: calc(100% - 80px);
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0;
  }

  nav a{
    margin-bottom: 0;
  }

  .logo {
    margin-right: 30px;
  }

  .menu {
    position: relative;
    background: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    transform: translateX(0);
    z-index: 99;
    height: 0;
    justify-content: flex-end;
  }

  .menu a {
    margin-right: 30px;
  }

  .closeTheCart {
    position: absolute;
    top: 0;
    left: 0px;
    padding: 10px;
    background: var(--main-color);
    color: var(--secondary-color);
    height: 40px;
    width: 40px;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .cart-container {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    background: var(--secondary-color);
    width: 50%;
    height: auto;
    border-left: 2px solid var(--main-color);
    transform: translateX(100%);
    transition: all 0.6s ease-in;
    z-index: 999;
    padding: 70px 10px 0;
  }

  .active {
    transform: translateX(0);
    transition: all 0.6s ease-out;
  }
}
</style>

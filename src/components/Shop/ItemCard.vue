<template>
<base-card>
  <router-link :to="itemDetail">
    <img @mouseenter="hover = true" @mouseleave="hover = false" :src="item" alt="">
    <div :class="{info: hover}">
      <div class="title-and-button">
        <h4>{{ title }}</h4>
        <h4>{{ price }}</h4>
      </div>
    </div>
  </router-link>
</base-card>
</template>

<script>
import BaseCard from '../Base/BaseCard.vue';
export default {
  components: {
    BaseCard,
  },
  props: {
    id: {
      type: Number,
      require: true
    },
    item: {
      type: String,
      require: true
    },
    title: {
      type: String,
      require: true
    },
    price: {
      type: String,
      require: true
    }
  },
  data() {
    return {
      hover: false
    }
  },
  computed: {
    itemDetail() {
      return this.$route.path + '/' + this.id
    }
  }
}
</script>

<style scoped>
.info {
  position: absolute;
  width: 100%;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.7721682422969187) 0%, rgba(255, 255, 255, 0) 100%);
  height: 100px;
  bottom: 0;
}

.title-and-button {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 90%;
  height: 80%;
  margin: 0 auto;
}
</style>

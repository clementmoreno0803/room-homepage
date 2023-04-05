<template>
<item-card v-for="item in items" :key="item.id"
 :id="item.id"
 :item="item.image"
 :title="item.name"
 :price="item.price"></item-card>
</template>

<script>
import ItemCard from '@/components/Shop/ItemCard.vue'
export default {
components:{
  ItemCard,
},
  computed:{
    items(){
      // Display images from GET request into the grid
      return this.$store.getters['shop/displayItems']
    },
  },
  created() {
    // Call GET request
    return this.$store.dispatch('shop/getListingData')
  }
}
</script>

<style scoped>
#app{
  display: flex;
}
</style>

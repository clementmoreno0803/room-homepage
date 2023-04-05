<template>
  <div v-if="Cart.length > 0">
    <base-table>
    <cart v-for="item in Cart" :key="item[0].id"
    :id="item[0].id"
    :name="item[0].name"
    :qty="item[1]"
    :price="item[0].price"></cart>
  </base-table>
  <div class="purchase">
    <base-button>Poursuivre votre commande</base-button>
  </div>
</div>
<h3 v-else>Veuillez ajouter un produit à votre panier</h3>
</template>

<script>
import BaseButton from '../Base/BaseButton.vue'
import Cart from './CartSummary.vue'
import BaseTable from '../Base/BaseTable.vue'
export default {
  components: {
    BaseButton,
    Cart,
    BaseTable,
  },
  computed: {
    Cart() {
      return this.$store.getters['shop/displayCart']
    },
  },
}
</script>

<style scoped>

h3{
  opacity: 0.08;
  font-size: 2rem;
  font-family: var(--pramiry-font);
  color: var(--thirdly-color);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10%;
}
.purchase {
  display: flex;
  justify-content: flex-end;
  margin-right: 50px;
}
@media(min-width:768px){
h3{

  font-size: 4rem;
}
}
</style>

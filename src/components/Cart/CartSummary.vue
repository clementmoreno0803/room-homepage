<template>
<div class="open-cart">
    <td><span><b>{{name}}</b></span></td>
    <td><span><b>{{ qty }}</b></span></td>
    <td><span>{{ price }}</span></td>
    <td><span>{{ totalPrice }}€</span></td>
  </div>
  <div class="cross" @click="removeArticle">
    <span>Supprimer l'article</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 21 20" fill="none">
      <path d="M0.438801 0.436126C0.719851 0.16831 1.10098 0.0178597 1.49839 0.0178597C1.89579 0.0178597 2.27692 0.16831 2.55797 0.436126L10.4906 7.99755L18.4233 0.436126C18.5615 0.299683 18.7269 0.190851 18.9098 0.115981C19.0926 0.0411112 19.2893 0.00170225 19.4883 5.39386e-05C19.6873 -0.00159437 19.8846 0.0345506 20.0688 0.10638C20.253 0.17821 20.4203 0.284286 20.561 0.418419C20.7018 0.552551 20.813 0.712054 20.8884 0.88762C20.9638 1.06319 21.0017 1.2513 20.9999 1.44098C20.9982 1.63067 20.9569 1.81813 20.8783 1.99242C20.7998 2.16671 20.6856 2.32434 20.5425 2.45613L12.6098 10.0176L20.5425 17.579C20.8155 17.8484 20.9665 18.2093 20.9631 18.5838C20.9597 18.9584 20.8021 19.3167 20.5242 19.5816C20.2463 19.8464 19.8704 19.9967 19.4775 19.9999C19.0845 20.0032 18.7059 19.8592 18.4233 19.599L10.4906 12.0376L2.55797 19.599C2.27531 19.8592 1.89674 20.0032 1.50378 19.9999C1.11082 19.9967 0.73493 19.8464 0.457058 19.5816C0.179185 19.3167 0.0215672 18.9584 0.0181526 18.5838C0.0147379 18.2093 0.1658 17.8484 0.438801 17.579L8.37146 10.0176L0.438801 2.45613C0.157837 2.18823 0 1.82493 0 1.44613C0 1.06732 0.157837 0.704023 0.438801 0.436126Z" fill="#0D0D0D" />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      require: true
    },
    name: {
      type: String,
      require: true
    },
    qty: {
      type: Number,
      require: true
    },
    price: {
      type: String,
      require: true
    }
  },
  computed: {
    totalPrice() {
      const multiplication = parseFloat(this.price).toFixed(2)
      return multiplication
    }
  },
  methods: {
    removeArticle() {
      this.$store.commit('shop/removeFromCart', this.id)
    },
    }
  }
</script>

<style scoped>
.open-cart {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--main-color);
  margin-bottom: 20px;
}

table {
  width: 80%;
}

td {
  width: 25%;
}
.cross{
  position: relative;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 30px;
  align-items: center;
  cursor: pointer;
}
.cross span{
  margin-right: 15px;
}
.name-price {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>

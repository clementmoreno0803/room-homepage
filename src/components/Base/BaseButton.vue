<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {

}
</script>

<style scoped>
.button{
  background: var(--main-color);
  color: var(--secondary-color);
  padding: 15px;
  font-family: var(--pramiry-font);
  font-weight: 800;
  text-transform: capitalize;
  border: none;
  transition: all 0.4s ease-in;
}
.button:hover{
  box-shadow: 5px 5px 10px rgba(0,0,0,0.3);
  transition: all 0.4s ease-out;
}
</style>

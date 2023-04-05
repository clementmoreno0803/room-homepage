<template>
<div class="listing-container">
  <div class="card-container">
    <div class="card">
      <slot></slot>
    </div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
.listing-container {
  display: inline-flex;
  width: 50%;
  justify-content: center;
  align-items: center;
}

.card-container {
  width: calc(100% - 3px);
  margin: -3px;
}

.card {
  width: 100%;
  height: 33vh;
  overflow: hidden;
  position: relative;
}

.card img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

@media(min-width: 768px){
  .listing-container {
  display: inline-flex;
  width: 25%;
  justify-content: center;
  align-items: center;
}

  .card {
  width: 100%;
  height: 90vh;
  overflow: hidden;
  position: relative;
}
}
</style>

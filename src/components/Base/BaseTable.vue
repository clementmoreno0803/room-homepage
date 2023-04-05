<template>
<table>
  <thead>
    <tr>
      <th>Nom de l'article</th>
      <th>Quantité</th>
      <th>Prix unitaire</th>
      <th>Prix total</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <slot></slot>
    </tr>
    </tbody>
  </table>
</template>

<style>
table {
  width: 100%;
  display: table;
}

tr{
  display: inline-table;
  width: 90%;
  padding-bottom: 30px;

}
th{
  width: 25%;
  border-right: 1px solid var(--main-color);
}
</style>

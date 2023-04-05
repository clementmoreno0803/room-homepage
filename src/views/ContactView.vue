<template>
<div class="contact-container">
  <h2 class="titre">On serait heureux d'avoir de vos nouvelles</h2>
  <form @submit.prevent="submitForm">
    <div class="name">
      <div class="form-input">
        <label for="firstName">Votre Nom</label>
        <input type="text" id="firstName" v-model="firstName" placeholder="Votre nom" required>
      </div>
      <div class="form-input">
        <label for="lastName">Votre Prénom</label>
        <input type="text" id="lastName" v-model="lastName" placeholder="Votre prénom" required>
      </div>
    </div>
    <div class="more-info">
      <div class="form-input">
        <label for="email">Votre email:</label>
        <input type="text" id="email" v-model="email" placeholder="Votre email" required>
      </div>
      <div class="form-input">
        <label for="topics">De quoi parle-t-on aujourd'hui ?</label>
        <select id="topics" v-model="selectedOption">
          <option value="">Séléctionnez une option: </option>
          <option value="Fournitures">Stock des meubles</option>
          <option value="palette">Palette des couleurs</option>
          <option value="Customer">Service après vente</option>
        </select>
      </div>
    </div>
    <label for="message">Votre Message</label>
    <textarea id="message" cols="30" rows="10" v-model="message" required></textarea>
    <input type="submit" value="Envoyer" class="send" @submit.prevent="submitForm">
  </form>
</div>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      selectedOption: null,
      message: '',
    }
  },
  methods: {
    submitForm() {
      const getData = {
        first: this.firstName,
        last: this.lastName,
        email: this.email,
        option: this.selectedOption,
        message: this.message,
      }
      this.$store.dispatch('contact/sendContactData', getData)

    }
  }
}
</script>

<style scoped>
.hamburger {
  display: block;
  position: relative;
  z-index: 999;
  filter: invert(1);
}

.contact-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

form {
  display: flex;
  flex-direction: column;
  width: 80vw;
}

.titre {
  font-size: 1.5rem;
  width: 100%;
  text-align: left;
}

.form-input {
  display: flex;
  flex-direction: column;
  width: 100%;
}

input {
  padding: 7px;
}

label {
  text-align: left;
}

select {
  height: 33px;
}

.name,
.more-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  flex-direction: column;
}

.send {
  margin-top: 20px;
  background: var(--main-color);
  color: var(--secondary-color);
  border: none;
  padding: 20px 50px;
  width: fit-content;
}

@media(min-width: 768px) {

  form {
    display: flex;
    flex-direction: column;
    width: 50vw;
  }

  .titre {
    font-size: 2rem;
    width: 60%;
    text-align: left;
  }

  .form-input {
    display: flex;
    flex-direction: column;
    width: 45%;
  }

  .name,
  .more-info {
    flex-direction: row;

  }
}
</style>

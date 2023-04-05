import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'


export default {
    namespaced: true,
    state() {
        return {
            itemListing: [],
            counters: {},
            cart: [],
        }
    },
    mutations,
    actions,
    getters
}

//state :
//Pouvoir stocker le counter pour chaque page
// Avoir un tableau de tous les compteurs
// devoir connaître la page sur laquelle on est
// Envoyer l'id en même temps que la valeur du compteur
// savoir la valeur du compteur avec les boutons + et -
// stocker la valeur du compteur après les changements


// 1- stocker la valeur du compteur et l'id
// 2- push dans un tableau d'objet

import axios from 'axios'
export default {
    async getListingData({ commit }) {
        await axios.get('https://ecommerce-affab-default-rtdb.firebaseio.com/listing.json')
            .then(response => {
                commit('listingItem', response.data)
            }).catch(error => {
                console.log(error)
            })
    },

    updateCounter({ commit }, payload) {
        commit('updateCounter', payload)
    },
}

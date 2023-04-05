import axios from 'axios'

export default {
    getImageHome({ commit }) {
        axios.get('https://ecommerce-affab-default-rtdb.firebaseio.com/imageHome.json')
            .then(response => {
                commit('homeImage', response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }
}
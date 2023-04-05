import axios from 'axios'

export default {
    async sendContactData({ commit }, data) {
        try {
            const res = await axios.post('https://ecommerce-affab-default-rtdb.firebaseio.com/contact.json', data)
            commit('SEND_POST_REQUEST', res.data);
        } catch (error) {
            console.log(error);
        }
    },
}

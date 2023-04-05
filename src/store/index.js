import { createStore } from 'vuex'
import homeModule from '../store/modules/Home/index.js'
import shopModule from './modules/Shop/index.js'
import contactModule from './modules/Contact/index.js'


export default createStore({
    modules: {
        home: homeModule,
        shop: shopModule,
        contact: contactModule
    },
})
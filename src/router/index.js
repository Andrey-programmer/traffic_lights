import Vue from 'vue'
import VueRouter from 'vue-router'
import TrL1 from '../components/1.vue'
import TrL2 from '../components/2.vue'
import TrL3 from '../components/3.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '',
            redirect: '/red'
            // components: trL1
        },
        {
            path: '/red',
            component: TrL1
        },
        {
            path: '/yellow',
            component: TrL2
        },
        {
            path: '/green',
            component: TrL3
        }
        
    ],
    mode: 'history'
})

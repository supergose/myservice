import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

export default {
    sayHello() {
        // eslint-disable-next-line
        console.log('Hello from AnotherService!')
    }
}
import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

const API_URL = 'https://jsonplaceholder.typicode.com/'

export default {
    getItems() {
        return Vue.http.get(API_URL + 'posts')
    }
}
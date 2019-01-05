import Vue from 'vue'
import dealName from './dealName'
let filters = {
  dealName
}
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))
export default filters

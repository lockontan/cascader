// import Vue from '../../vue/dist/vue.runtime.esm.js'
import Vue from 'vue'
// import ydui from 'vue-ydui'
// import 'vue-ydui/dist/ydui.rem.css'
// import 'vue-ydui/dist/ydui.flexible'

// // use
// Vue.use(ydui)

// // 覆盖组件默认属性
// Vue.component('yd-navbar').extendOptions.props.bgcolor.default = '#4A96F8'
// Vue.component('yd-navbar').extendOptions.props.color.default = '#fff'
// Vue.component('yd-navbar-back-icon').extendOptions.props.color.default = '#fff'
// Vue.component('yd-checkbox').extendOptions.props.color.default = '#F2973E'
// Vue.component('yd-popup').mixin({
// 	props: {
// 		closeOnMasker: {
// 			type: Boolean,
// 			default: true
// 		}
// 	},

// 	methods: {
// 		close() {
// 			if (this.closeOnMasker) {
// 				this.show = false
// 				this.$emit('input', false)
// 			}
//     }
// 	}
// })

import App from './App.vue'

Vue.config.productionTip = false

new Vue({
	render: h => h(App)
}).$mount('#app')

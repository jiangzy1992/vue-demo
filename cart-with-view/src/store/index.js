import vue from 'Vue'
import vuex from 'Vuex'
import * as actions from './actions'
import * as getters from './getters'
import product from './modules/product'

vue.ues(vuex)

export default new vuex.Store({
	actions,
	getters,
	modules: {
		product
	}
})
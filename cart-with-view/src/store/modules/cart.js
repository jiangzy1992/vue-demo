import * as types from '../mutation-types'

const state = {
	added: [],  //[{name, style, size, price, quantity}]
}
// 
// const getters = {
// 	
// }

const actions = {
	removeItem ({ commit }, item) {
		commit(types.REMOVE_PRODUCT, item)
	}
}

const mutations = {
	[types.REMOVE_PRODUCT] (state, item) {
		let index = this.items.indexOf(item)
		if (index !== -1) {
		  this.items.splice(index, 1)
		}
	}
}

export default {
	state,
	actions,
	mutations
}
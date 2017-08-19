import * as types from '../mutation-types'

const state = {
	added: [],  //[{name, style, size, price, quantity, checked}]
	checkAll: false,
	totalMoney: 0
}

const getters = {
	isCheckAll: state => state.checkAll,
	total: state => state.totalMoney
}

const actions = {
	removeItem ({ commit }, index) {
		commit(types.REMOVE_PRODUCT, index)
	},
	
	isCheck ({ commit }, item, cart) {
		commit(types.IS_CHECK, item)
	},
	
	checkAll ({ commit }, cart) {
		commit(types.CHECK_ALL, cart)
	}
}

const mutations = {
	[types.ADD_TO_CART] (state, allDetails) {
		let name = allDetails.details.name
		let style = allDetails.activeStyle
		let size = allDetails.activeSize
		let price = allDetails.productPrice
		
		let record = state.added.find(d => {
			return d.style === style && d.size === size
		})
		if (!record) {
			state.added.push({
				name,
				style,
				size,
				price,
				quantity: 1,
				checked: false
			})
		} else {
			record.quantity++
		}
	},
	
	[types.REMOVE_PRODUCT] (state, index) {
		if (index > -1) {
			state.added.splice(index, 1);
		}
	},
	
	[types.IS_CHECK] (state, item) {
		item.checked = !item.checked
		state.added.forEach(function(item, index) {
			if (item.checked) {
				state.checkAll = true
			} else {
				state.checkAll = false
			}
		})
		
		if (item.checked) {
			state.totalMoney = state.totalMoney + item.price*item.quantity
		} else {
			state.totalMoney = state.totalMoney - item.price*item.quantity
		}
	},
	
	[types.CHECK_ALL] (state, cart) {
		state.checkAll = !state.checkAll
		for (var i = 0; i < cart.length; i++) {
			cart[i].checked = state.checkAll
			if (state.checkAll) {
				state.totalMoney = state.totalMoney + cart[i].price*cart[i].quantity
			} else {
				state.totalMoney = 0
			}
		}
	}
}

export default {
	state,
	actions,
	getters,
	mutations
}
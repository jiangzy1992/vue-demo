import shop from '../../api/shop'
import * as types from '../mutation-types'

const state = {
	all:{},
	activeStyle: null,
	activeStyleUrl: 'http://o8yu724qs.bkt.clouddn.com/iphone6s-silver-select-2015.png',
	activeSize: null,
	productPrice: null,
	isSelected: false
}

const getters = {
	productDetails: state => state.all,
	buttonSelected: state => state.isSelected,
	activeStyleUrl: state => state.activeStyleUrl
}

const actions = {
	getAllDetails({ commit }) {
		shop.getDetails( details => {
			commit(types.PRODUCT_DETAILS, { details })
		})
	},
	
	changeStyle({ commit }, style, styleUrl) {
		commit(types.CHANGE_STYLE, style, styleUrl)
	},
	
	changePrice({ commit }, price) {
		commit(types.CHANGE_PRICE, price)
	},
	
	selected({ commit }) {
		commit(types.IS_SELECTED)
	}
}

const mutations = {
	[types.PRODUCT_DETAILS] (state, { details }) {
		state.all = details
	},
	
	[types.ADD_TO_CART] (state) {
		const name = state.all.name
		const style = state.activeStyle === null ? "银色" :  state.activeStyle
		const size = state.activeSize
		const price = state.productPrice
		
		const record = state.cart.added.find(d => {
			return d.style === style && d.size === size
		})
		if (!record) {
			state.cart.added.push({
				name,
				style,
				size,
				price,
				quantity: 1
			})
		} else {
			quantity++
		}
	},
	
	[types.CHANGE_STYLE] (state, style, styleUrl) {
		state.activeStyle = style
		state.activeStyleUrl = styleUrl
	},
	
	[types.CHANGE_PRICE] (state, size, price) {
		state.productPrice = price
		state.activeSize = size
	},
	
	[types.IS_SELECTED] (state) {
		state.isSelected = true
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}
import shop from '../../api/shop'
import * as types from '../mutation-types'

const state = {
	all:{},
	activeStyle: '银色',
	activeStyleUrl: 'http://o8yu724qs.bkt.clouddn.com/iphone6s-silver-select-2015.png',
	activeSize: null,
	productPrice: '5288 - 6888',
	isSelected: true
}

const getters = {
	productDetails: state => state.all,
	aStyle: state => state.activeStyle,
	aStyleUrl: state => state.activeStyleUrl,
	aSize: state => state.activeSize,
	pdPrice: state => state.productPrice,
	buttonSelected: state => state.isSelected
}

const actions = {
	getAllDetails({ commit }) {
		shop.getDetails( details => {
			commit(types.PRODUCT_DETAILS, { details })
		})
	},
	changeStyle({ commit }, style) {
		commit(types.CHANGE_STYLE, style)
	},
	changePrice({ commit }, size) {
		commit(types.CHANGE_PRICE, size)
	},
	selected({ commit }) {
		commit(types.IS_SELECTED)
	}
}

const mutations = {
	[types.PRODUCT_DETAILS] (state, { details }) {
		state.all = details
	},
	
	[types.CHANGE_STYLE] (state, style) {
		state.activeStyle = style.key
		state.activeStyleUrl = style.value
	},
	
	[types.CHANGE_PRICE] (state, size) {
		state.productPrice = size.value
		state.activeSize = size.key
	},
	
	[types.IS_SELECTED] (state) {
		state.isSelected = false
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}
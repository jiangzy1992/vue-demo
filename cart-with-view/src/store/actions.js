import * as types from './mutation-types'

export const addToCart = ({ commit }, details) {
	commit(types.ADD_TO_CART, {details.activeStyleUrl, details.size})
}
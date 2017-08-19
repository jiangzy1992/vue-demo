import * as types from './mutation-types'

export const addToCart = ({ commit }, allDetails) => {
	commit(types.ADD_TO_CART, allDetails)
}
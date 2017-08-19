<template>
	<nav class="navbar navbar-default" role="navigation">
		<div class="container-fluid">
			<div class="navbar-header">
				<router-link class="navbar-brand" :to="{ path: '/' }">数码商城</router-link>
			</div>
			<ul class="nav navbar-nav">
				<li :class="{active: actived1}" @click="isActived1()">
					<router-link :to="{ path: '/' }">iPhone6S</router-link>
				</li>
				<li :class="{active: actived2}" @click="isActived2()">
					<router-link :to="{ path: '/cart' }">
						购物车
						<span class="badge text-danger" v-if="cart.length">{{cart.length}}</span>
					</router-link>
					
				</li>
			</ul>
		</div>
	</nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	data: function () {
		return {
			actived1: true,
			actived2: false
		}
	},
	computed: mapGetters({
		cart: 'cartProduct'
	}),
	methods: {
		isActived1: function () {
			this.actived1 = true
			this.actived2 = false
		},
		isActived2: function () {
			this.actived1 = false
			this.actived2 = true
		}
	}
}
</script>

<style>
	.text-danger {
		background-color: #d9534f;
		color: #fff;
	}
</style>

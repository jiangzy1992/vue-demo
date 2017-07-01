<template>
	<nav class="navbar navbar-default" role="navigation">
		<div class="container-fluid">
			<div class="navbar-header">
				<a class="navbar-brand" href="javascript:;">商城</a>
			</div>
			<ul class="nav navbar-nav">
				<li class="active">
					<router-link :to="{ path: '/' }">iPhone6S</router-link>
				</li>
				<li>
					<router-link :to="{ path: '/cart' }">购物车</router-link>
					<!-- <span class="badge text-danger" v-if="cart.length">{{cart.length}}</span> -->
				</li>
			</ul>
		</div>
	</nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	// computed: mapGetters({
	// 	cart: 'cartProduct'
	// }),
}
</script>

<style>
	.text-danger {
		background-color: #d9534f;
		color: #fff;
	}
</style>

<template>
	<nav class="navbar navbar-default" role="navigation">
		<div class="container-fluid">
			<div class="navbar-header">
				<a class="nav-brand">商城</a>
			</div>
			<ul class="nav navbar-nav">
				<li class="active">
					<router-link :to="{ path: 'products' }">iPhone6S</router-link>
				</li>
				<li>
					<router-link :to="{ path: 'cart' }">购物车</router-link>
					<span class="badge text-danger" v-if="">{{count}}</span>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script>
import { mapGetter } from 'vuex'
export default {
	computed: 
}
</script>

<style scoped>
	.text-danger {
		background-color: #d9534f;
		color: #fff;
	}
</style>

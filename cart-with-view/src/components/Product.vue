<template>
	<div class="container">
		<div class="row">
			<div class="product-list col-md-offset-3 col-sm-offset-3 col-md-6 col-sm-6">
				<div class="row">
					<!-- iPhone6S picture -->
					<div class="product-pic col-md-6 col-sm-6">
						<img src="details.activeStyleUrl">
					</div>
					<!-- iPhone6S details -->
					<div class="product-details col-md-6 col-sm-6">
						<h3>{{details.name}}</h3>
						<hr>
						<div class="details">
							<dl class="options">
								<dt>描述:</dt>
								<dd>{{ details.desc }}</dd>
							</dl>
							<dl class="options">
								<dt>价格:</dt>
								<dd>{{ details.price }}</dd>
							</dl>
							<dl class="options">
								<dt>外观:</dt>
								<dd>
									<ul>
										<li v-for="{ value, key } in details.style" 
											@click="changeStyle(key, value)" 
											:class="{active: details.activeStyleUrl = value}"
										>{{ key }}</li>
									</ul>
								</dd>
							</dl>
							<dl class="options">
								<dt>储存容量:</dt>
								<dd>
									<ul>
										<li v-for="{ value, key } in details.size"
											@click="changePrice(key, value); selected()"
											:class="{active: details.price = value}"
										>{{ key }}</li>
									</ul>
								</dd>
							</dl>
						</div>
						<hr>
						<button class="btn btn-danger btn-clock" disabled="isSelected" @click="addToCart()">
							<span class="glyphicon glyphicon-shopping-cart"></span>加入购物车
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
	computed: ...mapGetters ({
		details: 'getAllDetails',
		isSelected: 'buttonSelected'
	}),
	methods: {
		...mapActions ([
			'changeStyle',
			'changePrice',
			'addToCart',
			'selected'
		])
	},
	created () {
		this.$store.dispatch('getAllDetails')
	}
}
</script>

<style>  /*Vue 文件格式可以支持局部 CSS，只要在 <style> 标签上加上一个 scoped 属性*/

</style>

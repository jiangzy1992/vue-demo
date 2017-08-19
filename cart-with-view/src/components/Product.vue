<template>
	<div class="container">
		<div class="row">
			<div class="product-list col-md-offset-2 col-sm-offset-2 col-md-8 col-sm-8">
				<div class="row">
					<!-- iPhone6S picture -->
					<div class="product-pic col-md-6 col-sm-6">
						<img :src="activeStyleUrl" class="img-responsive">
					</div>
					<!-- iPhone6S details -->
					<div class="product-details col-md-6 col-sm-6">
						<h3>{{details.name}}</h3>
						<hr>
						<div class="details">
							<div class="options">
								<dl class="dl-horizontal">
									<dt>描述：</dt>
									<dd>{{ details.desc }}</dd>
								</dl>
							</div>
							<div class="options">
								<dl class="dl-horizontal">
									<dt>价格：</dt>
									<dd class="priceColor"><strong>￥{{ productPrice }}</strong></dd>
								</dl>
							</div>
							<div class="options">
								<dl class="dl-horizontal">
									<dt>外观：</dt>
									<dd>
										<ul>
											<li v-for="(value, key) in details.style" 
												@click="changeStyle({key, value})" 
												:class="{active: activeStyleUrl == value}"
											>{{ key }}</li>
										</ul>
									</dd>
								</dl>
							</div>
							<div class="options">
								<dl class="dl-horizontal">
									<dt>存储容量:</dt>
									<dd>
										<ul>
											<li v-for="(value, key) in details.size"
												@click="changePrice({key, value}); selected()"
												:class="{active: productPrice == value}"
											>{{ key }}</li>
										</ul>
									</dd>
								</dl>
							</div>
						</div>
						<hr>
						<button type="button" class="btn btn-danger btn-block" 
								:disabled="isSelected"
								@click="addToCart({details, activeStyle, activeSize, productPrice})">
							<span class="glyphicon glyphicon-shopping-cart"></span> 加入购物车
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
	computed: {
		...mapGetters ({
			details: 'productDetails',
			activeStyle: 'aStyle',
			activeStyleUrl: 'aStyleUrl',
			activeSize: 'aSize',
			productPrice: 'pdPrice',
			isSelected: 'buttonSelected'
		})
	},
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
	.priceColor {
		color: #c0392b;
	}
	.product-details dt {
		width: 64px;
		color: #8f8686;
		padding: 4px 0;
	}
	.product-details dd {
		margin-left: 64px;
		padding: 4px;
	}
	.options ul {
		padding: 0;
	}
	.options ul > li {
		list-style: none;
		float: left;
		margin-right: 4px;
		border: 2px solid #eee;
		padding: 0 8px;
	}
	.options ul > li:hover {
		border: 2px solid #c0392b;
	}
	.options ul .active {
		border: 2px solid #c0392b;
	}
</style>

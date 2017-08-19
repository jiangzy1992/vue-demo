<template>
    <div class="cart col-md-offset-2 col-sm-offset-2 col-md-8 col-sm-8">
	    <div class="panel panel-danger" v-if="cart.length">
		  	<div class="panel-heading">
		  		<span class="glyphicon glyphicon-shopping-cart"></span> 购物车
		  	</div>
			<div class="panel-body">
				<ul v-for="(item, index) in cart">
					<a href="javascript:;" :class="{ 'check-btn': !item.checked, 'check': item.checked}" @click="isCheck(item)"></a>
					<span class="item-name">{{item.name}}</span>
					<span class="label label-primary">{{item.style}}</span>
					<span class="label label-info">{{item.size}}</span>
					<span class="badge text-danger">{{item.quantity}}</span>
					<div class="pull-right">
						{{item.price*item.quantity | currency}} <span class="glyphicon glyphicon-remove-circle" @click="removeItem(index)"></span>
					</div>
				</ul>
			</div>
			<div class="input-group">
		  		<div class="form-control">
					<span>
						<a href="javascript:;" :class="{ 'check-btn': !checkedAll, 'check': checkedAll}" @click="checkAll(cart)" id="check-all"></a>
						<label for="check-all" class="item-name">全选</label>
					</span>
					<span class="pull-right"><strong>总计： {{totalMoney | currency}}</strong></span>
		  		</div>
	            <span class="input-group-btn">
	            	<a href="/cart" @click="submit" class="btn btn-danger">结算 <span class="glyphicon glyphicon-circle-arrow-right"></span></a>
	            </span>
		    </div>
    	</div>
		<div class="cart-empty" v-else>
		  <div id="content"><span class="pomegranage"><strong>购物车空空如也</strong></span></div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
	// data: function () {
	// 	return routeTo = "#"
	// },
	computed: mapGetters({
		cart: 'cartProduct',
		checkedAll: 'isCheckAll',
		totalMoney: 'total'
	}),
	methods: {
		submit: function () {
			let suc = function () {
				alert("结账成功") //清空购物车
			}
			let fal = function () {
				alert("结账失败")
			}
			Math.random() > 0.5 ? suc() : fal()
		},
		...mapActions([
			'removeItem',
			'isCheck',
			'checkAll'
		])
	}
}
</script>

<style scoped>
	.cart .input-group {
		border-top: 1px solid #ebccd1;
	}
	
	.cart .input-group-btn:last-child>.btn {
		border-top-right-radius: 0;
	}
	
	.input-group .form-control {
		border: 0;
	}
	
	.panel-body ul {
		padding-left: 0px;
	}
	
	.check-btn {
		width: 20px;
		height: 20px;
		background-image: url(../assets/icon_box-empty.png);
		background-size: 100% 100%;
		position: absolute;
		margin-top: 1px;
	}
	
	.check {
		width: 20px;
		height: 20px;
		background-image: url(../assets/icon_box-checked.png);
		background-size: 100% 100%;
		position: absolute;
		margin-top: 1px;
	}
	
	.item-name {
		margin-left: 24px;
	}
	
	.cart-empty {
		padding: 100px;
		border-radius: 4px;
		border: 1px dashed rgb(170, 170, 170);
	}
	
	#content {
		top: 50%;
		width: 100%;
		text-align: center;
		left: 0;
	}
</style>

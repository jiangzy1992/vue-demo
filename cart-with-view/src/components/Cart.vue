<template>
  <div class="cart col-md-offset-2 col-sm-offset-2 col-md-8 col-sm-8">
	  <div class="panel panel-danger">
	  	<div class="panel-heading">
	  		<span class="glyphicon glyphicon-shopping-cart"></span>购物车
	  	</div>
		<div class="panel-body">
			<ul v-for="">
				<input type="checkbox" :value="price">
				<span>{{name}}</span>
				<span>{{type}}</span>
				<span class="badge text-danger">{{count}}</span>
				<span class="pullright">{{price}}</span>
				<span class="pullright glyphicon glyphicon-remove-circle" @click=""></span>
			</ul>
		</div>
		<div class="input-group">
	  		<div class="form-control">
				<div class="checkbox">
					<label><input type="checkbox">全选</label>
				</div>
				<span class="pull-right"><strong>总计：{{total}}</strong></span>
	  		</div>
            <span class="input-group-btn">
            	<button class="btn btn-danger">结算 <span class="glyphicon glyphicon-circle-arrow-right"></span></button>
            </span>
	    </div>
  </div>
</template>

<script>
export default {
	
}
</script>

<style scoped>
	.cart .input-group {
		border-top: 1px solid #ebccd1;
	}
	
	.cart .input-group-btn:last-child>.btn {
		right: -2px;
		border-top-right-radius: 0;
	}
</style>

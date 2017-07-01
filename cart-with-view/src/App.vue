<template>
  <div id="app">
	<navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import navbar from './components/Nav'

export default {
	components: {
		navbar
	}
}
</script>

<style>

</style>

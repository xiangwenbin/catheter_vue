<template>
		<ul class="bt-bar">
				<li>
					<router-link to="/dynamic"><a><i class="i-ft-dynamic"></i>动态<i class="badge"></i></a></router-link>
				</li>
				<li>
					<router-link to="/patientList"><a><i class="i-ft-patient"></i>病人列表</a></router-link>
				</li>
				<li>
					<router-link to="/history"><a><i class="i-ft-hisrecord"></i>历史纪录 </a></router-link>
				</li>
				<li>
					<router-link to="/awaitDeal"><a><i class="i-ft-upcoming"></i>待办<i class="badge-text">3</i></a></router-link>
				</li>
			</ul>
</template>

<script>

export default {
  name: 'my-footer',
  data () {
    return {
      msg: ''
    }
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
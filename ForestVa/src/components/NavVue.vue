<template>
	<div class="slim-header">
		<div class="container">
			<div class="slim-header-left">
				<h2 class="slim-logo"><router-link to="/app">ForestVa<span>.</span></router-link></h2>
			</div>
			<div class="options">
				<div class=" slim-header-right">
					<div class="dropdown dropdown-c">
						<a href="#" class="logged-user" data-toggle="dropdown">
							<img src="http://via.placeholder.com/500x500" alt="">
							<span>{{ }}</span>
							<i class="fa fa-angle-down"></i>
						</a>
						<div class="dropdown-menu dropdown-menu-right">
							
							<nav class="nav">
								<button @click="openProfile"><i class="icon ion-person"></i>{{
									$t('nav_profile.view_profile') }}</button>
								<button @click="closeSession"><i class="icon ion-forward"></i>{{
									$t('nav_profile.close_session') }}</button>
							</nav>
						</div>
						
					</div>
				</div>
				<LanguageSelector class="language-selector"></LanguageSelector>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router';
import useEvents from '../common/utils/useEvents';
import VProfile from '../modules/user/views/modals/VProfile.vue';
import LanguageSelector from './LanguageSelector.vue';
const router = useRouter();
function closeSession() {
	sessionStorage.removeItem('jwt');

	router.push('/');
}
function openProfile() {
	useEvents().dispatch('showDialog', { component: VProfile, header: 'Profile' });
}
</script>

<style scoped>
button {
	cursor: pointer;
	text-align: start;
	outline: none;
	border: none;
	margin: 5px;
}

.options{
	width: 20%;
	display: flex;
	justify-content: space-between;
}
</style>
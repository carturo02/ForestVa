<template>
	<div class="slim-header">
	      <div class="container">
	        <div class="slim-header-left">
	          <h2 class="slim-logo"><a href="index.html">ForestVa<span>.</span></a></h2>
	        </div><!-- slim-header-left -->
	        <div class="slim-header-right">
	          <div class="dropdown dropdown-a">
	            <div class="dropdown-menu">
	              <div class="dropdown-menu-header">
	                <h6 class="dropdown-menu-title">Activity Logs</h6>
	                <div>
	                  <a href="">Filter List</a>
	                  <a href="">Settings</a>
	                </div>
	              </div><!-- dropdown-menu-header -->
	              <div class="dropdown-activity-list">
	                <div class="activity-label">Today, December 13, 2017</div>
	                <div class="activity-item">
	                  <div class="row no-gutters">
	                    <div class="col-2 tx-right">10:15am</div>
	                    <div class="col-2 tx-center"><span class="square-10 bg-success"></span></div>
	                    <div class="col-8">Purchased christmas sale cloud storage</div>
	                  </div><!-- row -->
	                </div><!-- activity-item -->
	                <div class="activity-item">
	                  <div class="row no-gutters">
	                    <div class="col-2 tx-right">9:48am</div>
	                    <div class="col-2 tx-center"><span class="square-10 bg-danger"></span></div>
	                    <div class="col-8">Login failure</div>
	                  </div><!-- row -->
	                </div><!-- activity-item -->
	                <div class="activity-item">
	                  <div class="row no-gutters">
	                    <div class="col-2 tx-right">7:29am</div>
	                    <div class="col-2 tx-center"><span class="square-10 bg-warning"></span></div>
	                    <div class="col-8">(D:) Storage almost full</div>
	                  </div><!-- row -->
	                </div><!-- activity-item -->
	                <div class="activity-item">
	                  <div class="row no-gutters">
	                    <div class="col-2 tx-right">3:21am</div>
	                    <div class="col-2 tx-center"><span class="square-10 bg-success"></span></div>
	                    <div class="col-8">1 item sold <strong>Christmas bundle</strong></div>
	                  </div><!-- row -->
	                </div><!-- activity-item -->
	                <div class="activity-label">Yesterday, December 12, 2017</div>
	                <div class="activity-item">
	                  <div class="row no-gutters">
	                    <div class="col-2 tx-right">6:57am</div>
	                    <div class="col-2 tx-center"><span class="square-10 bg-success"></span></div>
	                    <div class="col-8">Earn new badge <strong>Elite Author</strong></div>
	                  </div><!-- row -->
	                </div><!-- activity-item -->
	              </div><!-- dropdown-activity-list -->
	              <div class="dropdown-list-footer">
	                <a href="page-activity.html"><i class="fa fa-angle-down"></i> Show All Activities</a>
	              </div>
	            </div><!-- dropdown-menu-right -->
	          </div><!-- dropdown -->
	          <div class="dropdown dropdown-b">
	            <div class="dropdown-menu">
	              <div class="dropdown-menu-header">
	                <h6 class="dropdown-menu-title">Notifications</h6>
	                <div>
	                  <a href="">Mark All as Read</a>
	                  <a href="">Settings</a>
	                </div>
	              </div><!-- dropdown-menu-header -->
	              <div class="dropdown-list">
	                <!-- loop starts here -->
	                <a href="" class="dropdown-link">
	                  <div class="media">
	                    <img src="http://via.placeholder.com/500x500" alt="">
	                    <div class="media-body">
	                      <p><strong>Suzzeth Bungaos</strong> tagged you and 18 others in a post.</p>
	                      <span>October 03, 2017 8:45am</span>
	                    </div>
	                  </div><!-- media -->
	                </a>
	                <!-- loop ends here -->
	                <a href="" class="dropdown-link">
	                  <div class="media">
	                    <img src="http://via.placeholder.com/500x500" alt="">
	                    <div class="media-body">
	                      <p><strong>Mellisa Brown</strong> appreciated your work <strong>The Social Network</strong></p>
	                      <span>October 02, 2017 12:44am</span>
	                    </div>
	                  </div><!-- media -->
	                </a>
	                <a href="" class="dropdown-link read">
	                  <div class="media">
	                    <img src="http://via.placeholder.com/500x500" alt="">
	                    <div class="media-body">
	                      <p>20+ new items added are for sale in your <strong>Sale Group</strong></p>
	                      <span>October 01, 2017 10:20pm</span>
	                    </div>
	                  </div><!-- media -->
	                </a>
	                <a href="" class="dropdown-link read">
	                  <div class="media">
	                    <img src="http://via.placeholder.com/500x500" alt="">
	                    <div class="media-body">
	                      <p><strong>Julius Erving</strong> wants to connect with you on your conversation with <strong>Ronnie Mara</strong></p>
	                      <span>October 01, 2017 6:08pm</span>
	                    </div>
	                  </div><!-- media -->
	                </a>
	                <div class="dropdown-list-footer">
	                  <a href="page-notifications.html"><i class="fa fa-angle-down"></i> Show All Notifications</a>
	                </div>
	              </div><!-- dropdown-list -->
	            </div><!-- dropdown-menu-right -->
	          </div><!-- dropdown -->
	          <div class="dropdown dropdown-c">
	            <a href="#" class="logged-user" data-toggle="dropdown">
	              <img src="http://via.placeholder.com/500x500" alt="">
	              <span>{{  }}</span>
	              <i class="fa fa-angle-down"></i>
	            </a>
				<div class="dropdown-menu dropdown-menu-right">
    <nav class="nav">
      <button @click="openProfile"><i class="icon ion-person"></i> Ver Perfil</button>
      <button @click="closeSession"><i class="icon ion-forward"></i> Cerrar Sesión</button>
    </nav>
  </div>
 

	          </div><!-- dropdown -->
	        </div><!-- header-right -->
	      </div><!-- container -->
	    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import useEvents from '../common/utils/useEvents.ts';
import VProfile from '../modules/user/views/modals/VProfile.vue';

const router = useRouter();
function closeSession(){
	sessionStorage.removeItem('jwt');
	
	router.push('/');
}
function openProfile(){
	useEvents().dispatch('showDialog', { component: VProfile, header: 'Profile'});
}
</script>

<style scoped>
button{
	cursor: pointer;
	text-align: start;
	outline: none;
	border: none;
	margin: 5px;
}
</style>
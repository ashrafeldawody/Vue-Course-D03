<template>
  <div class="container">

    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>
<script>
import Navbar from './components/NavbarComponent.vue'
export default {
    components:{
        Navbar
    }
}
</script>
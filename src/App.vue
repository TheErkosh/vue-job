<script setup>
 import Navbar from '@/components/AppNavbar.vue';
 import { RouterView} from 'vue-router';
//  import Hero from '@/components/AppHero.vue';
//  import HomeCards from '@/components/AppHomeCards.vue';
//  import JobListings from '@/components/AppJobListings.vue';

 

 
</script>

<template>
  <Navbar />
  <RouterView />
  <!-- <Hero />
  <HomeCards />
  <JobListings :limit="3" :showButton="true"/> -->
</template>
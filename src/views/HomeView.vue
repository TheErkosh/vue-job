<script setup>
    import Hero from '@/components/AppHero.vue';
    import HomeCards from '@/components/AppHomeCards.vue';
    import JobListings from '@/components/AppJobListings.vue';

</script>


<template>
    <Hero />
    <HomeCards />
    <JobListings :limit="3" :showButton="true"/>

</template>
<script setup>
// import Home from './views/home.vue';
// import MoreBlogs from './views/blogsNews.vue'
// import Calendary from './views/Calendary.vue';
import Nav from './components/included/Nav.vue';
import Footer from './components/included/Footer.vue';
</script>

<template>
    <Nav/>
    <router-view></router-view>
    <Footer/>
</template>


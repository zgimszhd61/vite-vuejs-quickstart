<!-- App.vue -->
<template>
  <div id="app">
    <TopBar />
    <SideMenu />
    <MainContent />
    <router-view></router-view>
  </div>
</template>

<script>
import TopBar from './components/TopBar.vue';
import SideMenu from './components/SideMenu.vue';
import MainContent from './components/MainContent.vue';

export default {
  name: 'App',
  components: {
    TopBar,
    SideMenu,
    MainContent
  }
}
</script>

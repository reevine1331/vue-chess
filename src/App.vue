<template>
  <div id="app">
    <Header v-if="$route.path !== '/top'"></Header>
    <router-view />
  </div>
</template>

<script>

import Header from './components/layouts/Header'

export default {
  components: {
    Header
  }
}
</script>
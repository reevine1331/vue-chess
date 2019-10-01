<template>
  <div class="header">
    <div class="header_title" v-on:click="transitionToTop">
      Chess Project
    </div>
  </div>
</template>

<script>

export default {
  methods: {
    transitionToTop() {
      if(confirm('トップ画面に戻りますか？')) {
        this.$router.push({path: '/top'});
      }
    }
  }
}
</script>
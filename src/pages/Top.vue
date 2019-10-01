<template>
  <div class="top">
    <Icon />
    <div class="top_label">
      <div class="top_title">Chess Project</div>
      <div class="top_tap" v-on:click="transitionToPlay">tap here</div>
    </div>
  </div>
</template>

<script>
import Icon from './../components/Icon';

export default {
  components: {
    Icon
  },
  methods: {
    transitionToPlay() {
      this.$router.push({path: '/play'});
    }
  }
}
</script>
<template>
  <div class="icon">
    <div v-for="(x, index) in 8" :key='index'>
      <div v-for="(y, index) in 8" :key='index'>
        <div
          v-bind:class="(x + y) % 2 == 0 ? 'icon_square-orange' : 'icon_square-white'"
        >
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default {

}
</script>
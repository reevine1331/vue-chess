<template>
  <div class="piece" @click.stop="setPiece" v-bind:class="selected ? 'selected': ''" >
    <div class="night"></div>
  </div>
</template>

<script>

export default {
  props: ['selected'],
  data() {
    return {
      move: [
        [1,2],[1,-2],[2,-1],[2,1],[-2,1],[-2,1],[-1,2],[-1, -2]
      ],
      position: ['8-1', '8-8']
    }
  },
  methods: {
    setPiece(e) {
      this.$emit('select', e.target.parentNode.parentNode.id, 'Luke')
    }
  }
}
</script>
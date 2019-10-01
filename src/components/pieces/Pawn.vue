<template>
  <div class="piece" @click.stop="setPiece" v-bind:class="selected ? 'selected': ''" >
    <div class="pawn"></div>
  </div>
</template>

<script>

export default {
  props: ['selected'],
  data() {
    return {
      move: [[1,0]],
      position: ['7-1', '7-2', '7-3', '7-4', '7-5', '7-6', '7-7', '7-8']
    }
  },
  methods: {
    setPiece(e) {
      this.$emit('select', e.target.parentNode.parentNode.id, 'Pawn')
    }
  }
}
</script>
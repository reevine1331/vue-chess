<template>
  <div class="piece" @click.stop="setPiece" v-bind:class="selected ? 'selected': ''" >
    <div class="luke"></div>
  </div>
</template>

<script>

export default {
  props: ['selected'],
  data() {
    return {
      move: [
        [1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],
        [0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],
        [-1,0],[-2,0],[-3,0],[-4,0],[-5,0],[-6,0],[-7,0],
        [0,-1],[0,-2],[0,-3],[0,-4],[0,-5],[0,-6],[0,-7]
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
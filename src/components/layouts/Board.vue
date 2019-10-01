<template>
  <div class="board">
    <div v-for="(x, index) in 8" :key='index'>
      <div v-for="(y, index) in 8" :key='index'>
        <div
        :class="[(x + y) % 2 == 0 ? 'board_square-white' : 'board_square-orange', accessible.indexOf(`${x}-${y}`) >= 0 ? '' : '']"
        :id='`${x}-${y}`'
        v-on:click="selectPanel"
        >
        <Accessible v-if="accessible.indexOf(`${x}-${y}`) >= 0" />
          <transition>
            <Pawn
            v-if="pieces.some(piece => piece.position === `${x}-${y}` && piece.piece === 'Pawn')"
            :selected = "selected.position === `${x}-${y}` ? true: false"
            @select="selectPiece"
            />
          </transition>
          <transition>
            <Luke
            v-if="pieces.some(piece => piece.position === `${x}-${y}` && piece.piece === 'Luke')"
            :selected = "selected.position === `${x}-${y}` ? true: false"
            @select="selectPiece"
            />
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';

import Accessible from './Accessible';

import Pawn from './../pieces/Pawn';
import Luke from './../pieces/Luke';

export default {
  components: {
    Pawn,
    Luke,
    Accessible
  },
  data() {
    return {
      pieces: [],
      selected: {},
      moves: {
        Pawn: Pawn.data().move,
        Luke: Luke.data().move,
      },
      accessible:[]
    }
  },
  mounted() {
    let pieces = []

    _.map(Pawn.data().position, function(position, index) {
      let pawn = {
        piece: 'Pawn',
        id: index,
        position: position
      }
      pieces.push(pawn)
    })

    _.map(Luke.data().position, function(position, index) {
      let luke = {
        piece: 'Luke',
        id: index,
        position: position
      }
      pieces.push(luke)
    })

    this.pieces = pieces;
  },
  methods: {
    selectPiece(position, piece) {
      this.selected = _.filter(this.pieces, { position: position })[0];
      this.getAccessiblePanels();
    },
    selectPanel(element) {
      if(this.selected && this.accessible.indexOf(element.target.id) >= 0) {
        this.movePiece(element.target.id)
      }
      this.emptyState();
    },
    movePiece(newPosition) {
      let selected = this.selected;
      let movingPiece = '';
      _.map(this.pieces, function(piece, index) {
        if(piece.position === selected.position) {
          movingPiece = index;
        }
      })
      this.pieces[movingPiece].position = newPosition
    },
    getAccessiblePanels() {
      const currentPosition = this.selected.position.split('-');
      let accessible = [];
      let piecesPositions = [];
      _.map(this.pieces, function(piece, index) {
        piecesPositions.push(piece.position);
      });
      let checkExistingPieces = this.checkExistingPieces;

      _.map(this.moves[this.selected.piece], function(move, index) {
        const coordinateY = parseInt(currentPosition[0]) - parseInt(move[0])
        const coordinateX = parseInt(currentPosition[1]) + parseInt(move[1])
        const accessibleCoordinate = coordinateY + '-' + coordinateX;
        if(!checkExistingPieces(coordinateX, coordinateY, piecesPositions, move)) return;
        accessible.push(accessibleCoordinate);
      })
      this.accessible = accessible
    },
    checkExistingPieces(x, y, positions, move) {
      if(positions.indexOf(y + '-' + x) >= 0) {
        return false;
      }

      return true;
    },
    emptyState() {
      this.selected = {}
      this.accessible = []
    },
  }
}
</script>
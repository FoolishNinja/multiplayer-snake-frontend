<template>
  <v-container class="d-flex justify-center" fluid>
    <canvas id="snake-game-canvas" :width="game.width" :height="game.height"></canvas>
  </v-container>
</template>
<script src="./GameWindow.ts" lang="ts"></script>
<style src="./GameWindow.scss" lang="scss" scoped />
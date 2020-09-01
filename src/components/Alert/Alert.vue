<template>
  <div>
    <v-alert type="success" v-if="showSuccess">{{successMessage}}</v-alert>
    <v-alert type="error" v-if="showError">{{errorMessage}}</v-alert>
  </div>
</template>
<script src="./Alert.ts" lang="ts"></script>
<template>
  <v-form class="form">
    <Alert ref="alert"></Alert>
    <h3>Login</h3>
    <v-text-field label="username" v-model="username" type="text"></v-text-field>
    <v-text-field label="password" v-model="password" type="password"></v-text-field>
    <v-btn @click="login">Login</v-btn>
    <v-btn @click="redirectToRegister" class="ml-3" light>Don't have an account yet?</v-btn>
  </v-form>
</template>
<script src="./LoginForm.ts" lang="ts"></script>
<style src="./LoginForm.scss" lang="scss" scoped/>
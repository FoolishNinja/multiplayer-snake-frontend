<template>
  <v-form class="form">
    <Alert ref="alert"></Alert>
    <h3>Register</h3>
    <v-text-field label="email" v-model="email" type="email"></v-text-field>
    <v-text-field label="username" v-model="username" type="text"></v-text-field>
    <v-text-field label="password" v-model="password" type="password"></v-text-field>
    <v-btn @click="register">Register</v-btn>
        <v-btn @click="redirectToLogin" class="ml-3" light>Already have an account?</v-btn>
  </v-form>
</template>
<script src="./RegisterForm.ts" lang="ts"></script>
<style src="./RegisterForm.scss" lang="scss" scoped/>
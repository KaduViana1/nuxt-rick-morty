<template>
  <div class="modalContainer">
    <SignUpModal
      v-if="displayInputs === 'Register'"
      @changeForm="displayInputs = 'Login'"
      @closeModal="$emit('closeModal')"
    />
    <SignInModal
      v-if="displayInputs === 'Login'"
      @changeForm="displayInputs = 'Register'"
      @closeModal="$emit('closeModal')"
    />
  </div>
</template>

<script setup lang="ts">
const displayInputs = ref<'Register' | 'Login'>('Login');
</script>

<style scoped>
.modalContainer {
  background-color: hsl(0, 0%, 0%, 0.8);
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-inline: 0.8rem;
}
</style>

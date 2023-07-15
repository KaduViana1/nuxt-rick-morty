<template>
  <div class="modalContainer">
    <div
      class="w-[400px] h-[200px] bg-primary border-2 border-white text-white flex flex-col rounded-lg justify-center items-center text-center space-y-2"
    >
      <span class="text-lg font-bold"
        >Are you sure you want to delete this comment?</span
      >
      <span class="text-lg font-bold"
        >If you confirm this can't be undone!</span
      >
      <div class="space-x-4">
        <button
          @click="() => emits('confirm')"
          class="p-2 bg-red-600 rounded-md border-2 border-white font-bold text-lg"
        >
          Delete
        </button>
        <button
          class="p-2 rounded-md border-2 border-white font-bold text-lg"
          @click="() => (deleteModalIsOpen = false)"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emits = defineEmits(['confirm']);
const deleteModalIsOpen = useDeleteModalIsOpen();
</script>

<style scoped>
.modalContainer {
  background-color: hsl(0, 0%, 0%, 0.8);
  width: 100%;
  height: 100lvh;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  z-index: 10;
}
</style>

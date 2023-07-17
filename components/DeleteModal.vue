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
          @click="onCommentDelete"
          class="p-2 bg-red-600 rounded-md border-2 border-white font-bold text-lg"
        >
          Delete
        </button>
        <button
          class="p-2 rounded-md border-2 border-white font-bold text-lg"
          @click="handleCancel"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const deleteOptions = useDeleteComment();

const handleCancel = () => {
  deleteOptions.value.commentId = '';
  deleteOptions.value.modalOpen = false;
};

const onCommentDelete = async () => {
  try {
    await useFetch(`/api/comment`, {
      method: 'DELETE',
      query: { commentId: deleteOptions.value.commentId },
    });
  } catch (err) {
    console.log(err);
  } finally {
    deleteOptions.value.commentId = '';
    deleteOptions.value.modalOpen = false;
    deleteOptions.value.refetch = true;
  }
};
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

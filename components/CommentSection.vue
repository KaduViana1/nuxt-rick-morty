<template>
  <div
    class="mx-auto mt-5 w-2/5 border-2 border-white rounded-lg bg-primary flex flex-col p-4 items-center"
  >
    <span class="text-3xl self-start font-semibold">Commments:</span>
    <Comment
      v-for="comment in comments"
      :key="comment.id"
      class="border-2 my-2 border-white rounded-lg w-full flex flex-col justify-start"
      :comment="comment"
    >
    </Comment>
  </div>
</template>

<script setup lang="ts">
type CommentResponse = {
  id: string;
  content: string;
  createdAt: Date;
  episde: string;
  authorId: string;
};

const { id } = defineProps(['id']);
const { data: comments } = await useFetch<CommentResponse[]>(
  `/api/comment/${id}`
);
</script>

<style scoped></style>

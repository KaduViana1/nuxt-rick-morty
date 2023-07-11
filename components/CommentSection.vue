<template>
  <div
    class="mx-auto mt-5 w-2/5 border-2 border-white rounded-lg bg-primary flex flex-col p-4 items-center"
  >
    <span class="text-3xl self-start font-semibold">Commments:</span>
    <div
      v-for="comment in comments"
      :key="comment.id"
      class="border-2 my-2 border-white rounded-lg w-full flex flex-col justify-start"
    >
      <span>{{ getAuthorName(comment.authorId) }}</span>
      <p>{{ comment.content }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { id } = defineProps(['id']);
const { data: comments } = useFetch(`/api/comment/${id}`, { key: id });

const getAuthorName = (authorId: string) => {
  const { data: userName } = useFetch<string>(`/api/user/${authorId}`, {
    key: authorId,
  });

  return userName.value;
};
</script>

<style scoped></style>

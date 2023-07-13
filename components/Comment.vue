<template>
  <div
    class="border-2 my-2 border-white rounded-lg w-full flex flex-col justify-start"
  >
    <span>{{ author }}:</span>
    <p>{{ comment?.content }}</p>
    {{ dateFormatter.format(created) }}
  </div>
</template>

<script setup lang="ts">
const { comment } = defineProps(['comment']);
const author = ref('');
const dateFormatter = new Intl.DateTimeFormat('en-us', {
  dateStyle: 'short',
});
const created = new Date(comment.createdAt);

const getAuthorName = async (authorId: string) => {
  type UserName = {
    name: string;
  };

  try {
    const { data: userName } = await useFetch<UserName>(
      `/api/user/${authorId}`,
      {
        key: authorId,
      }
    );
    if (userName.value?.name) {
      author.value = userName.value?.name;
    }
  } catch (err) {
    return err;
  }
};
getAuthorName(comment.authorId);
</script>

<style scoped></style>

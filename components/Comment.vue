<template>
  <div
    class="border-2 my-2 border-white rounded-lg w-full flex flex-col justify-start p-2"
  >
    <div class="w-full flex justify-between">
      <span class="underline text-xl font-bold">{{ author }}:</span>
      <div>
        <Icon name="heroicons-solid:hand-thumb-up" size="16" />
        {{ likesCount }}
      </div>
    </div>
    <p class="text-lg">{{ comment?.content }}</p>
    <div class="self-end flex space-x-4 items-end">
      <button v-if="userId === comment.authorId" @click="handleDelete">
        <Icon name="fa6-solid:trash-can" size="19" color="#ff4d4d" />
      </button>
      <button @click="unLike" v-if="userId && isLiked">
        <Icon name="heroicons-solid:hand-thumb-up" size="20" color="#a3e635" />
      </button>
      <button @click="like" v-if="userId && !isLiked">
        <Icon
          name="heroicons-outline:hand-thumb-up"
          size="20"
          color="#a3e635"
        />
      </button>

      <span>
        {{ dateFormatter.format(created) }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
const { comment } = defineProps(['comment']);
const emits = defineEmits(['like', 'unlike']);
const author = ref('');
const dateFormatter = new Intl.DateTimeFormat('en-us', {
  dateStyle: 'short',
});
const created = new Date(comment.createdAt);
const userId = useUserId();
const deleteOptions = useDeleteComment();
const isLiked = ref();
const likesCount = ref();

const getAuthorName = async (authorId: string) => {
  try {
    const { data: userName } = await useFetch<{ name: string }>(
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

const handleDelete = () => {
  deleteOptions.value.commentId = comment.id;
  deleteOptions.value.modalOpen = true;
};

const postIsLiked = async () => {
  const { data } = await useFetch<boolean>('/api/likes', {
    query: { userId, commentId: comment.id },
  });
  isLiked.value = data.value;
};

const getLikesCount = async () => {
  const { data } = await useFetch<number>(`/api/likes/${comment.id}`);
  likesCount.value = data.value;
};

const like = () => {
  emits('like');
  isLiked.value = true;
  likesCount.value++;
};

const unLike = () => {
  emits('unlike');
  isLiked.value = false;
  likesCount.value--;
};

getLikesCount();
getAuthorName(comment.authorId);
postIsLiked();
</script>

<style scoped></style>

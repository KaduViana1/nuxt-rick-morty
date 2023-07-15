<template>
  <div
    class="mx-auto mt-5 w-2/5 border-2 border-white rounded-lg bg-primary flex flex-col p-4 items-center"
  >
    <span class="text-3xl self-start"><b>Commments:</b> {{ count }}</span>
    <Comment
      v-for="comment in comments"
      :key="comment.id"
      class="border-2 my-2 border-white rounded-lg w-full flex flex-col justify-start"
      :comment="comment"
      @delete="
        () => {
          onCommentDelete(comment.id);
        }
      "
      @unlike="() => onUnlike(comment.id)"
      @like="() => onLike(comment.id)"
    >
    </Comment>
    <div class="w-full" v-if="userName && userId">
      <form
        class="flex flex-col w-full items-start"
        @submit.prevent="submitComment"
      >
        <label class="text-xl font-semibold mb-1" for="comment"
          >Leave a comment: <i class="text-xs">( max 150 characters )</i></label
        >
        <textarea
          class="text-black w-full resize-none p-1"
          type="text"
          id="comment"
          v-model="inputValue"
          maxlength="150"
          minlength="10"
          rows="5"
        />
        <Button class="self-end mt-3" type="submit">Submit</Button>
      </form>
    </div>
    <div v-else>Please login do make a comment</div>
  </div>
</template>

<script setup lang="ts">
type CommentResponse = {
  data: {
    id: string;
    content: string;
    createdAt: Date;
    episde: string;
    authorId: string;
  }[];
  count: number;
};
const { id } = defineProps(['id']);
const userName = useUserName();
const userId = useUserId();
const inputValue = ref('');
const comments = ref();
const count = ref();
const deleteModalIsOpen = useDeleteModalIsOpen();

const fetchComments = async () => {
  const { data } = await useFetch<CommentResponse>(`/api/comment/${id}`);

  if (data) {
    comments.value = data.value?.data;
    count.value = data.value?.count;
  }
};

const submitComment = async () => {
  if (inputValue.value.length >= 10) {
    await useFetch(`/api/comment`, {
      method: 'POST',
      body: { content: inputValue, episode: id, authorId: userId },
    });

    inputValue.value = '';
    fetchComments();
  }
};

const onCommentDelete = async (id: string) => {
  try {
    await useFetch(`/api/comment`, {
      method: 'DELETE',
      query: { commentId: id },
    });

    fetchComments();
  } catch (err) {
    console.log(err);
  }
};

const onUnlike = async (id: string) => {
  try {
    await useFetch(`/api/likes`, {
      method: 'DELETE',
      query: { commentId: id, userId },
    });
  } catch (err) {
    console.log(err);
  }
};

const onLike = async (id: string) => {
  try {
    await useFetch(`/api/likes`, {
      method: 'POST',
      body: { commentId: id, userId },
    });
  } catch (err) {
    console.log(err);
  }
};

fetchComments();
</script>

<style scoped></style>

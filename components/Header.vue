<template>
  <header class="bg-primary items-center hidden md:flex px-48">
    <img src="../assets/Rick-icon.png" alt="Rick Head" class="h-24" />
    <nav class="w-full">
      <ul class="flex justify-evenly items-center text-white">
        <li>
          <NuxtLink
            class="text-2xl hover:text-lime-400 focus:text-lime-400"
            to="/characters"
            >Characters</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            class="text-2xl hover:text-lime-400 focus:text-lime-400"
            to="/episodes"
            >Episodes</NuxtLink
          >
        </li>
        <li>
          <img
            src="../assets/Rick-And-Morty-Logo.png"
            alt="Rick Morty Logo"
            class="h-32 self-center cursor-pointer"
            @click="
              () => {
                navigateTo('/');
              }
            "
          />
        </li>
        <li>
          <NuxtLink
            class="text-2xl hover:text-lime-400 focus:text-lime-400"
            to="/wallpapers"
            >Wallpapers</NuxtLink
          >
        </li>
        <li>
          <button
            v-if="!userName"
            @click="openModal"
            class="min-w-fit flex items-center text-2xl focus:text-lime-400 hover:text-lime-400"
          >
            Log in
          </button>
          <button
            class="min-w-fit flex items-center text-2xl focus:text-lime-400 hover:text-lime-400"
            @click="logout()"
            v-else
          >
            Log out
          </button>
        </li>
      </ul>
    </nav>
    <img src="../assets/Morty-icon.png" alt="Rick Head" class="h-20" />
  </header>
</template>

<script setup lang="ts">
const emit = defineEmits(['openModal']);
const userName = useUserName();
const userId = useUserId();
const router = useRouter();

const logout = () => {
  userId.value = null;
  userName.value = null;

  router.push('/');
};

const openModal = () => {
  emit('openModal');
};
</script>

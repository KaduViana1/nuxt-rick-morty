<template>
  <header
    class="flex flex-col md:hidden w-full items-center fixed top-0 z-10 justify-start px-3 bg-primary overflow-hidden duration-200 border-b-2 border-white text-white"
    :class="menuIsOpen ? 'h-72 shadow-xl shadow-black' : 'h-20'"
  >
    <div class="flex">
      <button
        @click="() => (menuIsOpen = !menuIsOpen)"
        class="absolute top-7 left-10"
      >
        <Icon name="fa6-solid:bars" size="28" class="active:text-lime-300" />
      </button>
      <img
        src="../assets/Rick-And-Morty-Logo.png"
        alt="Rick Morty Logo"
        class="h-20"
        @click="
          () => {
            navigateTo('/');
          }
        "
      />
      <div class="flex w-20 absolute top-1 right-4">
        <img
          src="../assets/Morty-icon.png"
          alt="Morty Head"
          class="h-10 absolute left-12 top-6"
          @click="() => $router.push('/characters/2')"
        />
        <img
          src="../assets/Rick-icon.png"
          alt="Rick Head"
          class="h-14 left-2 absolute"
          @click="() => $router.push('/characters/1')"
        />
      </div>
    </div>
    <div class="">
      <nav class="text-center">
        <ul>
          <li @click="() => (menuIsOpen = false)" class="font-bold text-2xl">
            <NuxtLink href="/">Home</NuxtLink>
          </li>
          <li @click="() => (menuIsOpen = false)" class="font-bold text-2xl">
            <NuxtLink href="/characters">Characters</NuxtLink>
          </li>
          <li @click="() => (menuIsOpen = false)" class="font-bold text-2xl">
            <NuxtLink href="/episodes">Episodes</NuxtLink>
          </li>
          <li @click="() => (menuIsOpen = false)" class="font-bold text-2xl">
            <NuxtLink href="/wallpapers">Wallpapers</NuxtLink>
          </li>
          <li @click="() => (menuIsOpen = false)" class="font-bold text-2xl">
            <button v-if="!userName" @click="openModal">Log in</button>
            <button @click="logout" v-else>Log out</button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <header class="bg-primary justify-center hidden md:flex w-full px-4">
    <div class="flex items-center w-full max-w-[1400px]">
      <img
        src="../assets/Rick-icon.png"
        alt="Rick Head"
        class="h-16 lg:h-24 cursor-pointer"
        @click="() => $router.push('/characters/1')"
      />
      <nav class="w-full">
        <ul class="flex justify-evenly items-center text-white">
          <li>
            <NuxtLink
              class="text-xl lg:text-2xl hover:text-lime-400 focus:text-lime-400"
              to="/characters"
              >Characters</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              class="text-xl lg:text-2xl hover:text-lime-400 focus:text-lime-400"
              to="/episodes"
              >Episodes</NuxtLink
            >
          </li>
          <li>
            <img
              src="../assets/Rick-And-Morty-Logo.png"
              alt="Rick Morty Logo"
              class="h-20 lg:h-32 self-center cursor-pointer"
              @click="
                () => {
                  navigateTo('/');
                }
              "
            />
          </li>
          <li>
            <NuxtLink
              class="text-xl lg:text-2xl hover:text-lime-400 focus:text-lime-400"
              to="/wallpapers"
              >Wallpapers</NuxtLink
            >
          </li>
          <li>
            <button
              v-if="!userName"
              @click="openModal"
              class="min-w-fit flex items-center text-xl lg:text-2xl focus:text-lime-400 hover:text-lime-400"
            >
              Log in
            </button>
            <button
              class="min-w-fit flex items-center text-xl lg:text-2xl focus:text-lime-400 hover:text-lime-400"
              @click="logout"
              v-else
            >
              Log out
            </button>
          </li>
        </ul>
      </nav>
      <img
        @click="() => $router.push('/characters/2')"
        src="../assets/Morty-icon.png"
        alt="Rick's Head"
        class="h-14 lg:h-20 cursor-pointer"
      />
    </div>
  </header>
</template>

<script setup lang="ts">
const emit = defineEmits(['openModal']);
const userName = useUserName();
const userId = useUserId();
const router = useRouter();
const menuIsOpen = ref(false);

const logout = () => {
  userId.value = null;
  userName.value = null;

  router.push('/');
};

const openModal = () => {
  emit('openModal');
};
</script>

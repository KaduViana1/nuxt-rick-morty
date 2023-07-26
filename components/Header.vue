<template>
  <header
    class="flex md:hidden w-full items-center justify-center px-3 bg-primary"
  >
    <button class="absolute left-5">
      <Icon name="fa6-solid:bars" size="28" class="active:text-lime-300" />
    </button>
    <button v-if="!userName" @click="openModal" class="absolute left-16">
      <Icon
        name="heroicons:arrow-left-on-rectangle-20-solid"
        size="30"
        class="active:text-lime-300"
      />
    </button>
    <button v-else @click="logout" class="absolute left-16">
      <Icon
        name="heroicons:arrow-right-on-rectangle-20-solid"
        size="30"
        class="active:text-lime-300"
      />
    </button>

    <img
      src="../assets/Rick-And-Morty-Logo.png"
      alt="Rick Morty Logo"
      class="h-20 self-center"
      @click="
        () => {
          navigateTo('/');
        }
      "
    />
    <div class="flex w-20 absolute top-1 right-4">
      <img
        src="../assets/Morty-icon.png"
        alt="Rick Head"
        class="h-12 absolute left-11 top-6"
        @click="() => $router.push('/characters/2')"
      />
      <img
        src="../assets/Rick-icon.png"
        alt="Rick Head"
        class="h-16 absolute"
        @click="() => $router.push('/characters/1')"
      />
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

const logout = () => {
  userId.value = null;
  userName.value = null;

  router.push('/');
};

const openModal = () => {
  emit('openModal');
};
</script>

<template>
  <header class="bg-headerColor items-center flex px-48">
    <img src="/assets/Rick-icon.png" alt="Rick Head" class="h-24" />
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
            src="/assets/Rick-And-Morty-Logo.png"
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
            to="/locations"
            >Locations</NuxtLink
          >
        </li>
        <li>
          <button
            class="text-white min-w-fit flex items-center text-2xl focus:text-lime-400 hover:text-lime-400"
          >
            Log in
            <img class="h-12 ml-1" src="/assets/portal.gif" alt="Portal" />
          </button>
        </li>
      </ul>
    </nav>
    <img src="/assets/Morty-icon.png" alt="Rick Head" class="h-20" />
  </header>
</template>

<script setup></script>

<template>
  <div class="text-white">
    <Header />
    <div class="py-8 bg-[url(/assets/background.jpg)] pageContainer">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script></script>

<style scoped>
.pageContainer {
  min-height: calc(100vh - 168px);
}
</style>

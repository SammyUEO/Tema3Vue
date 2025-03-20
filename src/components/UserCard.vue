<template>
  <div class="card">
    <img
      :src="user.image"
      alt="User Image"
      class="rounded-full w-24 h-24 mx-auto"
    />
    <h2 class="text-center">{{ user.name }}</h2>
    <p class="text-center">{{ user.role }}</p>
    <div class="flex justify-center space-x-4">
      <a :href="user.social.facebook" class="text-blue-600"
        ><i class="bi bi-facebook"></i
      ></a>
      <a :href="user.social.twitter" class="text-blue-400"
        ><i class="bi bi-twitter"></i
      ></a>
      <a :href="user.social.pinterest" class="text-red-600"
        ><i class="bi bi-pinterest"></i
      ></a>
      <a :href="user.social.instagram" class="text-pink-600"
        ><i class="bi bi-instagram"></i
      ></a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: Object,
  },
};
</script>

<style scoped>
.card {
  @apply bg-white p-4 rounded-lg shadow-md;
}
</style>

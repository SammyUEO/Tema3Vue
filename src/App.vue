<template>
  <div class="container mx-auto p-4">
    <input
      type="text"
      v-model="searchQuery"
      placeholder="Search by Name"
      class="border p-2 rounded w-full mb-4"
    />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <UserCard v-for="user in filteredUsers" :key="user.name" :user="user" />
    </div>
  </div>
</template>

<script>
import { useUserStore } from './stores/userStore';
import UserCard from './components/UserCard.vue';
import { computed } from 'vue';

export default {
  components: {
    UserCard,
  },
  setup() {
    const userStore = useUserStore();
    const searchQuery = computed({
      get: () => userStore.searchQuery,
      set: (value) => userStore.setSearchQuery(value),
    });
    const filteredUsers = computed(() => userStore.filteredUsers);

    return {
      searchQuery,
      filteredUsers,
    };
  },
};
</script>

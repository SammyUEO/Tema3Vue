import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [
      { 
        name: 'Duran Clayton', 
        role: 'UI/UX Designer', 
        image: '/src/assets/images/user1.jpg', 
        social: { 
          facebook: '#', 
          twitter: '#', 
          pinterest: '#', 
          instagram: '#' 
        } 
      },
      { 
        name: 'Alex Johnson', 
        role: 'Frontend Developer', 
        image: '/src/assets/images/user2.jpg', 
        social: { 
          facebook: '#', 
          twitter: '#', 
          pinterest: '#', 
          instagram: '#' 
        } 
      },
      { 
        name: 'Maria Garcia', 
        role: 'Backend Developer', 
        image: '/src/assets/images/user3.jpg', 
        social: { 
          facebook: '#', 
          twitter: '#', 
          pinterest: '#', 
          instagram: '#' 
        } 
      },
      { 
        name: 'James Smith', 
        role: 'Project Manager', 
        image: '/src/assets/images/user4.jpg', 
        social: { 
          facebook: '#', 
          twitter: '#', 
          pinterest: '#', 
          instagram: '#' 
        } 
      },
      { 
        name: 'Linda Brown', 
        role: 'QA Engineer', 
        image: '/src/assets/images/user5.jpg', 
        social: { 
          facebook: '#', 
          twitter: '#', 
          pinterest: '#', 
          instagram: '#' 
        } 
      },
      { 
        name: 'Michael Davis', 
        role: 'DevOps Engineer', 
        image: '/src/assets/images/user6.jpg', 
        social: { 
          facebook: '#', 
          twitter: '#', 
          pinterest: '#', 
          instagram: '#' 
        } 
      },
      { 
        name: 'Sarah Wilson', 
        role: 'Product Owner', 
        image: '/src/assets/images/user7.jpg', 
        social: { 
          facebook: '#', 
          twitter: '#', 
          pinterest: '#', 
          instagram: '#' 
        } 
      },
      { 
        name: 'David Martinez', 
        role: 'Scrum Master', 
        image: '/src/assets/images/user8.jpg', 
        social: { 
          facebook: '#', 
          twitter: '#', 
          pinterest: '#', 
          instagram: '#' 
        } 
      }
    ],
    searchQuery: ''
  }),
  getters: {
    filteredUsers: (state) => {
      return state.users.filter(user => user.name.toLowerCase().includes(state.searchQuery.toLowerCase()))
    }
  },
  actions: {
    setSearchQuery(query) {
      this.searchQuery = query
    }
  }
})
<template>
    <div class="all-contacts">
      <contact-list @editContact="editContact"></contact-list>
    </div>
  </template>
  
  <script>
  import ContactList from '../components/ContactList.vue'
  
  export default {
    components: {
      ContactList,
    },
    methods: {
      editContact(contact) {
        this.$router.push({ path: '/add', query: { contact: JSON.stringify(contact) } })
      },
    },
  }
  </script>
  
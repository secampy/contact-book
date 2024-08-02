<template>
    <div>
      <div class="grid">
          <h2>All Contacts</h2>
      </div>
    
      <ul>
        <contact-item
          v-for="contact in sortedContacts"
          :key="contact.email"
          :contact="contact"
          @editContact="editContact"
          @deleteContact="deleteContact"
        ></contact-item>
      </ul>
    </div>
  </template>
  
  <script>
  import ContactItem from './ContactItem.vue'
  
  export default {
    components: {
      ContactItem,
    },
    data() {
      return {
        contacts: JSON.parse(localStorage.getItem('contacts') || '[]'),
        sortAsc: true,
      }
    },
    computed: {
      sortedContacts() {
        return [...this.contacts].sort((a, b) => {
          const nameA = a.firstName.toUpperCase()
          const nameB = b.firstName.toUpperCase()
          if (nameA < nameB) return this.sortAsc ? -1 : 1
          if (nameA > nameB) return this.sortAsc ? 1 : -1
          return 0
        })
      },
    },
    methods: {
      sortContacts() {
        this.sortAsc = !this.sortAsc
      },
      editContact(contact) {
        this.$emit('editContact', contact)
      },
      deleteContact(contact) {
        this.contacts = this.contacts.filter(c => c.email !== contact.email)
        localStorage.setItem('contacts', JSON.stringify(this.contacts))
      },
    },
  }
  </script>
  
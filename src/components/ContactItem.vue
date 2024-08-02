<template>
    <li>
     <p>{{ contact.firstName }} {{ contact.lastName }}</p>
    <p>{{ contact.email }}</p>
      <span class="my-buttons">
        <button @click="editContact">Edit</button>
      <button @click="deleteContact">Delete</button>
      </span>
      
    </li>
  </template>
  
  <script>
  export default {
    props: {
      contact: Object,
    },
    methods: {
      editContact() {
        this.$emit('editContact', this.contact)
      },
      deleteContact() {
        this.$emit('deleteContact', this.contact)
      },
    },
  }
  </script>
  
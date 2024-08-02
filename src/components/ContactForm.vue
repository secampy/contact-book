<template>
    <div>
      <h2>{{ isEdit ? 'Edit Contact' : 'Add Contact' }}</h2>
      <form @submit.prevent="handleSubmit">
        <div>
          <label>First Name:</label>
          <input v-model="contact.firstName" required>
        </div>
        <div>
          <label>Last Name:</label>
          <input v-model="contact.lastName" required>
        </div>
        <div>
          <label>Email:</label>
          <input v-model="contact.email" required>
        </div>
        <button type="submit">{{ isEdit ? 'Update' : 'Add' }}</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      contactData: Object,
    },
    data() {
      return {
        contact: this.contactData ? { ...this.contactData } : { firstName: '', lastName: '', email: '' },
        isEdit: !!this.contactData,
      }
    },
    methods: {
      handleSubmit() {
        this.$emit('saveContact', this.contact)
        this.contact = { firstName: '', lastName: '', email: '' }
      },
    },
  }
  </script>
  
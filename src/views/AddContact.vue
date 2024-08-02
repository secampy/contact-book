<template>
    <div class="add-contact">
      <contact-form
        :contactData="contact"
        @saveContact="saveContact"
      ></contact-form>
    </div>
  </template>
  
  <script>
  import ContactForm from '../components/ContactForm.vue'
  
  export default {
    components: {
      ContactForm,
    },
    data() {
      return {
        contact: this.$route.query.contact ? JSON.parse(this.$route.query.contact) : null,
      }
    },
    methods: {
      saveContact(contact) {
        let contacts = JSON.parse(localStorage.getItem('contacts') || '[]')
        if (this.contact) {
          contacts = contacts.map(c => (c.email === this.contact.email ? contact : c))
        } else {
          contacts.push(contact)
        }
        localStorage.setItem('contacts', JSON.stringify(contacts))
        this.$router.push('/')
      },
    },
  }
  </script>
  
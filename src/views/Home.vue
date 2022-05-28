<template>
  <div class="home">
    <Header />
      <Main />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/views/layouts/Header.vue'
import Main from '@/views/pages/Main.vue'
import Footer from '@/views/layouts/Footer.vue'

export default {
  name: 'HomeView',
  components: {
    Header,
    Main,
    Footer,
  }
}
</script>

<template>
  <div>
    <Header />
    <div class="py-5 border-b shadow-md">
      <div class="container">
        <div class="flex justify-between items-center">
          <div>
            <h5 class="font-semibold text-2xl text-primary">Leagues</h5>
            <p class="text-gray-700">List of available leagues and cups</p>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-section">
      <div class="container py-4 md:py-8">
        <div class="table-responsive card-table">
          <table class="table">
            <thead>
              <tr>
                <th>League</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="flex items-center gap-3">
                    <img src="https://media.api-sports.io/football/leagues/61.png" class="h-10" alt="">
                    <div>
                      <p>League 1</p>
                      <p class="text-xs text-muted">League</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="flex items-center gap-3">
                    <img src="https://media.api-sports.io/flags/fr.svg" class="h-10" alt="">
                    <div>
                      <p>France</p>
                      <p class="text-xs text-muted">FR</p>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="flex items-center gap-3">
                    <img src="https://media.api-sports.io/football/leagues/61.png" class="h-10" alt="">
                    <div>
                      <p>League 1</p>
                      <p class="text-xs text-muted">League</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="flex items-center gap-3">
                    <img src="https://media.api-sports.io/flags/fr.svg" class="h-10" alt="">
                    <div>
                      <p>France</p>
                      <p class="text-xs text-muted">FR</p>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/views/layouts/Header.vue'
import Footer from '@/views/layouts/Footer.vue'

export default {
  name: 'LeagueView',
  components: {
    Header,
    Footer,
  }
}
</script>
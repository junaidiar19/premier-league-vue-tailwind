<template>
  <div>
    <Header />
    <div class="py-5 border-b shadow-md">
      <div class="container">
        <div class="flex justify-between items-center">
          <div>
            <h5 class="font-semibold text-2xl text-primary">English Premier League</h5>
            <p class="text-gray-700">Standings</p>
          </div>
          <div>
            <p class="">2021-2022 Season</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container py-12">
        <div class="shadow overflow-scroll md:overflow-hidden border-b border-gray-200 rounded-lg">
          <table class="table">
              <thead>
                <tr>
                    <th scope="col" colspan="2">Club</th>
                    <th scope="col">MP</th>
                    <th scope="col">W</th>
                    <th scope="col">D</th>
                    <th scope="col">L</th>
                    <th scope="col">PTS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td width="10">1</td>
                  <td>
                    <div class="flex items-center gap-3">
                      <img src="https://www.bing.com/th?id=OSB.e_B3KyO1fOfBOhB2AArglA--.png&w=30&h=30&o=6&dpr=1.5&pid=SANGAM" class="h-8" alt="">
                      Man City
                    </div>
                  </td>
                  <td>38</td>
                  <td>29</td>
                  <td>6</td>
                  <td>3</td>
                  <td>93</td>
                </tr>
                <tr>
                  <td width="10">2</td>
                  <td>
                    <div class="flex items-center gap-3">
                      <img src="https://www.bing.com/th?id=OSB.BrzWk6XCEzRCcnDjOjKyAw--.png&w=30&h=30&o=6&dpr=1.5&pid=SANGAM" class="h-8" alt="">
                      Liverpool
                    </div>
                  </td>
                  <td>38</td>
                  <td>29</td>
                  <td>6</td>
                  <td>3</td>
                  <td>93</td>
                </tr>
                <tr>
                  <td width="10">3</td>
                  <td>
                    <div class="flex items-center gap-3">
                      <img src="https://www.bing.com/th?id=OSB.MMknahyXnsFopSAV6wS%7cNQ--.png&w=30&h=30&o=6&dpr=1.5&pid=SANGAM" class="h-8" alt="">
                      Chelsea
                    </div>
                  </td>
                  <td>38</td>
                  <td>29</td>
                  <td>6</td>
                  <td>3</td>
                  <td>93</td>
                </tr>
              </tbody>
          </table>
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
  name: 'StandingView',
  components: {
    Header,
    Footer,
  }
}
</script>
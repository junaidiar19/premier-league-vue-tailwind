<template>
    <section class="h-full md:min-h-screen lg:min-h-screen w-full border-box transition-all duration-500 linear py-12 dark:bg-primary">
    <div style="font-family: 'Poppins', sans-serif">
        <!-- Hero-header-2-3 -->
        <div class="container">
          <div class="row justify-center md:justify-between">
            <div class="lg:col-7 md:col-6 order-2 md:order-1 text-center md:text-left">
              <p class="mb-5 leading-relaxed font-semibold text-sm text-red-600">
                  Premier League
              </p>

              <h1 class="md:text-4xl lg:text-5xl text-primary font-semibold md:leading-tight mb-5 dark:text-slate-100">
                  The Result Standing & Match of English Premier League
              </h1>

              <div class="flex items-center justify-center md:justify-start gap-3">
                <router-link to="/standings" class="md:mr-auto dark:text-slate-300 dark:hover:text-slate-100 font-normal text-gray-600 text-base py-4 px-6 rounded-xl bg-transparent border border-gray-400">
                    <div class="flex items-center">
                        <img style="height: 20px;" class="mr-2" src="img/icon-1.png" alt="" />
                        Standings
                    </div>
                </router-link>
              </div>
            </div>
            <div class="lg:col-5 md:col-6 order-1 md:order-2">
              <img id="hero-header-2-3" src="img/premier-league.png" alt="" />
            </div>
          </div>
        </div>
    </div>
</section>
</template>

<script>
  export default {
    name: 'MainView'
  }
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
    
    .btn-outline-header-2-3 {
        border: 1px solid #707092;
        color: #707092;
    }
    
    .btn-outline-header-2-3:hover {
        border: 1px solid #ffffff;
        color: #ffffff;
    }
    
    .btn-outline-header-2-3:hover div path {
        fill: #ffffff;
    }
    
    .box-shadow-header-2-3:hover {
        --tw-shadow: inset 0 0px 25px 0 rgba(20, 20, 50, 0.7);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
            var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }
    
    .navigation-header-2-3 a:hover,
    
    .active::after {
        font-weight: 600;
    }
    
    .navigation-header-2-3 a:hover {
        color: #e7e7e8;
    }
    
    .navigation-header-2-3 {
        color: #707092;
    }
    
    .bg-screen-header-2-3 {
        background-color: #707092;
    }
    
    .bg-popup-header-2-3 {
        background-color: #141432;
    }
</style>
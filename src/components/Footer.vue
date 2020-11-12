<template>
  <div id="Footer">
    <v-row class="m-0">
      <div style="height:5px; background-color:#004D40; width:100%"></div>
    </v-row>

    <v-row class="m-0 mobile_footer">
      <div class="col-xl-12 text-center d-flex flex-column justify-center align-center ">
        <span class="ml-3"> Connect with us</span>
        <br />
        <a href="" class="btn ">
          <v-icon class="text-primary">mdi-facebook </v-icon> Like us on
          Facebook
        </a>
        <a href="" class="btn  ">
          <v-icon class="text-primary">mdi-instagram </v-icon> Follow us on
          Instagram
        </a>
        <br />
        <a href="" class="btn" style="font-size:15px; ">Home</a>

        <br />
        <a href="" class="btn" style="font-size:15px; ">About us</a>

        <br />
        <a href="" class="btn" style="font-size:15px; ">Contact us</a>
        <br />
        <a href="" class="btn" style="font-size:15px; ">Feedback & inquires</a>
        <v-img src="../assets/cashondelivery.png" width="70%"></v-img>

         <v-toolbar flat>
              <span
                style="font-size:15px; color:#546E7A"
                class="text-dark ml-10 "
              >
                Copyright © Shopikart.lk</span
              >
              <v-spacer></v-spacer>

              <v-avatar class="mr-8">
                <!-- <img src="../assets/exlogo.png" alt="Logo" /> -->
              </v-avatar>
            </v-toolbar>
      </div>
    </v-row>

    <v-row class="m-0 desktop_footer">
      <div class="col-xl-12  ">
        <v-row>
          <div class="col-xl-4  ">
            <span class="ml-3"> Connect with us</span>
            <br />
            <a href="" class="btn d-flex align-center">
              <v-icon class="text-primary">mdi-facebook </v-icon> Like us on
              Facebook
            </a>
            <a href="" class="btn d-flex align-center">
              <v-icon class="text-primary">mdi-instagram </v-icon> Follow us on
              Instagram
            </a>
            <!-- <iframe
              class="fb-page"
              ref=""
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FShopikart-102396888348216%2F&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              style="border:none;overflow:hidden; width:100%; height:500px;"
              scrolling="yes"
              frameborder="0"
            ></iframe> -->
          </div>

          <div class="col-xl-2  ">
            <!-- <span class="ml-3">Learn More</span> -->
            <br />
            <a href="" class="btn" style="font-size:15px; ">Home</a>

            <br />
            <a href="" class="btn" style="font-size:15px; ">About us</a>

            <br />
            <a href="" class="btn" style="font-size:15px; ">Contact us</a>
            <br />
            <a href="" class="btn" style="font-size:15px; "
              >Feedback & inquires</a
            >
          </div>
          <div class="col-xl-2  ">
            <v-img src="../assets/cashondelivery.png" width="90%"></v-img>
          </div>
          <!-- <div class="col-xl-2  ">
            <span class="ml-3"> Help & Support</span>
            <br />
            <a href="" class="btn" style="font-size:15px; ">FAQ</a>
            <br />
            <a href="" class="btn" style="font-size:15px; ">Stay safe withus</a>
            <br />
            <a href="" class="btn" style="font-size:15px; ">Contact us</a>
          </div>
          <div class="col-xl-2  ">
            <span class="ml-3"> Social</span>
            <br />
            <a href="" class="btn" style="font-size:15px; ">Blog</a><br />
            <a href="" class="btn" style="font-size:15px; ">Facebook</a><br />
            <a href="" class="btn" style="font-size:15px; ">Twitter</a><br />
            <a href="" class="btn" style="font-size:15px; ">YouTube</a>
          </div>
          <div class="col-xl-2  ">
            <span class="ml-3"> About us</span>
            <br />
            <a href="" class="btn" style="font-size:15px; ">About us</a><br />
            <a href="" class="btn" style="font-size:15px; ">Career</a><br />
            <a href="" class="btn" style="font-size:15px; "
              >Terms & Conditions</a
            ><br />
            <a href="" class="btn" style="font-size:15px; ">Privacy Policy</a
            ><br />
            <a href="" class="btn" style="font-size:15px; ">Sitemap</a><br />
            <br />
          </div> -->
        </v-row>
        <v-row>
          <div class="col-xl-12  ">
            <v-toolbar flat>
              <span
                style="font-size:15px; color:#546E7A"
                class="text-dark ml-10 "
              >
                Copyright © Shopikart.lk</span
              >
              <v-spacer></v-spacer>

              <v-avatar class="mr-8">
                <!-- <img src="../assets/exlogo.png" alt="Logo" /> -->
              </v-avatar>
            </v-toolbar>
          </div>
        </v-row>
      </div>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    dashboard_redirect() {
      this.$router.push({
        name: "Login",
      });
    },
  },
};
</script>
<style scoped>
/* small mobile size */
@media screen and (min-width: 320px) {
  .fb-page {
    display: block;
  }
  .mobile_footer {
    display: block;
  }
  .desktop_footer {
    display: none;
  }
}

/* medium mobile size */
@media screen and (min-width: 375px) {
  .fb-page {
    display: block;
  }
  .mobile_footer {
    display: block;
  }
  .desktop_footer {
    display: none;
  }
}

/* large mobile size */
@media screen and (min-width: 425px) {
  .fb-page {
    display: block;
  }
  .mobile_footer {
    display: block;
  }
  .desktop_footer {
    display: none;
  }
}

/* tablet size */
@media screen and (min-width: 768px) {
  .fb-page {
    display: none;
  }
  .mobile_footer {
    display: none;
  }
  .desktop_footer {
    display: block;
  }
}

/* laptop size */
@media screen and (max-width: 1024px) {
}

/* laptop Large size */
@media screen and (min-width: 1440px) {
}

/* 4K size */
@media screen and (max-width: 2560px) {
}
</style>

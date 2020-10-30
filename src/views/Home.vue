<template>
  <div id="Home">
    <!-- TOP NAVIGATION -->

    <v-toolbar dense height="65" color="#0c21e4" dark>
      <v-app-bar-nav-icon class="c_menu"></v-app-bar-nav-icon> menu
      <!-- <v-avatar class="c_avatar">
        <v-img src="../assets/logo.png"></v-img>
      </v-avatar> -->
      <v-toolbar-title class="c_title">Shopikart</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-text-field
        filled
        light
        background-color="white"
        append-icon="mdi-magnify"
        class=" pt-6  c_search  "
        dense
        label="Search for your products ..."
        @click:append=""
      ></v-text-field>
      <v-spacer></v-spacer>

      <v-btn depressed class="c_login_btn" color="#0c21e4">
        <v-icon small>mdi-login</v-icon> Login
      </v-btn>
    </v-toolbar>

    <!-- MOBILE ONLY SEARCH FUNCTION -->
    <v-card
      color="#0c21e4"
      flat
      class="c_m_search_card rounded-0 border-0"
      height="70"
      dark
    >
      <v-col class="d-flex align-center justify-center">
        <v-text-field
          light
          background-color="white"
          append-icon="mdi-magnify"
          @click:append=""
          filled
          class="c_m_search"
          dense
          label="Search for your products ..."
        ></v-text-field>
      </v-col>
    </v-card>

    <!-- TAB SLIDER -->

    <v-tabs light height="90" class="w-100 ma-0 pa-0">
      <v-tab v-for="i in 30" :key="i" class="w-100 ma-0 pa-0">
        <v-card flat tile @click="" class="w-100 ma-0 pa-0">
          <v-avatar>
            <v-img
              src="../assets/logo.png"
              max-width="10"
              max-height="10"
            ></v-img>
          </v-avatar>
          <br />
          <p style="font-size:6px;">CATEGORIES {{ i }}</p>
        </v-card>
      </v-tab>
    </v-tabs>

    <!-- advertisement -->
    <v-row class="ma-0">
      <v-col md="12" cols="12">
        <v-list-item-avatar
          tile
          width="100%"
          height="150"
          color="grey"
          class="d-flex align-center justify-center"
        >
          <p>advertisement section</p>
        </v-list-item-avatar>
      </v-col>
    </v-row>

    <!-- ads/ image slider -->
    <v-carousel interval="500" cycle show-arrows-on-hover height="auto">
      <v-carousel-item v-for="(item, i) in items" :key="i">
        <v-row>
          <v-spacer />
          <img width="100%" :src="item" />
          <v-spacer />
        </v-row>
      </v-carousel-item>
    </v-carousel>

    <!-- LATEST PRODUCTS -->

    <v-card class="mt-3" flat tile>
      <v-toolbar dark color="#0c21e4" dense class="rounded-0 border-0">
        <v-toolbar-title>LATEST PRODUCTS</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn color="#0c21e4" depressed>
          View All
        </v-btn>
      </v-toolbar>

      <!-- DESKTOP ONLY PRODUCT SLIDER -->
      <v-tabs light height="250" show-arrows class="product_slider">
        <v-tab v-for="i in 30" :key="i" class="  ma-1">
          <v-card width="170" class="pa-0" tile flat>
            <v-img src="../assets/products/135.png" width="100%"></v-img>
            <br />
            <p>RATHI MILK POWDER</p>
            <p>Rs. 600</p>
          </v-card>
        </v-tab>
      </v-tabs>
    </v-card>

    <!-- MOBILE ONLY PRODUCT DISPLAY -->
    <v-card class="mobile_product_view" tile flat>
      <v-row class="m-0 ">
        <v-col cols="6">
          <!-- PRODUCT IMAGE CARD -->
          <v-card class="border border-primary rounded-0">
            <v-row class="m-0">
              <v-col
                cols="12"
                class="   d-flex align-center justify-center flex-column"
              >
                <v-img src="../assets/products/135.png"></v-img>

                <span class="font-weight-bold">RATTHI MILK </span>
                <span class="text-success">Rs. 300</span>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card class="border border-primary rounded-0">
            <v-row class="m-0">
              <v-col
                cols="12"
                class="   d-flex align-center justify-center flex-column"
              >
                <v-img src="../assets/products/2.png"></v-img>

                <span class="font-weight-bold">ANCHOR MILK </span>
                <span class="text-success">Rs. 300</span>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-card>

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data: () => ({
    items: [
      "https://shoppingo.lk/admin_area/slides_images/4s.jpg",
      "https://shoppingo.lk/admin_area/slides_images/3s.jpg",
      // "https://thelorry.com/images/backgrounds/shopee/Header-Banner.jpg",
    ],
  }),
};
</script>
<style scoped>
.product_section_bar {
  background-color: #0c21e4;
}

/* small mobile size */
@media screen and (min-width: 320px) {
  .c_search {
    display: none;
  }
  .product_slider {
    display: none;
  }
  .mobile_product_view {
    display: block;
  }
}

/* medium mobile size */
@media screen and (min-width: 375px) {
  .c_title {
    margin-left: 40px;
  }
  .c_search {
    display: none;
  }
  .product_slider {
    display: none;
  }
  .mobile_product_view {
    display: block;
  }
}

/* large mobile size */
@media screen and (min-width: 425px) {
  .c_title {
    margin-left: 80px;
  }
  .c_search {
    display: none;
  }
  .product_slider {
    display: none;
  }
  .mobile_product_view {
    display: block;
  }
}

/* tablet size */
@media screen and (min-width: 768px) {
  .c_search {
    display: block;
  }
  .c_m_search_card {
    display: none;
  }
  .product_slider {
    display: block;
  }
  .mobile_product_view {
    display: none;
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

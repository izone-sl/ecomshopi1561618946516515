<template>
  <div id="categories" v-if="JStore[0]">
    <!-- TOP NAVIGATION -->

    <v-toolbar dense height="65" color="#375bd0" dark>
      <v-app-bar-nav-icon
        class="c_menu"
        @click="navigationDrawer = !navigationDrawer"
      ></v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <v-btn to="/" depressed tile text class="c_title p-0">
        <v-img src="../assets/Logo/logo white bg.jpeg" max-width="100"></v-img>
      </v-btn>

      <v-spacer></v-spacer>

      <v-text-field
        filled
        light
        background-color="white"
        class=" pt-6  c_search  "
        dense
        label="Search for your products ..."
      >
        <v-icon
          slot="append"
          color="white"
          class="bg-primary rounded btn"
          style="margin-top:-6px"
        >
          mdi-magnify
        </v-icon>
      </v-text-field>
      <v-spacer></v-spacer>
      <v-btn small depressed class="c_login_btn" color="#375bd0">
        <v-icon small>mdi-cart</v-icon>
      </v-btn>
      <v-btn depressed class="c_login_btn" color="#375bd0">
        <v-icon small>mdi-login</v-icon> Login
      </v-btn>
    </v-toolbar>

    <!-- Navigation bar -->
    <v-navigation-drawer
      v-model="navigationDrawer"
      app
      class=""
      dark
      temporary
      color="#d7d7d6"
    >
      <v-toolbar color="#375bd0" dark flat tile height="65">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title
              class="pt-3 text-light d-flex justify-center align-center "
            >
              MENU
              <v-spacer></v-spacer>

              <v-avatar size="30">
                <v-img
                  src="../assets/Logo/logo yellow bg.jpeg"
                  max-width="50"
                ></v-img>
              </v-avatar>
              <!-- <v-spacer></v-spacer>
              <v-icon
                @click="navigationDrawer = false"
                class="text-light mdi-38px "
                >mdi-close</v-icon
              > -->
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-toolbar>

      <v-divider></v-divider>
      <v-list dense nav>
        <v-list-item
          v-for="item in JStore[0].navigationRoutes"
          :key="item.title"
          link
          class="text-decoration-none"
        >
          <v-list-item-icon>
            <v-icon class="black--text">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="text-dark">
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          link
          class="text-decoration-none"
          @click="all_category_dialog = true"
        >
          <v-list-item-icon>
            <v-icon class="black--text">mdi-label</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="text-dark">
              All Categories
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item class="text-decoration-none">
          <v-list-item-icon>
            <v-icon class="black--text"> mdi-whatsapp</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="text-dark">
              <a
                class="text-decoration-none text-dark block"
                :href="
                  `https://api.whatsapp.com/send?phone=` +
                    JStore[0]['contactInfomation'].whatsapp +
                    `&text=Hello%20There,%20i%20need%20a%20product%20can%20you%20help%20me%20to%20purchase?`
                "
              >
                CHAT ON WHATSAPP</a
              >
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item class="text-decoration-none">
          <v-list-item-icon>
            <v-icon class="black--text"> mdi-phone</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="text-dark">
              {{ JStore[0]["contactInfomation"].whatsapp }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item class="text-decoration-none">
          <v-list-item-icon>
            <v-icon class="black--text"> mdi-mail</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="text-dark">
              {{ JStore[0]["contactInfomation"].email }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- all category dialog on navigation bar -->
    <v-row justify="center">
      <v-dialog
        v-model="all_category_dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
      >
        <v-card>
          <v-toolbar dark color="#375bd0">
            <v-btn icon dark @click="all_category_dialog = false">
              <v-icon>mdi-keyboard-backspace</v-icon>
            </v-btn>
            <v-toolbar-title>All Categories</v-toolbar-title>
          </v-toolbar>
          <v-list three-line subheader>
            <v-list-item>
              <v-list-item-content>
                <v-row class="m-0 flex flex-row justify-center align-center">
                  <v-col
                    md="2"
                    cols="5"
                    class=" p-0 text-center border-0"
                    v-for="(item, index) in JStore[0]['MainCategories']"
                    :key="index"
                  >
                    <v-card
                      tile
                      flat
                      class=" ma-1  "
                      v-if="item.visibleStatus === 'display'"
                      @click="mainCategory_clicked(item)"
                    >
                      <v-img
                        :src="
                          require(`../assets/main_categories/` + item.avatar)
                        "
                        max-width="320"
                        alt="categories"
                        class="border-0"
                      />
                    </v-card>
                  </v-col>
                </v-row>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-dialog>
    </v-row>

    <!-- MOBILE ONLY SEARCH FUNCTION -->
    <v-card
      color="#375bd0"
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
          filled
          class="c_m_search"
          dense
          label="Search for your products ..."
        >
          <v-icon
            slot="append"
            color="white"
            class="bg-primary rounded btn"
            style="margin-top:-6px"
          >
            mdi-magnify
          </v-icon></v-text-field
        >
      </v-col>
    </v-card>

    <!-- advertisement -->
    <v-row class="m-0 ">
      <v-col md="12" cols="12" class="p-0">
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

    <v-toolbar dark color="#375bd0" dense class="rounded-0 border-0">
      <v-toolbar-title>{{ selectedCategoryRoute[0] }}</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <!--CATEGORY TAB SLIDER -->
    <v-tabs light height="90" class="w-100 ma-0 pa-0">
      <v-tab
        v-for="(item, index) in JStore[0]['MainCategories'][0]['subCategories']"
        :key="index"
        class="w-100 ma-0 pa-0"
        @click="categoryRedirect(item)"
      >
        <v-card
          flat
          tile
          class="w-100 ma-0 pa-0"
          v-if="selectedCategoryRoute[0] == 'Baby & Toys'"
        >
          <v-avatar size="100" tile color="white">
            <img
              :src="require(`../assets/subCategories/` + item.avatar)"
              alt="categories"
            />
          </v-avatar>
        </v-card>
      </v-tab>
    </v-tabs>

    <!-- advertisement -->
    <v-row class="m-0 ">
      <v-col md="12" cols="12" class="p-0">
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

    <!-- MOBILE ONLY LATEST DISPLAY -->
    <!-- LATEST PRODUCTS -->
    <v-card class="mt-3" flat tile>
      <v-toolbar dark color="#375bd0" dense class="rounded-0 border-0">
        <v-toolbar-title>LATEST PRODUCTS</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn color="#375bd0">
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
    <v-card class="mobile_product_view" tile flat>
      <v-row class="m-0  pa-2" style="background-color:#375bd0;">
        <!-- p1 -->
        <v-col cols="6" class="bg-light ">
          <v-card class="border border-primary rounded-0  pa-1" width="100%">
            <v-img src="../assets/products/135.png" height="100px"></v-img>
            <v-card-title style="font-size:16px;">
              RATTHI MILK
            </v-card-title>
            <v-card-subtitle class="text-success">
              Rs. 300
            </v-card-subtitle>

            <v-card-actions>
              <v-btn icon> <v-icon>mdi-cart</v-icon></v-btn>
              <v-spacer></v-spacer>
              <v-btn icon> <v-icon>mdi-whatsapp</v-icon></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <!-- P2 -->
        <v-col cols="6" class="bg-light ">
          <v-card class="border border-primary rounded-0  pa-1">
            <v-img src="../assets/products/2.png" height="100px"></v-img>
            <v-card-title style="font-size:16px;">
              ANCHOR MILK
            </v-card-title>
            <v-card-subtitle class="text-success">
              Rs. 360
            </v-card-subtitle>

            <v-card-actions>
              <v-btn icon> <v-icon>mdi-cart</v-icon></v-btn>
              <v-spacer></v-spacer>
              <v-btn icon> <v-icon>mdi-whatsapp</v-icon></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <!-- P3 -->
        <v-col cols="6" class="bg-light ">
          <v-card class="border border-primary rounded-0  pa-1">
            <v-img src="../assets/products/milo.jpg" height="100px"></v-img>
            <v-card-title style="font-size:16px;">
              MILO DRINK
            </v-card-title>
            <v-card-subtitle class="text-success">
              Rs. 75
            </v-card-subtitle>

            <v-card-actions>
              <v-btn icon> <v-icon>mdi-cart</v-icon></v-btn>
              <v-spacer></v-spacer>
              <v-btn icon> <v-icon>mdi-whatsapp</v-icon></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <!-- P4 -->
        <v-col cols="6" class="bg-light ">
          <v-card class="border border-primary rounded-0  pa-1">
            <v-img src="../assets/products/72.png" height="100px"></v-img>
            <v-card-title style="font-size:16px;">
              SUNLIGHT
            </v-card-title>
            <v-card-subtitle class="text-success">
              Rs. 60
            </v-card-subtitle>

            <v-card-actions>
              <v-btn icon> <v-icon>mdi-cart</v-icon></v-btn>
              <v-spacer></v-spacer>
              <v-btn icon> <v-icon>mdi-whatsapp</v-icon></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <!-- p1 -->
        <v-col cols="6" class="bg-light ">
          <v-card class="border border-primary rounded-0  pa-1" width="100%">
            <v-img src="../assets/products/135.png" height="100px"></v-img>
            <v-card-title style="font-size:16px;">
              RATTHI MILK
            </v-card-title>
            <v-card-subtitle class="text-success">
              Rs. 300
            </v-card-subtitle>

            <v-card-actions>
              <v-btn icon> <v-icon>mdi-cart</v-icon></v-btn>
              <v-spacer></v-spacer>
              <v-btn icon> <v-icon>mdi-whatsapp</v-icon></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <!-- P2 -->
        <v-col cols="6" class="bg-light ">
          <v-card class="border border-primary rounded-0  pa-1">
            <v-img src="../assets/products/2.png" height="100px"></v-img>
            <v-card-title style="font-size:16px;">
              ANCHOR MILK
            </v-card-title>
            <v-card-subtitle class="text-success">
              Rs. 360
            </v-card-subtitle>

            <v-card-actions>
              <v-btn icon> <v-icon>mdi-cart</v-icon></v-btn>
              <v-spacer></v-spacer>
              <v-btn icon> <v-icon>mdi-whatsapp</v-icon></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-card>

    <Footer />
  </div>
</template>

<script>
const JsonStore = require("../store/JsonStore");
import Footer from "../components/Footer";
export default {
  name: "categories",
  components: {
    Footer,
  },
  data() {
    return {
      navigationDrawer: false,
      all_category_dialog: false,

      get_data: [],
      selectedCategoryRoute: [],
      subCategory: [],
      JStore: [],
    };
  },
  mounted() {
    this.initRoutes();

    JsonStore["tempJson"].forEach((element) => {
      // console.log(element);
      this.JStore.push(element);
    });

    JsonStore["tempJson"].forEach((element) => {
      // console.log(element.subCategories);
      this.subCategory.push(element.subCategories);
    });
  },
  methods: {
    initRoutes() {
      if (!this.$route.params.get_data) {
        this.$router.push({ name: "Home" });
      }

      if (this.$route.params.get_data) {
        this.get_data.push(this.$route.params.get_data);

        this.get_data.forEach((element) => {
          this.selectedCategoryRoute.push(element.title);
        });
      }
    },
    mainCategory_clicked(item) {
      console.log(item);
      this.selectedCategoryRoute.splice(0);
      this.selectedCategoryRoute.push(item.title);
      this.all_category_dialog = false;
    },

    categoryRedirect(item) {
      this.$router.push({ name: "AllProduct", params: { get_data: item } });
    },
  },
};
</script>

<style scoped>
.product_section_bar {
  background-color: #375bd0;
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
    margin-top: -15px;
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

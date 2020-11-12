<template>
  <div id="AllProducts" v-if="JStore[0]">
    <!-- if statement placed to hide the undifented Jstore array [0] -->

    <!-- TOP NAVIGATION -->
    <v-toolbar dense height="65" color="#375bd0" dark>
      <v-app-bar-nav-icon
        class="c_menu"
        @click="navigationDrawer = !navigationDrawer"
      ></v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <v-img class="c_title"  src="../assets/Logo/logo white bg.jpeg" max-width="100"></v-img>

      <!-- <v-toolbar-title class="c_title">
        {{ JStore[0]["contactInfomation"].name }}</v-toolbar-title
      > -->

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
              <v-img
                src="../assets/Logo/logo white bg.jpeg"
                max-width="50"
              ></v-img>
              <v-spacer></v-spacer>
              <v-icon
                @click="navigationDrawer = false"
                class="text-light mdi-38px "
                >mdi-close</v-icon
              >
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
                href="https://api.whatsapp.com/send?phone=94776372801&text=Hello%20There,%20i%20need%20a%20product%20can%20you%20help%20me%20to%20purchase?"
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
          @click:append=""
          filled
          class="c_m_search"
          dense
          v-model="search"
          label="Search for your products ..."
        ></v-text-field>
      </v-col>
    </v-card>

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
                    v-if="item.visibleStatus === 'display'"
                  >
                    <v-card
                      tile
                      flat
                      :color="coloringCard(index)"
                      class=" ma-1  "
                      @click=""
                    >
                      <v-img
                        :src="
                          require(`../assets/main_categories/` + item.avatar)
                        "
                        max-width="320"
                        alt="categories"
                        class="border-0"
                      />

                      <!-- <br />
                      <p class="text-light" style="font-size:11px;">
                        {{ item.title }}
                      </p> -->
                    </v-card>
                  </v-col>
                </v-row>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-dialog>
    </v-row>

    <v-row class="m-0">
      <v-col cols="6"><v-icon>mdi-sort</v-icon>Sorting</v-col>
      <v-col cols="6"><v-icon>mdi-filter</v-icon>Filter by category</v-col>
    </v-row>
    <!-- DATATABLE -->
    <v-data-table
      :headers="headers"
      :items="C_Products"
      hide-default-header
      :search="search"
      :footer-props="{
        itemsPerPageOptions: [5, 10, 25, 35, 55, 65, 75, -1],
      }"
      :items-per-page="35"
    >
      <template v-slot:item="{ item }">
        <v-card @click="">
          <v-row class="m-0 flex flex-row align-center">
            <v-col cols="4">
              <v-img
                :src="require(`../assets/products/` + item.img)"
                width="130"
                height="130"
              ></v-img>
            </v-col>
            <v-col cols="6">
              <v-row class="m-0 ">
                <v-col cols="12">
                  <span class="font-weight-bold font">{{ item.name }}</span>
                  <br />
                  <span class="text-secondary product_category_Text_size">{{
                    item.category
                  }}</span>
                  <br />
                  <span>{{ item.price }}</span>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
        <!-- <v-card
          flat
          tile
          class="mx-auto ma-2"
          outlined
          max-width="600"
          @click=""
        >
          <v-list-item three-line>
            <v-list-item-content>
              <v-col
                cols="12"
                md="3"
                class="flex flex-row justify-center align-center"
              >
                <v-img
                  src="../assets/products/135.png"
                  width="150"
                  height="150"
                ></v-img>
              </v-col>

              <v-col cols="12" md="6">
                <div class="overline  ">
                  {{ item.name }}
                </div>
                <div class=" ">
                  <p style="font-size:12px; color:#546E7A">
                    {{ item.category }}
                  </p>
                </div>
                <div class="  ">
                  <p style="font-size:18px; color:#004D40">
                    Rs. {{ item.price }}
                  </p>
                </div>
                <div class=" mb-4">
                  <p style="font-size:12px; color:#546E7A">
                    {{ item.description }}
                  </p>
                </div>
              </v-col>
            </v-list-item-content>
          </v-list-item>
        </v-card> -->
      </template>
    </v-data-table>
  </div>
</template>

<script>
import Footer from "../components/Footer";
const JsonStore = require("../store/JsonStore");
export default {
  name: "AllProducts",
  components: {
    Footer,
  },
  data: () => ({
    JStore: [],
    navigationDrawer: false,
    all_category_dialog: false,
    colorCache: {},
    headers: [
      {
        text: "name",
        align: "start",
        value: "name",
      },
      {
        text: "category",
        align: "start",
        value: "category",
      },
      {
        text: "price",
        align: "start",
        value: "price",
      },
    ],
    C_Products: [
      {
        name: "Anchor Milk Powder",
        category: "Grocery",
        price: "Rs. 500",
        img: "2.png",
      },
      {
        name: "Sunlight Soap",
        category: "Grocery",
        price: "Rs. 60",
        img: "72.png",
      },
      {
        name: "Ratthi Milk powder",
        category: "Grocery",
        price: "Rs. 460",
        img: "135.png",
      },
      {
        name: "Rice cooker",
        category: "Home and Kitchen",
        price: "Rs. 3500",
        img: "Bright-rice-cooker-6L-1.jpg",
      },
    ],
    search: "",
  }),
  mounted() {
    JsonStore["tempJson"].forEach((element) => {
      console.log(element);
      this.JStore.push(element);
    });
  },
  watch: {
    coloringCard(id) {
      const r = () => Math.floor(256 * Math.random());

      return (
        this.colorCache[id] ||
        (this.colorCache[id] = `rgb(${r()}, ${r()}, ${r()})`)
      );
    },
  },
  methods: {
    coloringCard(id) {
      const r = () => Math.floor(256 * Math.random());

      return (
        this.colorCache[id] ||
        (this.colorCache[id] = `rgb(${r()}, ${r()}, ${r()})`)
      );
    },
  },
};
</script>

<style scoped>
.product_section_bar {
  background-color: #375bd0;
}
.product_category_Text_size {
  font-size: 10px;
}

/* small mobile size */
@media screen and (min-width: 320px) {
  .c_search {
    display: none;
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
}

/* large mobile size */
@media screen and (min-width: 425px) {
  .c_title {
    margin-left: 80px;
  }
  .c_search {
    display: none;
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

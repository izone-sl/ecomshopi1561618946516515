<template>
  <div id="Home" v-if="JStore[0]">
    <!-- if statement placed to hide the undifented Jstore array [0] -->
    <!-- TOP NAVIGATION -->

    <v-toolbar dense height="65" color="#375bd0" dark>
      <v-app-bar-nav-icon
        class="c_menu"
        @click="navigationDrawer = !navigationDrawer"
      ></v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <v-img src="../assets/Logo/logo white bg.jpeg" max-width="100"></v-img>

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
                :href="`https://api.whatsapp.com/send?phone=`+JStore[0]['contactInfomation'].whatsapp+`&text=Hello%20There,%20i%20need%20a%20product%20can%20you%20help%20me%20to%20purchase?`"
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
          <v-toolbar dark color="primary">
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
          label="Search for your products ..."
        ></v-text-field>
      </v-col>
    </v-card>

    <!--CATEGORY TAB SLIDER -->

    <v-tabs light height="90" class="w-100 ma-0 pa-0">
      <v-tab
        v-for="(item, index) in JStore[0]['MainCategories']"
        :key="index"
        class="w-100 ma-0 pa-0"
        v-if="item.visibleStatus === 'display'"
      >
        <v-card flat tile @click="" class="w-100 ma-0 pa-0">
          <v-avatar size="70" color="white">
            <img
              :src="require(`../assets/category_avatar/` + item.avatar)"
              max-width="250"
              max-height="250"
              alt="categories"
            />
          </v-avatar>

          <br />
          <p style="font-size:6px;">{{ item.title }}</p>
        </v-card>
      </v-tab>
    </v-tabs>

    <!-- local test -->
    <!-- <v-tabs light height="90" class="w-100 ma-0 pa-0">
      <v-tab v-for="i in 30" :key="i" class="w-100 ma-0 pa-0">
        <v-card flat tile @click="" class="w-100 ma-0 pa-0">
          <v-avatar>
            <v-img
              src="../assets/logo.png"
              max-width="300"
              max-height="300"
            ></v-img>
          </v-avatar>
          <br />
          <p style="font-size:6px;">CATEGORIES {{ i }}</p>
        </v-card>
      </v-tab>
    </v-tabs> -->

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
    <v-carousel interval="2000" cycle show-arrows-on-hover height="auto">
      <v-carousel-item v-for="(item, i) in items" :key="i">
        <v-row>
          <v-spacer />
          <img width="100%" :src="item" />
          <v-spacer />
        </v-row>
      </v-carousel-item>
    </v-carousel>

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
      </v-row>
    </v-card>

    <!-- MOBILE ONLY PRODUCT DISPLAY -->
    <!-- <v-card class="mobile_product_view" tile flat>
      <v-row class="m-0 ">
        <v-col cols="6">
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

        <v-col cols="6">
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

        <v-col cols="6">
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

        <v-col cols="6">
          <v-card class="border border-primary rounded-0  pa-1">
            <v-img src="../assets/products/72.png" height="100px"></v-img>
            <v-card-title style="font-size:16px;">
              SUNLIGHT SOAP
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
      </v-row>
    </v-card> -->

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

    <!-- MOBILE ONLY HOME & KITCHEN DISPLAY -->
    <!-- HOME & KITCHEN PRODUCTS -->
    <v-card class="mt-3" flat tile>
      <v-toolbar dark color="#E91E63" dense class="rounded-0 border-0">
        <v-toolbar-title>HOME & KITCHEN </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn color="#E91E63">
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
      <v-row class="m-0  pa-2" style="background-color:#E91E63;">
        <!-- p1 -->
        <v-col cols="6" class="bg-light ">
          <v-card class="border border-primary rounded-0  pa-1" width="100%">
            <v-img
              src="../assets/products/ATF0036-Sokany-Healthy-Air-Fryer-5-L-Free-Hopper-pan-001.jpg"
              height="100px"
            ></v-img>
            <v-card-title style="font-size:16px;">
              Air-Fryer
            </v-card-title>
            <v-card-subtitle class="text-success">
              Rs. 2300
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
            <v-img
              src="../assets/products/Bright-rice-cooker-6L-1.jpg"
              height="100px"
            ></v-img>
            <v-card-title style="font-size:16px;">
              RICE COOKER
            </v-card-title>
            <v-card-subtitle class="text-success">
              Rs. 3360
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
            <v-img
              src="../assets/products/SHX1305-National-Glass-Top-Double-Burner-01.jpg"
              height="100px"
            ></v-img>
            <v-card-title style="font-size:16px;">
              BURNER
            </v-card-title>
            <v-card-subtitle class="text-success">
              Rs. 1075
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
            <v-img
              src="../assets/products/SHX1307-Rich-Power-Mixer-Grinder-550-wats-01.jpg"
              height="100px"
            ></v-img>
            <v-card-title style="font-size:16px;">
              MIXER
            </v-card-title>
            <v-card-subtitle class="text-success">
              Rs. 3460
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

    <!-- MOBILE ONLY SPORTS EQUIPMENTS DISPLAY -->
    <!-- SPORTS EQUIPMENTS PRODUCTS -->
    <v-card class="mt-3" flat tile>
      <v-toolbar dark color="#B71C1C" dense class="rounded-0 border-0">
        <v-toolbar-title>SPORTS EQUIPMENTS</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn color="#B71C1C">
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
      <v-row class="m-0  pa-2" style="background-color:#B71C1C;">
        <!-- p1 -->
        <v-col cols="6" class="bg-light ">
          <v-card class="border border-primary rounded-0  pa-1" width="100%">
            <v-img
              src="../assets/products/144148919-97535050-1551920578.jpg"
              height="100px"
            ></v-img>
            <v-card-title style="font-size:16px;">
              BADMINTON
            </v-card-title>
            <v-card-subtitle class="text-success">
              Rs. 700
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
            <v-img
              src="../assets/products/147539711-102363238-1565744707.jpg"
              height="100px"
            ></v-img>
            <v-card-title style="font-size:16px;">
              SOFT BALLS
            </v-card-title>
            <v-card-subtitle class="text-success">
              Rs. 320
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
            <v-img
              src="../assets/products/150355619-108536971-1595397194.jpg"
              height="100px"
            ></v-img>
            <v-card-title style="font-size:16px;">
              CARROM BOARD
            </v-card-title>
            <v-card-subtitle class="text-success">
              Rs. 1075
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
            <v-img
              src="../assets/products/BAT1463829644.jpg"
              height="100px"
            ></v-img>
            <v-card-title style="font-size:16px;">
              HARDBALL BAT
            </v-card-title>
            <v-card-subtitle class="text-success">
              Rs. 2500
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

    <!-- MOBILE ONLY COSMATICS ITEMS DISPLAY -->
    <!-- COSMATICS ITEMS PRODUCTS -->
    <v-card class="mt-3" flat tile>
      <v-toolbar dark color="#375bd0" dense class="rounded-0 border-0">
        <v-toolbar-title>COSMATICS ITEMS</v-toolbar-title>
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
            <v-img
              src="../assets/products/2449771395_770677398-560x636.jpg"
              height="100px"
            ></v-img>
            <v-card-title style="font-size:16px;">
              EARRING MODEL
            </v-card-title>
            <v-card-subtitle class="text-success">
              Rs. 700
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
            <v-img
              src="../assets/products/12291861545_1595973670-560x636.jpg"
              height="100px"
            ></v-img>
            <v-card-title style="font-size:16px;">
              NECK CHAIN
            </v-card-title>
            <v-card-subtitle class="text-success">
              Rs. 320
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
            <v-img
              src="../assets/products/4317724898_727322799-560x636.jpg"
              height="100px"
            ></v-img>
            <v-card-title style="font-size:16px;">
              LEG CHAIN
            </v-card-title>
            <v-card-subtitle class="text-success">
              Rs. 1075
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
            <v-img
              src="../assets/products/12328795990_1595973670-560x636.jpg"
              height="100px"
            ></v-img>
            <v-card-title style="font-size:16px;">
              MODEL CHAIN
            </v-card-title>
            <v-card-subtitle class="text-success">
              Rs. 2500
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
import Footer from "../components/Footer";
const JsonStore = require("../store/JsonStore");
export default {
  name: "Home",
  components: {
    Footer,
  },
  data: () => ({
    JStore: [],
    navigationDrawer: false,
    all_category_dialog: false,
    items: [
      "https://shoppingo.lk/admin_area/slides_images/4s.jpg",
      "https://shoppingo.lk/admin_area/slides_images/3s.jpg",
    ],
    colorCache: {},
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

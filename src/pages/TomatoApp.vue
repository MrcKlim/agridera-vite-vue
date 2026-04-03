<script setup>
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
import { useShop } from '../composables/useShop'
import { publicAsset } from '../utils/publicAsset'

const { products } = useShop({})
</script>

<template>
  <div class="tomato-page">
    <SiteHeader :white="true" />

    <div class="tomato-banner">
      <img :src="publicAsset('img/cabbage-banner.jpg')" alt="Cabbages Banner">
    </div>

    <main class="py-5">
      <div class="container">
        <h1 class="page-title text-center text-md-left">Agridera Fresh Market Cabbages</h1>
        <img :src="publicAsset('images/Union.svg')" alt="Crosses" class="crosses-img mb-4 mx-auto mx-md-0">

        <p class="desc-text">Agridera aims to be one of the world's leading companies in the breeding, production, and marketing of tomato seeds. <b>We invest intensively in research and development to provide solutions to growers and consumers in numerous countries around the world.</b> In particular, we breed improved, disease-resistant cultivars adapted to different markets globally.</p>

        <p class="desc-text">Currently, emphasis is placed on combining Tomato Yellow Leaf Curl Virus (TYLCV) and Tomato Spotted Wilt Virus (TSWV) resistances with other soil borne diseases into superior tomato breeding lines and hybrids. Moreover, comprehensive efforts are being undertaken to develop varieties resistance to TBRFV virus (Tomato Brown Rugose Fruit Virus).</p>

        <p class="desc-text">In terms of horticultural traits, breeding is for earliness, different fruit sizes, firmness, red fruit color, flavor, crack resistance, shelf life, and high/low temperature fruit set. Combinations of quality features and disease resistance are sought in a variety of types, namely round and elongated shapes.</p>

        <div class="highlight-box">
          <p class="mb-0">Agridera Tomato breeding programs are focusing on three main segments: Greenhouse Indeterminate Tomatoes, Open-field Indeterminate Tomatoes, and Bush Type Open-field Tomatoes.</p>
        </div>

        <div class="row info-columns">
          <div class="col-md-4 mb-4">
            <div class="info-card">
              <h5>Greenhouse Tomato Breeding Program</h5>
              <hr class="green-hr">
              <p><b>This breeding is aimed for the Spanish and Turkish markets.</b> For single and cluster picks, round fruit shape and resistances of TYLCV, TSWV, Nematodes and FORL (Fusarium oxysporum f.sp. radicis-lycopersici). Some hybrids may include more resistances, such as Cladosporium and Leveillula Taurica (Lv).</p>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="info-card">
              <h5>Open-field Indeterminate Tomatoes</h5>
              <hr class="green-hr">
              <p><b>This breeding is for Brazilian, Moroccan, and Turkish markets.</b> The main focus is on large round shape fruits (200 grams plus); and resistances of TYLCV, TSWV, Nematodes and FORL. In the near future, F3 (Fusarium oxysporum f.sp. lycopersici) will be included as basic resistance in our cultivars.</p>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="info-card">
              <h5>Open-field Bush Type Tomatoes</h5>
              <hr class="green-hr">
              <p><b>This breeding is for Mediterranean markets.</b> We breed round and elongated shapes, standard sizes (140-180 grams), and beef sizes (min. 180 grams up to 300 grams and more). We combine the resistances of TYLCV, TSWV and Nematodes as basic resistances in our hybrids. However, some hybrids may include more resistances, such as Cladosporium and Leveillula Taurica (Lv).</p>
            </div>
          </div>
        </div>

        <div class="highlight-box">
          <p class="mb-0">Agridera operates through international and local distributors around the world.</p>
        </div>
      </div>
    </main>

    <section class="product-grid-section">
      <div class="container">
        <div class="row">
          <div
            v-for="p in products"
            :key="p.id"
            class="col-md-4 col-sm-6 mb-4"
          >
            <div class="product-card text-center">
              <router-link :to="`/tomato-one/${p.id}`">
                <img :src="publicAsset('img/' + p.image)" alt="Cabbage">
              </router-link>
              <div class="product-info">
                <router-link :to="`/tomato-one/${p.id}`" style="text-decoration: none;">
                  <h4 class="product-title">{{ p.title }}</h4>
                </router-link>
                <p class="product-desc">{{ p.short_text }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

<SiteFooter products-href="/tomato" />
  </div>
</template>
<script setup>
import { publicAsset } from '../utils/publicAsset'

defineProps({
  // Змінили дефолтне значення з '#' на '/tomato'
  productsHref: { type: String, default: '/tomato' },
})
</script>

<template>
  <footer class="footer-section">
    <div class="footer-top py-4">
      <div class="container">
        <div class="row text-center text-md-left align-items-center">
          <div class="col-md-8 mb-3 mb-md-0">
            <nav class="footer-nav">
              <a href="#" @click.prevent>PROFILE</a>
              <a href="#" @click.prevent>MANAGEMENT</a>
              <router-link :to="productsHref">PRODUCTS</router-link>
              <a href="#" @click.prevent>R&amp;D</a>
              <a href="#" @click.prevent>LINKS</a>
              <a href="#" @click.prevent>SITEMAP</a>
              <router-link to="/contact">CONTACT</router-link>
            </nav>
          </div>
          <div class="col-md-4 text-center text-md-right social-icons">
            <a href="#" @click.prevent><img :src="publicAsset('images/Ico_in.png')" alt="LinkedIn"></a>
            <a href="#" @click.prevent><img :src="publicAsset('images/Ico_inst.png')" alt="Instagram"></a>
            <a href="#" @click.prevent><img :src="publicAsset('images/Ico_tube.png')" alt="YouTube"></a>
            <a href="#" @click.prevent><img :src="publicAsset('images/Ico_tw.png')" alt="Twitter"></a>
            <a href="#" @click.prevent><img :src="publicAsset('images/Ico_fb.png')" alt="Facebook"></a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom py-3">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <p class="copyright-text mb-0">AGRIDERA SEEDS &amp; AGRICULTURE LTD. © 2020</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
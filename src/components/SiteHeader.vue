<script setup>
import { ref } from 'vue'
import { publicAsset } from '../utils/publicAsset'

defineProps({
  white: { type: Boolean, default: false },
})

const menuOpen = ref(false)
</script>

<template>
  <header class="header-section" :class="{ 'header-white': white }">
    <div class="container">
      <div class="row pt-3 pb-2 align-items-center">
        <div class="col-md-3 text-center text-md-left mb-3 mb-md-0">
          <router-link to="/">
            <img :src="publicAsset('images/logo.png')" alt="Agridera Logo" class="img-fluid logo-img">
          </router-link>
        </div>
        <div class="col-md-9 position-relative">
          <div class="d-flex justify-content-between justify-content-md-end align-items-center mb-2">
            <div class="search-box">
              <input type="text" placeholder="Search">
              <img :src="publicAsset('images/ico_search.png')" alt="Search" class="search-icon-img">
            </div>

            <div
              class="hamburger-menu"
              :class="{ active: menuOpen }"
              @click="menuOpen = !menuOpen"
            >
              <span />
              <span />
              <span />
            </div>
          </div>

          <nav
            id="nav-menu"
            class="main-nav d-flex justify-content-md-end justify-content-center flex-wrap"
            :class="{ show: menuOpen }"
          >
            <router-link to="/">Home</router-link>
            <a href="#" class="nav-stub" @click.prevent>Company Profile</a>
            <router-link to="/tomato">Products</router-link>
            <a href="#" class="nav-stub" @click.prevent>Services</a>
            <a href="#" class="nav-stub" @click.prevent>R &amp; D</a>
            <router-link to="/contact">Contact</router-link>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>
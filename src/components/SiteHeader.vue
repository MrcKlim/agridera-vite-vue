<script setup>
import { ref } from 'vue'

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
          <a href="index.html">
            <img src="/images/logo.png" alt="Agridera Logo" class="img-fluid logo-img">
          </a>
        </div>
        <div class="col-md-9 position-relative">
          <div class="d-flex justify-content-between justify-content-md-end align-items-center mb-2">
            <div class="search-box">
              <input type="text" placeholder="Search">
              <img src="/images/ico_search.png" alt="Search" class="search-icon-img">
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
            <a href="index.html">Home</a>
            <a href="#">Company Profile</a>
            <a href="tomato.html">Products</a>
            <a href="#">Services</a>
            <a href="#">R &amp; D</a>
            <a href="contact.html">Contact</a>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
</script>

<template>
  <div>
    <div class="main-hero-wrapper">
      <SiteHeader :white="false" />
      <section class="hero-section text-center">
        <div class="container">
          <h1 class="hero-title">Agridera Seeds and Agriculture Ltd</h1>
          <a href="#" class="btn read-more-btn">READ MORE</a>
        </div>
      </section>
    </div>

    <section class="icons-section py-4 border-bottom">
      <div class="container-fluid px-lg-5">
        <div class="row text-center justify-content-center align-items-end flex-nowrap overflow-auto">
          <div class="col px-2 mb-3 icon-box">
            <img src="/images/Vector.png" alt="Wheat" class="img-fluid icon-img mb-2">
            <p class="icon-text">Wheat</p>
          </div>
          <div class="col px-2 mb-3 icon-box">
            <img src="/images/Groupwat.png" alt="Confection Watermelon" class="img-fluid icon-img mb-2">
            <p class="icon-text">Confection Watermelon</p>
          </div>
          <div class="col px-2 mb-3 icon-box">
            <img src="/images/Vectorluck.png" alt="Clover" class="img-fluid icon-img mb-2">
            <p class="icon-text">Clover</p>
          </div>
          <div class="col px-2 mb-3 icon-box">
            <img src="/images/Vectorsun.png" alt="Confection Sunflower" class="img-fluid icon-img mb-2">
            <p class="icon-text">Confection Sunflower</p>
          </div>
          <div class="col px-2 mb-3 icon-box">
            <img src="/images/Vectortom.png" alt="Tomato" class="img-fluid icon-img mb-2">
            <p class="icon-text">Tomato</p>
          </div>
          <div class="col px-2 mb-3 icon-box">
            <img src="/images/6.png" alt="Eggplant P/O" class="img-fluid icon-img mb-2">
            <p class="icon-text">Eggplant P/O</p>
          </div>
          <div class="col px-2 mb-3 icon-box">
            <img src="/images/Groupsu.png" alt="Ornamental Sunflower" class="img-fluid icon-img mb-2">
            <p class="icon-text">Ornamental Sunflower</p>
          </div>
        </div>
      </div>
    </section>

    <section class="vision-mission-section py-5">
      <div class="container">
        <div class="row align-items-center mb-5 mt-4">
          <div class="col-md-5 offset-md-1">
            <h2 class="section-title">Vision</h2>
            <img src="/images/Union.svg" alt="Crosses" class="crosses-img">
            <p class="section-text">We believe in long-term growth with an emphasis on the potential of emerging markets. We also support the global need of feeding the growing population.</p>
          </div>
          <div class="col-md-5 text-center mt-4 mt-md-0">
            <img src="/images/image3.png" alt="Vision" class="img-fluid shadow-img">
          </div>
        </div>

        <div class="row align-items-center mt-5 mb-4">
          <div class="col-md-5 offset-md-1 order-md-2">
            <h2 class="section-title">Mission</h2>
            <img src="/images/Union.svg" alt="Crosses" class="crosses-img">
            <p class="section-text">Breeding and marketing seeds for advanced field crops and vegetable varieties that provide an added value to all supply chain partners.</p>
          </div>
          <div class="col-md-5 text-center order-md-1 mt-4 mt-md-0">
            <div class="mission-img-wrapper">
              <img src="/images/image2.png" alt="Mission" class="img-fluid shadow-img">
              <a href="#" class="play-btn"></a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="activities-section py-5 bg-light">
      <div class="container">
        <h2 class="section-title text-center">Agridera's main activities</h2>
        <div class="text-center">
          <img src="/images/Union.svg" alt="Crosses" class="crosses-img mx-auto">
        </div>
        <div class="row align-items-start">
          <div class="col-md-4 mb-4 d-flex flex-column align-items-center text-center">
            <img src="/images/image 4.png" alt="Open field crop seeds" class="img-fluid mb-3">
            <h4 class="activity-title">Open field crop seeds</h4>
            <hr class="activity-divider">
            <p class="activity-desc">wheat, cotton, legumes,<br>hybrid confection sunflower</p>
          </div>
          <div class="col-md-4 mb-4 d-flex flex-column align-items-center text-center">
            <img src="/images/image 5.png" alt="Vegetable seeds" class="img-fluid mb-3">
            <h4 class="activity-title">Vegetable seeds</h4>
            <hr class="activity-divider">
            <p class="activity-desc">hybrid open field tomatoes,<br>eggplant, onion, paprika, etc.</p>
          </div>
          <div class="col-md-4 mb-4 d-flex flex-column align-items-center text-center">
            <img src="/images/3 1.png" alt="Ornamental seeds" class="img-fluid mb-3">
            <h4 class="activity-title">Ornamental seeds</h4>
            <hr class="activity-divider">
            <p class="activity-desc">hybrid cut sunflowers, hybrid<br>patio tomatoes, Bells of Irland, etc.</p>
          </div>
        </div>
      </div>
    </section>

    <SiteFooter products-href="#" />
  </div>
</template>

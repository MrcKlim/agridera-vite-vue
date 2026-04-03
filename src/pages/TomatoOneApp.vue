<script setup>
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
import { useShop } from '../composables/useShop'

const { product, btnVisible, addToCart } = useShop({ loadProduct: true })
</script>

<template>
  <div class="product-one-page">
    <SiteHeader :white="true" />

    <main class="product-details-main py-4">
      <div class="container position-relative">
        <a href="tomato.html" class="back-link mb-3 d-inline-block">&larr; Return to all products</a>

        <div class="row">
          <div class="col-md-6 pr-md-5 d-md-flex flex-md-column">
            <h1 class="product-title-large">{{ product.title }}</h1>
            <h2 class="product-subtitle-large">{{ product.short_text }}</h2>

            <img src="/images/Union.svg" alt="Crosses" class="crosses-img mt-3 mb-4">

            <div class="highlight-red-box d-flex align-items-center mb-5">
              <img src="/images/Group 17.png" alt="High yield icon" class="mr-3" style="width: 50px; height: auto;">
              <span class="highlight-red-text">Very high yield and<br>excellent fruits quality!</span>
            </div>

            <h3 class="char-lined-title">{{ product.desc }}</h3>
            <div class="char-block mb-4">
              <h4 class="char-label">Resistance</h4>
              <p class="char-text mb-0">HR: ToMV:0-2; Fol: 1,2; Ve/Vd;<br>IR: TYLCV</p>
            </div>

            <div class="char-block mb-4">
              <h4 class="char-lined-title">Plant</h4>
              <ul class="char-list">
                <li>Strong vigor that provides good leaf coverage.</li>
                <li>Very high productivity with good fruit setting.</li>
                <li>Early matured variety.</li>
              </ul>
            </div>

            <div class="char-block mb-4">
              <h4 class="char-lined-title">Fruit</h4>
              <ul class="char-list">
                <li>Long shelf life on plant and post harvest.</li>
                <li>Nice shiny attractive deep red color.</li>
                <li>Average fruit size: 140 - 160 grams.</li>
              </ul>
            </div>
          </div>

          <div class="col-md-6 d-md-flex flex-md-column">
            <img :src="'/img/' + product.image" :alt="product.title" class="img-fluid main-product-image mb-0">

            <div class="d-flex justify-content-end mb-4 mt-3">
              <a
                href="#"
                class="btn btn-download-pdf d-flex align-items-center"
                @click.prevent="addToCart(product.id)"
                v-if="btnVisible === 0"
              >
                Add to cart
              </a>

              <a
                href="contact.html"
                class="btn btn-download-pdf d-flex align-items-center"
                v-if="btnVisible === 1"
                style="background-color: #3b5046; color: white;"
              >
                Go to cart
              </a>
            </div>

            <div class="mt-md-auto">
              <div class="mb-4">
                <h4 class="char-lined-title">Cycle</h4>
                <ul class="char-list">
                  <li>Spring</li>
                  <li>Fall</li>
                  <li>Winter</li>
                </ul>
              </div>
              <div class="mb-4">
                <h4 class="char-lined-title">Color</h4>
                <p class="char-text">Red</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <SiteFooter products-href="#" />
  </div>
</template>

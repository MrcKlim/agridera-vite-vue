<script setup>
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
import { useShop } from '../composables/useShop'

const {
  cart,
  contactFields,
  orderData,
  removeFromCart,
  makeOrder,
} = useShop({ loadCart: true })
</script>

<template>
  <div class="contact-page">
    <SiteHeader :white="true" />

    <div class="contact-banner">
      <img src="/images/image 7.jpg" alt="Contact Banner">
    </div>

    <section class="contact-section py-5">
      <div class="container">
        <h2 class="contact-title">Contact us</h2>
        <img src="/images/Union.svg" alt="Crosses" class="crosses-img">

        <div v-if="cart.length" class="cart-table-wrap mb-4">
          <table class="table table-bordered cart-table mb-0">
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Short Description</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in cart" :key="item.id">
                <td><img :src="'/img/' + item.image" :alt="item.title" class="cart-mini-image"></td>
                <td>{{ item.title }}</td>
                <td>{{ item.short_text }}</td>
                <td>
                  <button type="button" class="cart-remove-btn" @click="removeFromCart(item.id)">x</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p v-else-if="!orderData" class="char-text mb-4">Your cart is empty.</p>

        <div v-if="orderData" class="order-result">
          <h4 class="char-lined-title">Order sent</h4>
          <p class="char-text mb-2"><b>Name:</b> {{ orderData.name }}</p>
          <p class="char-text mb-2"><b>Company:</b> {{ orderData.company }}</p>
          <p class="char-text mb-2"><b>Position:</b> {{ orderData.position }}</p>
          <p class="char-text mb-2"><b>City:</b> {{ orderData.city }}</p>
          <p class="char-text mb-2"><b>Country:</b> {{ orderData.country }}</p>
          <p class="char-text mb-2"><b>Telephone:</b> {{ orderData.telephone }}</p>
          <p class="char-text mb-2"><b>Email:</b> {{ orderData.email }}</p>
          <p class="char-text mb-2"><b>You are a:</b> {{ orderData.role }}</p>
          <p class="char-text mb-2"><b>If other:</b> {{ orderData.other }}</p>
          <p class="char-text mb-2"><b>Interested in:</b> {{ orderData.interested }}</p>
          <p class="char-text mb-0"><b>Code:</b> {{ orderData.code }}</p>
        </div>

        <form v-else @submit.prevent="makeOrder">
          <div class="row">
            <div class="col-md-5">
              <div class="form-group">
                <label class="contact-label">Name <span class="required">*</span></label>
                <input v-model="contactFields.name" type="text" class="contact-input form-control" required>
              </div>
              <div class="form-group">
                <label class="contact-label">Company Name</label>
                <input v-model="contactFields.company" type="text" class="contact-input form-control">
              </div>
              <div class="form-group">
                <label class="contact-label">Position</label>
                <input v-model="contactFields.position" type="text" class="contact-input form-control">
              </div>
              <div class="form-group">
                <label class="contact-label">City</label>
                <input v-model="contactFields.city" type="text" class="contact-input form-control">
              </div>
              <div class="form-group">
                <label class="contact-label">Country</label>
                <input v-model="contactFields.country" type="text" class="contact-input form-control">
              </div>
              <div class="form-group">
                <label class="contact-label">Telephone</label>
                <input v-model="contactFields.telephone" type="text" class="contact-input form-control">
              </div>
              <div class="form-group">
                <label class="contact-label">Email <span class="required">*</span></label>
                <input v-model="contactFields.email" type="email" class="contact-input form-control" placeholder=" " required>
              </div>
            </div>

            <div class="col-md-6 offset-md-1">
              <div class="form-group">
                <label class="contact-label">You are a</label>
                <select v-model="contactFields.role" class="contact-input form-control contact-select">
                  <option>seed producer</option>
                  <option>distributor</option>
                  <option>farmer</option>
                  <option>other</option>
                </select>
              </div>
              <div class="form-group">
                <label class="contact-label">If other, please specify</label>
                <input v-model="contactFields.other" type="text" class="contact-input form-control">
              </div>
              <div class="form-group">
                <label class="contact-label">You are interested in</label>
                <textarea v-model="contactFields.interested" class="contact-input form-control contact-textarea"></textarea>
              </div>
              <div class="form-group">
                <label class="contact-label">Please type this code</label>
                <div class="d-flex align-items-center" style="gap: 8px;">
                  <img src="/images/image 12.png" alt="Captcha code" class="captcha-img">
                  <input v-model="contactFields.code" type="text" class="contact-input captcha-input" style="flex: 0 0 110px;">
                  <button type="submit" class="btn send-btn">Send Message</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>

    <div class="address-block text-center">
      <h5 class="address-title">Our Address</h5>
      <p class="address-text">AGRIDERA Seeds &amp; Agriculture Ltd.<br>
        PO Box 103,<br>
        Gedera 70750, Israel<br>
        Telephone: <a href="tel:+97289449222" class="address-phone">+972 8 944 9222</a></p>
    </div>

    <SiteFooter products-href="tomato.html" />
  </div>
</template>

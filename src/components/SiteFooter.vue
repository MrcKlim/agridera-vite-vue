<script setup>
defineProps({
  productsHref: { type: String, default: '#' },
})
</script>

<template>
  <footer class="footer-section">
    <div class="footer-top py-4">
      <div class="container">
        <div class="row text-center text-md-left align-items-center">
          <div class="col-md-8 mb-3 mb-md-0">
            <nav class="footer-nav">
              <a href="#">PROFILE</a>
              <a href="#">MANAGEMENT</a>
              <a :href="productsHref">PRODUCTS</a>
              <a href="#">R&amp;D</a>
              <a href="#">LINKS</a>
              <a href="#">SITEMAP</a>
              <a href="contact.html">CONTACT</a>
            </nav>
          </div>
          <div class="col-md-4 text-center text-md-right social-icons">
            <a href="#"><img src="/images/Ico_in.png" alt="LinkedIn"></a>
            <a href="#"><img src="/images/Ico_inst.png" alt="Instagram"></a>
            <a href="#"><img src="/images/Ico_tube.png" alt="YouTube"></a>
            <a href="#"><img src="/images/Ico_tw.png" alt="Twitter"></a>
            <a href="#"><img src="/images/Ico_fb.png" alt="Facebook"></a>
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

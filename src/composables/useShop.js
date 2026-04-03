import { ref, reactive, onMounted } from 'vue'
import { products } from '../data/products'

export function useShop(options = {}) {
  const { loadProduct = false, loadCart = false } = options

  const product = ref({})
  const cart = ref([])
  const btnVisible = ref(0)
  const contactFields = reactive({})
  const orderData = ref(null)

  function getProduct() {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '')
      const found = products.find((p) => String(p.id) === String(id))
      if (found) product.value = found
    }
  }

  function getCart() {
    cart.value = []
    const raw = window.localStorage.getItem('cart')
    if (!raw) return
    const cartIds = raw.split(',')
    for (let i = 0; i < cartIds.length; i++) {
      const found = products.find((p) => String(p.id) === cartIds[i])
      if (found) cart.value.push(found)
    }
  }

  function addToCart(id) {
    let cartIds = []
    if (window.localStorage.getItem('cart')) {
      cartIds = window.localStorage.getItem('cart').split(',')
    }
    if (cartIds.indexOf(String(id)) === -1) {
      cartIds.push(String(id))
      window.localStorage.setItem('cart', cartIds.join(','))
      btnVisible.value = 1
      getCart()
    }
  }

  function removeFromCart(id) {
    cart.value = cart.value.filter((item) => item.id !== id)
    const cartIds = cart.value.map((item) => String(item.id))
    if (cartIds.length) {
      window.localStorage.setItem('cart', cartIds.join(','))
    } else {
      window.localStorage.removeItem('cart')
    }
    if (product.value && product.value.id === id) {
      btnVisible.value = 0
    }
  }

  function checkInCart() {
    if (product.value && product.value.id && window.localStorage.getItem('cart')) {
      const cartIds = window.localStorage.getItem('cart').split(',')
      if (cartIds.indexOf(String(product.value.id)) !== -1) {
        btnVisible.value = 1
      }
    }
  }

  function makeOrder() {
    orderData.value = {
      name: contactFields.name || '',
      company: contactFields.company || '',
      position: contactFields.position || '',
      city: contactFields.city || '',
      country: contactFields.country || '',
      telephone: contactFields.telephone || '',
      email: contactFields.email || '',
      role: contactFields.role || '',
      other: contactFields.other || '',
      interested: contactFields.interested || '',
      code: contactFields.code || '',
    }
    cart.value = []
    window.localStorage.removeItem('cart')
  }

  onMounted(() => {
    if (loadProduct) {
      getProduct()
      checkInCart()
    }
    if (loadCart) {
      getCart()
    }
  })

  return {
    products,
    product,
    cart,
    btnVisible,
    contactFields,
    orderData,
    getProduct,
    getCart,
    addToCart,
    removeFromCart,
    checkInCart,
    makeOrder,
  }
}

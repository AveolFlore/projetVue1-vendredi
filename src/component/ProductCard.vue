<script setup>

import { ref, onMounted } from "vue"

const produits = ref([])
const loading = ref(true)
const error = ref(null)

const fetchProduits = async () => {
  try {
    const res = await fetch("https://dummyjson.com/products")
    if (!res.ok) throw new Error("Erreur lors du chargement")
    const data = await res.json()
    produits.value = data.products
    console.log(produits.value);
    
  } catch (err) {
    error.value = err.message
  } 
    loading.value = false

}

onMounted(fetchProduits)
</script>


<template>
  <section class="products">

    <h2>Nos Produits</h2>
    <p v-if="loading">Chargement des produits...</p>
    <p v-if="error" class="error">{{ error }}</p>

    <div v-if="!loading && !error" class="product-grid">
      <div class="card" v-for="p in produits" :key="p.id">
        <img :src="p.images" :alt="p.title" />

        <h3>{{ p.title }}</h3>
        <div class="cardRating">
            <p class="price">{{ p.price }} $</p>
        <p><span>⭐{{ p.rating }}</span></p>
        </div>

        <RouterLink
          :to="{ name: 'product-details', params: { id: p.id } }"
          class="btn small"
        >
          Plus de détails
        </RouterLink>
      </div>
    </div>

  </section>
</template>



<style scoped>
img{
    width: 120px;
    height: 100px;
}
.btn {
  background: #38bdf8;
  color: #111827;
  padding: 12px 25px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.2s ease, background 0.3s;
}

.btn:hover {
  background: #0ea5e9;
  transform: translateY(-2px);
}
.btn.small {
  padding: 8px 16px;
  font-size: 14px;
}

/* PRODUCTS */
.products {
    width: 900px;
  margin-top: 60px;
}

.products h2 {
  text-align: center;
  font-size: 28px;
  margin-bottom: 30px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 25px;
}

.card {
    width: 245px;
  background: #ffffff;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 6px 15px rgba(0,0,0,0.08);
  transition: transform 0.2s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.image-placeholder {
  height: 140px;
  background: #e5e7eb;
  border-radius: 8px;
  margin-bottom: 15px;
}

.card h3 {
  margin: 10px 0 5px;
}

.price {
  font-weight: bold;
  color: #0ea5e9;
  margin-bottom: 15px;
}

.cardRating{
    display: flex;
    justify-content: space-around;
    /* flex-direction: ; */
}
</style>
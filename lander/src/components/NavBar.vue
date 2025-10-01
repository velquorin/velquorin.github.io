<template>
  <nav>
    <div class="nav-left">
      <img src="/logo.svg" alt="Velquorin logo" class="logo" @click="goHome" role="link" tabindex="0" @keydown.enter="goHome"/>

      <div class="nav-center" role="navigation" aria-label="Primary">
        <router-link to="/">Home</router-link>
        <router-link to="/installation">Installation</router-link>
        <router-link to="/overview">Overview</router-link>
      </div>
    </div>

    <div class="nav-right">
      <a href="https://github.com/velquorin/client/releases" target="_blank" rel="noopener noreferrer">Downloads ↗</a>
      <a href="https://github.com/velquorin/client/" target="_blank" rel="noopener noreferrer">Source code ↗</a>
      <a href="/handbook/intro/introduction.html" target="_blank" rel="noopener noreferrer">Handbook ↗</a>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push("/");
    }
  }
};
</script>

<style>
.logo {
  cursor: pointer;
}
</style>

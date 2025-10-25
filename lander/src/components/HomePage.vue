<template>
  <main>
    <div class="home-content" aria-live="polite">
      <h1>{{ $t('home.title') }}</h1>
      <p>{{ $t('home.description') }}</p>

      <div class="home-call-to-action">
        <router-link class="primary-button" to="/installation">{{ $t('home.installationButton') }}</router-link>
        <!--suppress HtmlUnknownTarget -->
        <router-link class="secondary-button" to="/overview">{{ $t('home.overviewButton') }}</router-link>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
</script>

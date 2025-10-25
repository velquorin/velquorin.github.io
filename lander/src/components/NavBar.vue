<template>
  <nav>
    <div class="nav-left">
      <img src="/logo.svg" alt="Velquorin logo" class="logo" @click="goHome" role="link" tabindex="0" @keydown.enter="goHome"/>

      <div class="nav-center" role="navigation" aria-label="Primary">
        <router-link to="/">{{ $t('nav.home') }}</router-link>
        <router-link to="/installation">{{ $t('nav.installation') }}</router-link>
        <router-link to="/overview">{{ $t('nav.overview') }}</router-link>
      </div>
    </div>

    <div class="nav-right">
      <LanguageChooser />
      <a href="https://github.com/velquorin/client/releases" target="_blank" rel="noopener noreferrer">{{ $t('nav.downloads') }} <i class="fas fa-external-link-alt"></i></a>
      <a href="https://github.com/velquorin/client/" target="_blank" rel="noopener noreferrer">{{ $t('nav.sourceCode') }} <i class="fas fa-external-link-alt"></i></a>
      <a :href="handbookUrl" target="_blank" rel="noopener noreferrer">{{ $t('nav.handbook') }} <i class="fas fa-external-link-alt"></i></a>
    </div>
  </nav>
</template>

<script>
import LanguageChooser from './LanguageChooser.vue';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

export default {
  components: {
    LanguageChooser
  },
  setup() {
    const { locale } = useI18n();

    const handbookUrl = computed(() => {
      return locale.value === 'ru'
        ? '/handbook/ru/intro/introduction.html'
        : '/handbook/intro/introduction.html';
    });

    return {
      handbookUrl
    };
  },
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

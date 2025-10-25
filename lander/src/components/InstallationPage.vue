<template>
  <main class="installation-root">
    <article class="installation-content" aria-live="polite">
      <header class="installation-header">
        <h1>{{ $t('installation.title') }}</h1>
        <p class="lead">
          {{ $t('installation.lead') }}
          <a :href="handbookInstallUrl" target="_blank" rel="noopener noreferrer">{{ $t('installation.handbook') }} <i class="fas fa-external-link-alt"></i></a>.
        </p>
      </header>

      <section class="section" id="prerequisites">
        <h2>{{ $t('installation.prerequisites.title') }}</h2>

        <div class="callout tip" role="note" aria-label="Tip">
          <strong>{{ $t('installation.prerequisites.tip') }}</strong> {{ $t('installation.prerequisites.tipContent') }}
        </div>

        <ul class="prerequisites-list">
          <li>
            <strong>{{ $t('installation.prerequisites.launcher') }}</strong> {{ $t('installation.prerequisites.launcherDescription') }}
          </li>
          <li>
            <strong>{{ $t('installation.prerequisites.java') }}</strong>
            {{ $t('installation.prerequisites.javaDescription') }}
            <a href="https://www.azul.com/downloads/?version=java-21-lts&package=jdk#zulu" target="_blank" rel="noopener noreferrer">{{ $t('installation.prerequisites.azulDownloads') }} <i class="fas fa-external-link-alt"></i></a>
          </li>
          <li>
            <strong>{{ $t('installation.prerequisites.fabricLoader') }}</strong> {{ $t('installation.prerequisites.fabricLoaderDescription') }}
          </li>
          <li>
            <strong>{{ $t('installation.prerequisites.fabricApi') }}</strong> {{ $t('installation.prerequisites.fabricApiDescription') }} <a href="https://modrinth.com/mod/fabric-api" target="_blank" rel="noopener noreferrer">{{ $t('installation.prerequisites.fabricApiLink') }} <i class="fas fa-external-link-alt"></i></a>. {{ $t('installation.prerequisites.fabricApiNote') }}
          </li>
        </ul>
      </section>

      <section class="section" id="downloads">
        <h2>{{ $t('installation.downloads.title') }}</h2>

        <p>
          {{ $t('installation.downloads.githubReleases') }}
          <a href="https://github.com/velquorin/client/releases" target="_blank" rel="noopener noreferrer">{{ $t('installation.downloads.githubReleasesLink') }} <i class="fas fa-external-link-alt"></i></a>
        </p>

        <br>

        <div class="download-explanation">
          <p>
            {{ $t('installation.downloads.channelsIntro') }}
          </p>
          <ul>
            <li><strong>{{ $t('installation.downloads.stableChannel') }}</strong> {{ $t('installation.downloads.stableDescription') }}</li>
            <li><strong>{{ $t('installation.downloads.nightlyChannel') }}</strong> {{ $t('installation.downloads.nightlyDescription') }} <strong>{{ $t('installation.downloads.nightlyNote') }}</strong></li>
          </ul>

          <br>

          <p>
            {{ $t('installation.downloads.contentIntro') }}
          </p>
          <ul>
            <li><strong>{{ $t('installation.downloads.mod') }}</strong> {{ $t('installation.downloads.modDescription') }}</li>
            <li><strong>{{ $t('installation.downloads.modpack') }}</strong> {{ $t('installation.downloads.modpackDescription') }}</li>
          </ul>
        </div>
      </section>
    </article>
  </main>
</template>

<style scoped>
.installation-root {
  display: flex;
  justify-content: center;
  padding: 2.25rem;
}

.installation-content {
  width: 100%;
  max-width: 920px;
  background: transparent;
  color: var(--foreground-primary);
  text-align: left;
  padding: 0;
}

.installation-header h1 {
  font-size: 2.25rem;
  color: var(--foreground-accent);
  margin-bottom: 0.65rem;
  font-weight: 600;
}

.lead {
  font-size: 1.125rem;
  line-height: 1.45;
  color: var(--foreground-primary);
  margin-bottom: 1rem;
}

.section {
  margin-top: 2rem;
}

.section h2 {
  font-size: 1.5rem;
  color: var(--foreground-accent);
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.section h3 {
  font-size: 1.125rem;
  color: var(--foreground-accent);
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.section p {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--foreground-secondary);
  margin-bottom: -0.2rem;
}

.prerequisites-list li {
  list-style: none;
  margin-bottom: 0.5rem;
}

.download-explanation li {
  list-style: none;
  margin-bottom: 0.35rem;
}

.download-explanation ul li::before {
  content: "-";
  display: inline-block;
  width: 1.2em;
}

.download-explanation p {
  margin-bottom: 0.4rem;
}

.callout {
  border-radius: 8px;
  padding: 0.6rem 0.9rem;
  margin: 0.5rem 0 1rem 0;
  font-size: 0.98rem;
}

.callout.tip {
  background: rgba(172,172,205,0.04);
  border: 1px solid rgba(172,172,205,0.06);
  color: var(--foreground-primary);
}

.download-block h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.125rem;
  color: var(--foreground-accent);
  font-weight: 600;
}

.installation-content a {
  display: inline-block;
  position: relative;
  line-height: 1.4;
  font-weight: 400;
  color: var(--foreground-accent);
  text-decoration: none;
  padding: 0.2em 0;
}

.installation-content a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.1em;
  background-color: var(--foreground-accent);
  opacity: 1;
  transform: scale(0);
  transform-origin: center;
  transition: transform 300ms ease;
}

.installation-content a:hover::after,
.installation-content a:focus::after {
  transform: scale(1);
}
</style>
<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const handbookInstallUrl = computed(() => {
  return locale.value === 'ru'
    ? '/handbook/ru/intro/installation.html'
    : '/handbook/intro/installation.html';
});
</script>
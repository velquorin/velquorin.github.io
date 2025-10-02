<template>
  <main class="installation-root">
    <article class="installation-content" aria-live="polite">
      <header class="installation-header">
        <h1>Installation</h1>
        <p class="lead">
          A quick installation guide. For a friendlier, in-depth one see
          <a href="/handbook/intro/installation.html" target="_blank" rel="noopener noreferrer">handbook <i class="fas fa-external-link-alt"></i></a>.
        </p>
      </header>

      <section class="section" id="prerequisites">
        <h2>Prerequisites</h2>

        <div class="callout tip" role="note" aria-label="Tip">
          <strong>Tip!</strong> If you're already somewhat experienced with Minecraft modding, you can skip right to Downloads.
        </div>

        <ul class="prerequisites-list">
          <li>
            <strong>Launcher</strong> Most will work, but one suited for modding (for example, Modrinth or Prism) would give you the best experience, while some basic ones (official Minecraft Launcher) will be a pain in the ass to use.
          </li>
          <li>
            <strong>Java 21 (or above)</strong>
            I personally recommend Azul, but most OpenJDK distributions will work.
            <a href="https://www.azul.com/downloads/?version=java-21-lts&package=jdk#zulu" target="_blank" rel="noopener noreferrer">Azul Zulu downloads <i class="fas fa-external-link-alt"></i></a>
          </li>
          <li>
            <strong>Fabric Loader</strong> Required to run the mod/pack. Install via your launcher.
          </li>
          <li>
            <strong>Fabric API</strong> If you install the standalone mod (not the modpack), make sure to install the <a href="https://modrinth.com/mod/fabric-api" target="_blank" rel="noopener noreferrer">Fabric API <i class="fas fa-external-link-alt"></i></a>. Modpack already inculdes it.
          </li>
        </ul>
      </section>

      <section class="section" id="downloads">
        <h2>Downloads</h2>

        <p>
          Find the list of releases on the GitHub releases page:
          <a href="https://github.com/velquorin/client/releases" target="_blank" rel="noopener noreferrer">GitHub releases <i class="fas fa-external-link-alt"></i></a>
        </p>

        <br>

        <div class="download-explanation">
          <p>
            Releases are split into two channels:
          </p>
          <ul>
            <li><strong>Stable</strong> are tested builds expected to be stable for general use.</li>
            <li><strong>Nightly</strong> are experimental builds that may contain untested changes and issues. <strong>They are marked as pre-releases on GitHub.</strong></li>
          </ul>

          <br>

          <p>
            Each release contains:
          </p>
          <ul>
            <li><strong>Mod</strong> is the core Velquorin mod containing widgets, game tweaks, enhancements and more.</li>
            <li><strong>Modpack</strong> is the core mod combined with a curated list of quality-of-life mods and tweaks.</li>
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
</script>
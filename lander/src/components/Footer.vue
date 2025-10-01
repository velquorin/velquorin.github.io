<template>
  <footer class="site-footer" role="contentinfo">
    <div class="footer-compact">
      <span class="copyright">© Clemenside, 2025.</span>
      <button
          class="license-toggle"
          @click="toggleExpanded"
          :aria-expanded="isExpanded.toString()"
          aria-controls="footer-details"
          type="button"
      >
        Licensing and credits (click to reveal)
      </button>
    </div>

    <div
        class="footer-details"
        :class="{ open: isExpanded }"
        id="footer-details"
        :aria-hidden="(!isExpanded).toString()"
    >
      <p>
        Logo is a derivative of the
        <a target="_blank" rel="noopener noreferrer" href="https://www.onlinewebfonts.com/icon/34775">
          "Butterfly Wings couple"
        </a>
        work from OnlineWebFonts.com, licensed under
        <a target="_blank" rel="noopener noreferrer" href="LICENSE-OnlineWebFonts">CC-BY-4.0</a>
        <a target="_blank" rel="noopener noreferrer" href="NOTICE-OnlineWebFonts">(notice file)</a>
      </p>
      <p>
        Client licensed under GPL 3.0. Website, handbook and examples are in public domain. Not affiliated with Mojang or Microsoft.
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      isExpanded: false
    };
  },
  methods: {
    toggleExpanded() {
      this.isExpanded = !this.isExpanded;
    }
  }
};
</script>

<style scoped>
.site-footer {
  padding: 1.0rem;
  text-align: center;
  border-top: 1px solid var(--border-strong);
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--foreground-primary);
}

.footer-compact {
  display: flex;
  gap: 0.25rem;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.license-toggle {
  background: transparent;
  padding: 0.35rem 0.6rem;
  border: none;
  font-weight: 600;
  cursor: pointer;
  color: var(--foreground-accent);
}

.footer-details {
  margin-top: 0.25rem;
  max-height: 0;
  overflow: hidden;
  transition: max-height 260ms ease, opacity 260ms ease;
  opacity: 0;
}

.footer-details.open {
  max-height: 480px;
  opacity: 1;
}

.footer-details p {
  margin: 0.05rem 0;
  font-size: 0.9rem;
  color: var(--foreground-primary);
}

footer a {
  display: inline;
  position: relative;
  line-height: 1.4;
  font-weight: 400;
  color: var(--foreground-accent);
  text-decoration: none;
  padding: 0.2em 0;
}

footer a::after {
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

footer a:hover::after,
footer a:focus::after {
  transform: scale(1);
}

@media (max-width: 480px) {
  .site-footer {
    padding: 0.5rem 0.75rem;
    font-size: 0.85rem;
    line-height: 1.3;
  }

  .license-toggle {
    padding: 0.2rem 0.5rem;
    border-radius: 6px;
    font-size: 0.9rem;
  }

  .footer-details p {
    font-size: 0.85rem;
  }
}
</style>

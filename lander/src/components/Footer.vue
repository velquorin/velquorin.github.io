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

    <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave"
    >
      <div
          v-if="isExpanded"
          class="footer-details"
          id="footer-details"
          role="region"
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
    </transition>
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
    },

    beforeEnter(element) {
      element.style.height = '0px';
      element.style.opacity = '0';
      element.style.transform = 'translateY(-4px)';
      element.style.overflow = 'hidden';
    },
    enter(element) {
      const targetHeight = `${element.scrollHeight}px`;
      element.style.transition = 'height 260ms ease, opacity 200ms ease, transform 260ms ease';
      requestAnimationFrame(() => {
        element.style.height = targetHeight;
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      });
    },
    afterEnter(element) {
      element.style.height = 'auto';
      element.style.transition = '';
      element.style.overflow = '';
      element.style.transform = '';
      element.style.opacity = '';
    },
    beforeLeave(element) {
      element.style.height = `${element.scrollHeight}px`;
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
      element.style.overflow = 'hidden';
    },
    leave(element) {
      element.style.transition = 'height 220ms ease, opacity 180ms ease, transform 220ms ease';
      requestAnimationFrame(() => {
        element.style.height = '0px';
        element.style.opacity = '0';
        element.style.transform = 'translateY(-4px)';
      });
    },
    afterLeave(element) {
      element.style.transition = '';
      element.style.height = '';
      element.style.opacity = '';
      element.style.transform = '';
      element.style.overflow = '';
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
  overflow: hidden;
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

@media (prefers-reduced-motion: reduce) {
  .footer-details {
    transition: none !important;
  }
}
</style>

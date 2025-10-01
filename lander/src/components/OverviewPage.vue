<template>
  <main class="overview-root">
    <article class="overview-content" aria-live="polite">
      <header class="overview-header">
        <h1>Brief introduction</h1>
        <p class="lead">
          Velquorin (pronounced /ˈvɛl.kwɔː.rɪn/) is an open-source Minecraft utility mod and modpack, containing lots of utility features, tweaks and other sorts of enhancements.
        </p>
      </header>

      <section class="section" id="features">
        <h2>Feature overview</h2>
        <p>Generally most of the stuff you'd expect from a utility mod (lots of info widgets including FPS, CPS, both in-game and IRL clock, resource load and more; waypoints; gamma; Discord RPC) is present in this project.</p>
        <p>However, there are some unique (to Minecraft mods) features that I can highlight.</p>
        <ul class="feature-list">
          <li>
            <strong>Ambiance</strong>
            <ul>
              <li>Visual customization (up to a full override) of the world colors and effects.</li>
            </ul>
          </li>
          <li>
            <strong>View Model</strong>
            <ul>
              <li>Visual customization of the hand model (scale and position/offset in particular).</li>
            </ul>
          </li>
        </ul>
      </section>

      <section class="section" id="faq">
        <h2>Common questions</h2>
        <div class="faq-list">
          <div
              v-for="(item, index) in faqItems"
              :key="index"
              class="faq-item"
              :class="{ 'is-open': item.isOpen }"
          >
            <button
                class="faq-question"
                @click="toggleFaq(index)"
                :aria-expanded="item.isOpen"
            >
              <span>{{ item.question }}</span>
              <span class="faq-icon">{{ item.isOpen ? '−' : '+' }}</span>
            </button>
            <div class="faq-answer" v-show="item.isOpen" v-html="item.answer" />
          </div>
        </div>
      </section>
    </article>
  </main>
</template>

<script setup>
import { ref } from 'vue';

const faqItems = ref([
  {
    question: "Which Minecraft versions are supported?",
    answer: "Velquorin focuses on the latest versions of Minecraft. Legacy support (1.8.9, 1.12.2) may be added later.",
    isOpen: false
  },
  {
    question: "Can I use my existing mods with Velquorin?",
    answer: "Yes, Velquorin works as a modpack, so you can usually add your own mods. Just note that <a href=\"/handbook/reference/compatibility.html\" target=\"_blank\" rel=\"noopener noreferrer\">some mods may be incompatible ↗</a> with Velquorin.",
    isOpen: false
  },
  {
    question: "Why would I use this over Lunar or Badlion?",
    answer: "Generally? Freedom, launcher agnosticism and flexibility. However, everyone is different, so for example traits that put Velquorin in favor in one person may push away others (design language, for example). The choice is yours, you can always try it out to see if you like it!<br><br>tl;dr you might like it, give it a try.",
    isOpen: false
  },
  {
    question: "Can I get banned for using Velquorin?",
    answer: "No, probably not. Velquorin is not designed to give you any sort of unfair advantage. That said, there were instances of servers banning certain mods (for example, Hypixel banning Freelook), so you have account for that as well.",
    isOpen: false
  },
  {
    question: "Why is there a separate handbook?",
    answer: "The handbook goes into detail about setup, features, troubleshooting and more. To keep this overview clean, it lives separately from it.",
    isOpen: false
  },
  {
    question: "I'm having a problem with Velquorin! It's crashing / not doing what I expect it to!",
    answer: "Firstly, please consult with the <a href=\"/handbook/intro/installation.html\" target=\"_blank\" rel=\"noopener noreferrer\">handbook ↗</a>, it might contain the fix for your problem. However, if you can't find one, you <a href=\"https://github.com/velquorin/client/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">can open an issue in our repository ↗</a>.",
    isOpen: false
  }
]);

const toggleFaq = (index) => {
  faqItems.value[index].isOpen = !faqItems.value[index].isOpen;
};
</script>

<style scoped>
.overview-root {
  display: flex;
  justify-content: center;
  padding: 2.25rem;
}

.overview-content {
  width: 100%;
  max-width: 920px;
  background: transparent;
  color: var(--foreground-primary);
  text-align: left;
  padding: 0;
}

.overview-content hr {
  color: var(--border-subtle);
  margin-top: 2rem;
  margin-bottom: 1.2rem;
}

.overview-header h1 {
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

.section p {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--foreground-secondary);
  margin-bottom: 0.75rem;
}

.feature-list {
  list-style: none;
  padding-left: 0;
  font-size: 1rem;
  line-height: 1.6;
}

.feature-list > li {
  padding: 0.35rem 0;
  color: var(--foreground-secondary);
}

.feature-list > li::before {
  content: "";
  color: var(--foreground-accent);
  font-weight: bold;
  display: inline-block;
}

.feature-list strong {
  color: var(--foreground-primary);
  font-weight: 600;
}

.feature-list ul {
  list-style: none;
  padding-left: 1.2em;
  margin-top: 0.35rem;
}

.feature-list ul li {
  padding: 0.2rem 0;
  color: var(--muted);
  font-size: 0.98rem;
}

.feature-list ul li::before {
  content: "-";
  color: var(--foreground-primary);
  display: inline-block;
  width: 1.2em;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1.25rem;
}

.faq-item {
  background: rgba(139,139,164,0.02);
  border: 1px solid var(--border-subtle);
  border-radius: 8px;
  overflow: hidden;
  transition: border-color 0.2s;
}

.faq-item.is-open {
  border-color: var(--border-strong);
}

.faq-question {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem 0.8rem;
  background: transparent;
  border: none;
  color: var(--foreground-primary);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  text-align: left;
  transition: color 0.2s;
}

.faq-question:hover {
  color: var(--foreground-accent);
}

.faq-icon {
  font-size: 1.5rem;
  color: var(--foreground-accent);
  font-weight: 300;
  min-width: 1.5rem;
  text-align: center;
}

.faq-answer {
  padding: 0 1rem 0.8rem 1rem;
  color: var(--foreground-secondary);
  font-size: 0.98rem;
  line-height: 1.6;
  animation: fadeIn 0.2s ease-in;
}

.faq-answer p {
  margin: 0;
  font-size: 0.98rem;
  line-height: 1.6;
  color: var(--foreground-secondary);
}

.overview-content a {
  display: inline-block;
  position: relative;
  line-height: 1.4;
  font-weight: 400;
  color: var(--foreground-accent);
  text-decoration: none;
  padding: 0.2em 0;
}

.overview-content a::after {
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

.overview-content a:hover::after,
.overview-content a:focus::after {
  transform: scale(1);
}

/* chatgpt ass fix */
.faq-answer ::v-deep a {
  display: inline-block;
  position: relative;
  line-height: 1.4;
  font-weight: 400;
  color: var(--foreground-accent);
  text-decoration: none;
  padding: 0.2em 0;
}

.faq-answer ::v-deep a::after {
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

.faq-answer ::v-deep a:hover::after,
.faq-answer ::v-deep a:focus::after,
.faq-answer ::v-deep a:focus-visible::after {
  transform: scale(1);
}

@media (prefers-reduced-motion: reduce) {
  .faq-answer ::v-deep a::after {
    transition: none;
    transform: scale(1);
  }
}
</style>
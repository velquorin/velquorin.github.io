<template>
  <div class="language-chooser">
    <button class="language-toggle" @click="toggleDropdown" :aria-expanded="isOpen.toString()" aria-controls="language-dropdown" type="button">
      <span class="current-language">{{ currentLanguageLabel }}</span>
      <span class="chevron" :class="{ 'is-open': isOpen }" aria-hidden="true"><i class="fa-solid fa-sort-down"></i></span>
    </button>

    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" @before-leave="beforeLeave" @leave="leave" @after-leave="afterLeave">
      <div v-if="isOpen" class="language-dropdown" id="language-dropdown" role="menu">
        <button v-for="lang in languages" :key="lang.code" class="language-option" :class="{ 'is-active': currentLocale === lang.code }" @click="changeLanguage(lang.code)" role="menuitem" type="button">
          <span class="language-label">{{ lang.label }}</span>
          <span v-if="currentLocale === lang.code" class="checkmark" aria-hidden="true"><i class="fa-solid fa-check"></i></span>
        </button>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const languages = [
  { code: 'en', label: 'English' },
  { code: 'ru', label: 'Русский' }
];

const isOpen = ref(false);
const currentLocale = computed(() => locale.value);
const currentLanguageLabel = computed(() => {
  const lang = languages.find(l => l.code === currentLocale.value);
  return lang ? `${lang.label}` : 'EN';
});

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const changeLanguage = (langCode) => {
  locale.value = langCode;
  localStorage.setItem('velquorin-locale', langCode);
  isOpen.value = false;
};

const handleClickOutside = (event) => {
  const dropdown = document.querySelector('.language-chooser');
  if (dropdown && !dropdown.contains(event.target)) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});

function beforeEnter(element) {
  element.style.height = '0px';
  element.style.opacity = '0';
  element.style.transform = 'translateY(-8px)';
  element.style.overflow = 'hidden';
}

function enter(element) {
  const targetHeight = `${element.scrollHeight}px`;
  element.style.transition = 'height 240ms ease, opacity 200ms ease, transform 240ms ease';
  requestAnimationFrame(() => {
    element.style.height = targetHeight;
    element.style.opacity = '1';
    element.style.transform = 'translateY(0)';
  });
}

function afterEnter(element) {
  element.style.height = 'auto';
  element.style.transition = '';
  element.style.overflow = '';
  element.style.transform = '';
  element.style.opacity = '';
}

function beforeLeave(element) {
  element.style.height = `${element.scrollHeight}px`;
  element.style.opacity = '1';
  element.style.transform = 'translateY(0)';
  element.style.overflow = 'hidden';
}

function leave(element) {
  element.style.transition = 'height 200ms ease, opacity 160ms ease, transform 200ms ease';
  requestAnimationFrame(() => {
    element.style.height = '0px';
    element.style.opacity = '0';
    element.style.transform = 'translateY(-8px)';
  });
}

function afterLeave(element) {
  element.style.transition = '';
  element.style.height = '';
  element.style.opacity = '';
  element.style.transform = '';
  element.style.overflow = '';
}
</script>

<style scoped>
.language-chooser {
  position: relative;
  display: inline-block;
}

.language-toggle {
  font-family: 'Inter', sans-serif;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: transparent;
  color: var(--foreground-primary);
  padding: 0.35rem 0.6rem;
  border-radius: 8px;
  border: 1px solid transparent;
  font-weight: 500;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.language-toggle:hover {
  color: var(--foreground-accent);
  border-color: var(--border-strong);
  transform: translateY(-2px);
}

.current-language {
  white-space: nowrap;
}

.chevron {
  font-size: 0.7rem;
  transition: transform 0.24s ease;
  display: inline-block;
}

.chevron.is-open {
  transform: rotate(180deg);
}

.language-dropdown {
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  min-width: 160px;
  background: var(--background-primary);
  border: 1px solid var(--border-strong);
  border-radius: 8px;
  overflow: hidden;
  z-index: 1000;
}

.language-option {
  font-family: 'Inter', sans-serif;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.6rem 0.8rem;
  background: transparent;
  border: none;
  color: var(--foreground-secondary);
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
  position: relative;
}

.language-option:hover {
  background: rgba(172,172,205,0.08);
  color: var(--foreground-accent);
}

.language-option.is-active {
  background: rgba(172,172,205,0.12);
  color: var(--foreground-accent);
}

.language-label {
  flex: 1;
}

.checkmark {
  color: var(--foreground-accent);
  font-weight: 600;
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .language-toggle {
    padding: 0.3rem 0.5rem;
    font-size: 0.9rem;
  }

  .current-language {
    display: none;
  }

  .language-toggle::before {
    content: '🌐';
    font-size: 1.2rem;
  }

  .language-dropdown {
    right: auto;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
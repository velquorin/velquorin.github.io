<template>
  <div id="app">
    <NavBar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Footer from "./components/Footer.vue";
import HomePage from "./components/HomePage.vue";

export default {
  name: 'App',
  components: { HomePage, Footer, NavBar }
};
</script>

<style>
:root {
  --background-primary: #1A1A1F;
  --background-elevated: #292931;
  --foreground-primary: #8B8BA4;
  --foreground-secondary: #9B9BAE;
  --muted: #787893;
  --foreground-accent: #ACACCD;
  --border-subtle: rgba(139,139,164,0.04);
  --border-strong: rgba(120,120,147,0.10);
  --overlay-subtle: rgba(41,41,49,0.02);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background-color: var(--background-primary);
  color: var(--foreground-secondary);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

#app {
  flex: 1;
  display: flex;
  flex-direction: column;
}

nav {
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  border-bottom: 1px solid var(--border-strong);
  background: var(--overlay-subtle);
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo {
  display: inline-block;
  width: 36px;
  height: 36px;
  object-fit: contain;
}

.nav-center {
  display: flex;
  gap: 1rem;
  margin-left: 1rem;
}

a {
  text-decoration: none;
  color: var(--foreground-primary);
}

nav a {
  color: var(--foreground-secondary);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.18s;
  padding: 0.25rem 0.4rem;
}

nav a:hover,
nav a.active {
  color: var(--foreground-accent);
}

.nav-right {
  display: flex;
  gap: 0.75rem;
}

.nav-right a {
  color: var(--foreground-primary);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  padding: 0.35rem 0.6rem;
  border-radius: 8px;
  border: 1px solid transparent;
}

.nav-right a:hover {
  color: var(--foreground-accent);
  border-color: var(--border-strong);
}

main {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.home-content {
  text-align: center;
  max-width: 920px;
}

.home-content h1 {
  font-size: 2.3rem;
  color: var(--foreground-accent);
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.home-content p {
  font-size: 1.225rem;
  line-height: 1.4;
  font-weight: 400;
  color: var(--foreground-primary);
  margin-bottom: 1.25rem;
}

.home-call-to-action {
  display: inline-flex;
  gap: 0.75rem;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;
}

.primary-button {
  display: inline-block;
  background: var(--background-elevated);
  color: var(--foreground-primary);
  padding: 0.6rem 1.25rem;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.12s;
  border: 1px solid var(--border-strong);
}

.primary-button:hover {
  background: #34343A;
}

.secondary-button {
  display: inline-block;
  background: transparent;
  color: var(--foreground-primary);
  padding: 0.55rem 1rem;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.12s, border-color 0.12s;
  border: 1px solid transparent;
}

.secondary-button:hover {
  border-color: var(--border-strong);
  background: rgba(255,255,255,0.015);
}

.downloads-content {
  width: 100%;
  max-width: 880px;
}

.downloads-content h1 {
  font-size: 2.25rem;
  color: var(--foreground-accent);
  margin-bottom: 1.5rem;
  text-align: center;
  font-weight: 600;
}

.download-block {
  background: rgba(139,139,164,0.02);
  border: 1px solid var(--border-subtle);
  border-radius: 10px;
  padding: 0.75rem 0;
  margin-bottom: 1.25rem;
  overflow: hidden;
}

.download-block h2 {
  color: var(--foreground-accent);
  font-size: 1.125rem;
  margin: 0 0 0.5rem 1rem;
  font-weight: 600;
}

.download-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem 0.5rem;
  gap: 1rem;
  border-top: 1px solid var(--border-subtle);
}

.download-item:first-of-type {
  border-top: none;
}

.download-name {
  font-size: 1rem;
  color: var(--foreground-secondary);
  margin-left: 0.5rem;
  word-break: break-word;
}

.download-btn {
  background: var(--background-elevated);
  color: var(--foreground-primary);
  padding: 0.45rem 1rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: background 0.14s;
  margin-right: 0;
  border: 1px solid var(--border-strong);
  cursor: pointer;
  font-size: 1rem;
}

.download-btn:hover {
  background: #3A3A42;
}

footer {
  padding: 1.5rem;
  text-align: center;
  border-top: 1px solid var(--border-strong);
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--foreground-primary);
}

@media (max-width: 768px) {
  .home-content h1 {
    font-size: 2rem;
  }

  .home-content p {
    font-size: 1rem;
  }

  .downloads-content h1 {
    font-size: 1.75rem;
  }

  .downloads-content p {
    font-size: 1rem;
  }

  .download-item {
    flex-direction: column;
    gap: 0.75rem;
    align-items: stretch;
    padding: 0.7rem 0.5rem;
  }

  .download-btn {
    width: 100%;
    text-align: center;
    display: block;
    margin-right: 0;
  }

  nav {
    padding: 0.75rem 1rem;
  }

  .nav-center {
    display: none;
  }

  .home-call-to-action {
    flex-direction: column;
    gap: 0.6rem;
  }

  .primary-button, .secondary-button {
    width: 100%;
    text-align: center;
  }
}
</style>

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
  animation: slideDown 0.5s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
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
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.1);
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
  transition: all 0.3s ease;
  padding: 0.25rem 0.4rem;
  position: relative;
  overflow: hidden;
}

nav a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: var(--foreground-accent);
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

nav a:hover::after,
nav a.active::after {
  width: 80%;
}

nav a:hover,
nav a.active {
  color: var(--foreground-accent);
  transform: translateY(-2px);
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
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.nav-right a::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(172,172,205,0.1);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.nav-right a:hover {
  color: var(--foreground-accent);
  border-color: var(--border-strong);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.nav-right a:hover::before {
  width: 300%;
  height: 300%;
}

main {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  animation: fadeIn 0.4s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
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
  animation: slideUp 0.6s ease-out;
  letter-spacing: -0.5px;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.home-content p {
  font-size: 1.225rem;
  line-height: 1.4;
  font-weight: 400;
  color: var(--foreground-primary);
  margin-bottom: 1.25rem;
  animation: slideUp 0.5s ease-out;
  animation-delay: 0.2s;
  animation-fill-mode: both;
}

.home-call-to-action {
  display: inline-flex;
  gap: 0.75rem;
  align-items: center;
  justify-content: center;
  margin-top: 0;
  animation: slideUp 0.5s ease-out;
  animation-delay: 0.4s;
  animation-fill-mode: both;
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
  transition: all 0.3s ease;
  border: 1px solid var(--border-strong);
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.primary-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(172,172,205,0.2), transparent);
  transition: left 0.6s ease;
  z-index: -1;
}

.primary-button:hover {
  background: #34343A;
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(172,172,205,0.15);
}

.primary-button:hover::before {
  left: 100%;
}

.primary-button:active {
  transform: translateY(-1px);
  box-shadow: 0 3px 10px rgba(172,172,205,0.1);
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
  transition: all 0.3s ease;
  border: 1px solid transparent;
  position: relative;
  overflow: hidden;
}

.secondary-button::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 10px;
  padding: 1px;
  background: linear-gradient(45deg, var(--border-subtle), var(--border-strong));
  mask: linear-gradient(white, white, white) content-box, linear-gradient(white, white, white);
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.secondary-button:hover {
  transform: translateY(-3px);
  background: rgba(255,255,255,0.02);
  box-shadow: 0 4px 15px rgba(172,172,205,0.1);
}

.secondary-button:hover::after {
  opacity: 1;
}

.downloads-content {
  width: 100%;
  max-width: 880px;
  animation: fadeIn 0.4s ease-out;
}

.downloads-content h1 {
  font-size: 2.25rem;
  color: var(--foreground-accent);
  margin-bottom: 1.5rem;
  text-align: center;
  font-weight: 600;
  animation: slideUp 0.3s ease-out;
}

.download-block {
  background: rgba(139,139,164,0.02);
  border: 1px solid var(--border-subtle);
  border-radius: 10px;
  padding: 0.75rem 0;
  margin-bottom: 1.25rem;
  overflow: hidden;
  animation: slideInScale 0.4s ease-out;
  transition: all 0.3s ease;
}

@keyframes slideInScale {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(10px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.download-block:hover {
  background: rgba(139,139,164,0.04);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transform: translateY(-2px);
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
  transition: all 0.3s ease;
  position: relative;
}

.download-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 3px;
  background: var(--foreground-accent);
  transform: scaleY(0);
  transition: transform 0.3s ease;
}

.download-item:hover {
  background: rgba(172,172,205,0.03);
  padding-left: 1rem;
}

.download-item:hover::before {
  transform: scaleY(1);
}

.download-item:first-of-type {
  border-top: none;
}

.download-name {
  font-size: 1rem;
  color: var(--foreground-secondary);
  margin-left: 0.5rem;
  word-break: break-word;
  transition: color 0.3s ease;
}

.download-item:hover .download-name {
  color: var(--foreground-accent);
}

.download-btn {
  background: var(--background-elevated);
  color: var(--foreground-primary);
  padding: 0.45rem 1rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  margin-right: 0;
  border: 1px solid var(--border-strong);
  cursor: pointer;
  font-size: 1rem;
  position: relative;
  overflow: hidden;
}

.download-btn::before {
  content: '⬇';
  position: absolute;
  top: 50%;
  left: -20px;
  transform: translateY(-50%);
  transition: left 0.3s ease;
  opacity: 0.7;
}

.download-btn:hover {
  background: #3A3A42;
  transform: translateX(-5px);
  box-shadow: 0 4px 12px rgba(172,172,205,0.2);
  padding-left: 1.8rem;
}

.download-btn:hover::before {
  left: 10px;
}

.download-btn:active {
  transform: translateX(-3px);
  box-shadow: 0 2px 6px rgba(172,172,205,0.15);
}

footer {
  padding: 1.5rem;
  text-align: center;
  border-top: 1px solid var(--border-strong);
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--foreground-primary);
  animation: fadeIn 0.6s ease-out;
  animation-delay: 0.6s;
  animation-fill-mode: both;
}

.fa-external-link-alt {
  font-size: 0.75em;
  margin-left: 4px;
}

@keyframes pulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(172,172,205,0.4);
  }
  50% {
    box-shadow: 0 0 0 10px rgba(172,172,205,0);
  }
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

  .download-item:hover {
    padding-left: 0.7rem;
  }

  .download-btn {
    width: 100%;
    text-align: center;
    display: block;
    margin-right: 0;
  }

  .download-btn:hover {
    transform: translateX(0) translateY(-2px);
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

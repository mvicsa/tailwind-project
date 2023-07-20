"use strict";

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
  themeBtn.classList.remove('hidden');
  themeBtn.querySelector(".dark-icon").classList.remove('hidden');
} else {
  document.documentElement.classList.remove('dark');
  themeBtn.classList.remove('hidden');
  themeBtn.querySelector(".light-icon").classList.remove('hidden');
}

themeBtn.addEventListener("click", () => {
  if (document.documentElement.classList.contains("dark")) {
    localStorage.setItem("theme", "light");
    themeBtn.querySelector(".light-icon").classList.remove('hidden');
    themeBtn.querySelector(".dark-icon").classList.add('hidden');
    document.documentElement.classList.remove('dark');
  } else {
    localStorage.setItem("theme", "dark");
    themeBtn.querySelector(".light-icon").classList.add('hidden');
    themeBtn.querySelector(".dark-icon").classList.remove('hidden');
    document.documentElement.classList.add('dark');
  }
});

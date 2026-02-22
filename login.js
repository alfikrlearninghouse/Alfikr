import { supabase } from './supabase.js';

const form = document.getElementById("loginForm");
const errorMsg = document.getElementById("errorMsg");

form.addEventListener("submit", async (e) => {
  e.preventDefault(); // jangan reload halaman

  errorMsg.innerText = "";

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) {
    errorMsg.innerText = "Username & password wajib diisi";
    return;
  }

  const email = `${username}@alfikr.id`;

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    errorMsg.innerText = "Username atau password salah";
    return;
  }

  window.location.href = "dashboard.html";
});
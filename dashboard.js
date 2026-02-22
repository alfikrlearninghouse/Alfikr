import { supabase } from './supabase.js';

async function loadProfile() {
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    window.location.href = "login.html";
    return;
  }

  const { data } = await supabase
    .from("profiles")
    .select("nama")
    .eq("id", user.id)
    .single();

  document.getElementById("namaSantri").innerText = data.nama;
}

loadProfile();

document.getElementById("logoutBtn")
  .addEventListener("click", async () => {
    await supabase.auth.signOut();
    window.location.href = "login.html";
  });
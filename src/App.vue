<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-primary">
      <router-link to="/Personnes" class="navbar-brand">Web Annuaire</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/Personnes" class="nav-link">Personnes</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/ajouter-personne" class="nav-link">Ajouter</router-link>
        </li>
      </div>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

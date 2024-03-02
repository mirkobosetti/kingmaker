<template>
    <div class="container">

    <nav>
      <router-link class="nav-button" to="/kingdom">Kingdom</router-link>
      <router-link class="nav-button" to="/skills">Skills</router-link>
      <router-link class="nav-button" to="/faa">Feats & Abilities</router-link>
      <router-link class="nav-button" to="/city?name=city1">City 1</router-link>
      <router-link class="nav-button" to="/city?name=city2">City 2</router-link>
    </nav>

    <router-view/>
  </div>
</template>

<style scoped>
  .container {
    margin: 0 auto;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2em;
    width: 100%;
    max-width: 100vw;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }

  .nav-button {
    padding: 10px 20px;
    background-color: #f0f0f0;
    border-radius: 5px;
    text-decoration: none;
    color: black;
  }
</style>

<template>
  <header class="header">
    <img src="../assets/images/logo.png" class="logo" alt="">
    <nav class="nav">
      <ul class="nav-links">
        <li class="link">
          <router-link to="/">PRODUCTOS</router-link>
        </li>
      </ul>
    </nav>
    <slot></slot>
  </header>
</template>

<script>
export default {
};
</script>

<style scoped>
  .header {
    width: 100%;
    height: 70px;
    background-color: white;
    box-sizing: border-box;
    padding: .5em;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 10;
  }
  
  .nav {
    width: 600px;
  }

  .nav-links {
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }

  .link {
    list-style: none;
    padding: 0 2em;
  }

  .link a {
    color: black;
    text-decoration: none;
    font-weight: 600;
  }
  .logo{
    width: 30%;
  }
</style>

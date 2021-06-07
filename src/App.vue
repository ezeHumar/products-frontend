<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <header class="site-header">
    <Header />
  </header>
  <main role="main" class="container">
    <div class="row">
      <div class="col-md-9">
        <router-view />
      </div>
    </div>
  </main>
</template>

<script>
import Header from "./views/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  }
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */

html {
  height: 100vh;
}

body {
  background: #fafafa;
  color: #333333;
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: #444444;
}

a.profile-link {
  color: #444444;
  text-decoration: none;
}

ul {
  margin: 0;
}

.bg-steel {
  background-color: #5f788a;
}

.site-header .navbar .nav-link {
  color: #cbd5db;
}

.site-header .navbar .nav-link:hover {
  color: #ffffff;
}

.site-header .navbar .nav-link.active {
  font-weight: 500;
}

.component-title{
  text-align: center;
  margin: 8px;
}

.content-section {
  background: #ffffff;
  padding: 10px 20px;
  border: 1px solid #dddddd;
  border-radius: 3px;
  margin-bottom: 20px;
  margin-top: 20px;
}

.article-title {
  color: #444444;
  text-decoration: none;
  white-space: pre-wrap;
  word-break: keep-all;
}

a.article-title:hover {
  color: #428bca;
  text-decoration: none;
}

.article-content {
  white-space: pre-wrap;
  word-break: keep-all;
  hyphens: auto;
  margin: 0;
}

.article-content-shortened {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
}

.article-img {
  height: 65px;
  width: 65px;
  margin-right: 16px;
}

.article-metadata {
  padding-bottom: 1px;
  margin-bottom: 4px;
  border-bottom: 1px solid #e3e3e3;
}

/* .article-metadata a:hover {
  color: #333;
  text-decoration: none;
} */


.article-svg {
  width: 25px;
  height: 25px;
  vertical-align: middle;
}

.account-img {
  height: 125px;
  width: 125px;
  margin-right: 25px;
  margin-bottom: 0px;
  display: block;
  transition: 0.3s ease;
  backface-visibility: hidden;
}

.account-img-container {
  position: relative;
  width: 125px;
  margin-right: 25px;
  cursor: pointer;
}

.account-img-container:hover .account-img {
  opacity: 0.3;
}

.account-img-container:hover .middle-img {
  opacity: 1;
}

.text-img {
  color: rgb(88, 88, 88);
  font-size: 19px;
}

.middle-img {
  transition: 0.3s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

.account-heading {
  font-size: 2.5rem;
}

.ml-auto .dropdown-menu {
  left: auto !important;
  right: 0px;
}

.nav-link {
  padding-right: 0.5rem !important;
  padding-left: 0.5rem !important;
}

#upload-photo {
  opacity: 0;
  position: absolute;
  z-index: -1;
}

footer {
  display: flex;
  margin-top: auto;
  height: 45px;
  background-color: #f5f5f5;
  align-items: center;
  justify-content: center;
}
</style>

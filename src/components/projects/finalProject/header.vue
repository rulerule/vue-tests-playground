<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="navbar-brand" tag="a" to="/finalProject/">Stock Trader</router-link>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" activeClass="active" to="portfolio"><a>Portfolio</a></router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" activeClass="active" to="stocks"><a>Stocks</a></router-link>
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li class="nav-item">
            <router-link class="nav-link" tag="li" to="/finalProject/">End Day</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Save & Load </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <router-link class="dropdown-item" tag="a" to="/finalProject/">Save</router-link>
              <router-link class="dropdown-item" tag="a" to="/finalProject/">Load</router-link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
</script>

<style lang="scss">
.container {
  margin-top:20px;
}
</style>

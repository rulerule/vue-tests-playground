<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" tag="a" to="/">Home</router-link>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Introduction </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <router-link class="dropdown-item" tag="a" to="/firstPart/">Dom Manipulation</router-link>
            <router-link class="dropdown-item" tag="a" to="/secondPart/">Conditionals</router-link>
            <router-link class="dropdown-item" tag="a" to="/thirdPart/">Vue Instance</router-link>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Components </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <router-link class="dropdown-item" tag="a" to="/fourthPart/">Introduction</router-link>
            <router-link class="dropdown-item" tag="a" to="/fifthPart/">Communication</router-link>
            <router-link class="dropdown-item" tag="a" to="/sixthPart/">Advanced</router-link>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Intermediate Concepts </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <router-link class="dropdown-item" tag="a" to="/sevenPart/">Forms</router-link>
            <router-link class="dropdown-item" tag="a" to="/eightPart/">Directives</router-link>
            <router-link class="dropdown-item" tag="a" to="/ninePart/">Filters and Mixins</router-link>
            <router-link class="dropdown-item" tag="a" to="/tenPart/">Animations</router-link>
          </div>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" tag="a" to="/elevenPart/">Server Communication</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" tag="a" to="/twelvePart/">Routing</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" tag="a" to="/thirteenPart/">State Management</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Projects </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <router-link class="dropdown-item" tag="a" to="/monsterGame">Monster Game</router-link>
            <router-link class="dropdown-item" tag="a" to="/monsterGameOfficial">Monster Game Official</router-link>
            <router-link class="dropdown-item" tag="a" to="/wonderfulQuotes">Wonderful Quotes</router-link>
            <router-link class="dropdown-item" tag="a" to="/wonderfulQuotesOfficial">Wonderful Quotes Official</router-link>
            <router-link class="dropdown-item" tag="a" to="/animatedMonsterGame">Animated Monster Game</router-link>
            <router-link class="dropdown-item" tag="a" to="/">To Be Added</router-link>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Exercises </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <router-link class="dropdown-item" tag="a" to="/exercise1">Exercise 1</router-link>
            <router-link class="dropdown-item" tag="a" to="/exercise2">Exercise 2</router-link>
            <router-link class="dropdown-item" tag="a" to="/exercise3">Exercise 3</router-link>
            <router-link class="dropdown-item" tag="a" to="/exercise4">Exercise 4</router-link>
            <router-link class="dropdown-item" tag="a" to="/exercise5">Exercise 5</router-link>
            <router-link class="dropdown-item" tag="a" to="/exercise6">Exercise 6</router-link>
            <router-link class="dropdown-item" tag="a" to="/exercise7">Exercise 7</router-link>
            <router-link class="dropdown-item" tag="a" to="/exercise8">Exercise 8</router-link>
            <router-link class="dropdown-item" tag="a" to="/exercise9">Exercise 9</router-link>
            <router-link class="dropdown-item" tag="a" to="/exercise10">Exercise 10</router-link>
            <router-link class="dropdown-item" tag="a" to="/exercise11">Exercise 11</router-link>
            <router-link class="dropdown-item" tag="a" to="/exercise12">Exercise 12</router-link>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

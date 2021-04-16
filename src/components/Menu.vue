<template>
    <div class="navbar">
        <div class="navbar-menu" style="order:0; left:10.4%; right:81.6%; bottom:22.22%"><router-link to="/"><img src="../assets/icones/home.svg"/></router-link></div>
        <div class="navbar-menu" style="order:1 left:34.13%; right:57.87%; bottom:22.22%"><router-link to="/recettes"><img src="../assets/icones/list.svg"/></router-link></div>
        <div class="navbar-menu" style="order:2 left:57.87%; right:34.13%; bottom:22.22%"><router-link to="/maps"><img src="../assets/icones/pin.svg"/></router-link></div>
        <div class="navbar-menu" style="order:3 left:81.6%; right:10.4%; bottom:22.22%"><router-link to="/kart"><img src="../assets/icones/shopping-cart.svg"/></router-link></div>
    </div>
</template>

<script>
export default {
    name: 'Menu'
}
</script>

<style scoped>
.navbar {
    position: absolute;
    background-color: #d8ae80;
    bottom: 0;
    height: 54px;
    width: 375px;
    left: calc(50% - 375px/2);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 12px 39px;
}
.navbar-menu {
    position: static;
    flex: none;
    flex-grow: 0;
    height: 30px;
    width: 30px;
}
</style>

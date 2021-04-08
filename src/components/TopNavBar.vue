<template>
    <div>
        <div class="navbar">
            <div class="navbar-message">
                <router-link to="/messages">
                    <img v-if="!getPathMessage()" src="../assets/icones/message-circle-outline.svg"/>
                    <img v-else class="back-message" src="../assets/icones/arrow-ios-back.svg"/>
                </router-link>
            </div>
            <div class="navbar-profil">
                <router-link to="/profil">
                    <img v-if="!getPath()" src="../assets/icones/person.svg" />
                    <img v-else src="../assets/icones/power-outline.svg" v-on:click="logout()" />
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TopNavBar',
    methods: {
        getPath: function() {
            if (this.$route.path === '/profil')
            {
                return true;
            }
            return false;
        },
        getPathMessage: function() {
            if(this.$route.path.includes('/message')) {
                return true;
            }
            return false;
        },
        logout: function(){
            localStorage.auth = false;
            window.location.href = '/'
        }
    }
}
</script>

<style scoped>
.navbar {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
}

.navbar-message {
    position: absolute;
    width: 30px;
    height: 30px;
    top: 10px;
    left: 288px;
}

.navbar-profil {
    position: absolute;
    width: 30px;
    height: 30px;
    top: 10px;
    left: 324px;
}

.back-message {
    position: absolute;
    width: 30px;
    height: 30px;
    right: 278px;
}
</style>
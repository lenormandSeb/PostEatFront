<template>
    <div>
        <div class="custom-home-head">
            <p>Bonjour</p>
            <p>{{ this.userName }} !</p>
        </div>
    </div>
</template>

<script>
// import axios from 'axios';

export default {
    name: 'HomePage',
    data () {
        return {
            userName : 'Sebastien'
        }
    }
}
</script>

<style scoped>
    * {
        border: 1px solid black;
    }
    .custom-home-head {
        background-color: chocolate;
        height: 100px;
        width: 300px;
        margin-left: 32px;
        border-radius: 20px;
        text-align: center;
        color: white;
    }
</style>
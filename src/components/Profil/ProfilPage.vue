<template>
    <div>
        <p><b-avatar class="mr-3"></b-avatar>Sebastien Lenormand{{ user.lastName }} {{ user.name }} <br> Voir mon profil<b-icon icon="chevron-right"></b-icon></p>
        <hr>
        <div style="overflow-y:scroll;height:601px">
            <div class="row" style="height:100px">
                <div class="btn-profil">
                    <p style="font-size:26px;color:white">6</p>
                    <img src="../../assets/icones/car_1.svg" class="btn-profil-img" />
                    <p style="margin-top:10px">Drive</p>
                </div>
                <div class="btn-profil">
                    <p style="font-size:26px;color:white">3</p>
                    <img src="../../assets/icones/shopping-bag.svg" class="btn-profil-img" />
                    <p style="margin-top:10px">Livraison</p>
                </div>
                <div class="btn-profil">
                    <p style="font-size:26px;color:white">5/5</p>
                    <img src="../../assets/icones/smiley.svg" class="btn-profil-img" />
                    <p style="margin-top:10px">Note</p>
                </div>
            </div>
            <hr>
            <div class="custom-row" style="height:232px">
                <img src="../../assets/icones/heart.svg" style="color:red"/>
                Mes recettes préférées
            </div>
            <hr>
            <div class="custom-row">
                <img src="../../assets/icones/settings-2.svg"/> 
                Paramètres
                <img class="custom-img" src="../../assets/icones/arrow-ios-forward.svg" />
            </div>
            <hr>
            <div class="custom-row">
                <img src="../../assets/icones/lock.svg"/>
                Paramètres des cookies
                <img class="custom-img" src="../../assets/icones/arrow-ios-forward.svg" />
            </div>
            <hr>
            <div class="custom-row">
                <img src="../../assets/icones/info.svg"/>
                A propos de Post'Eat
                <img class="custom-img" src="../../assets/icones/arrow-ios-forward.svg" />
            </div>
            <hr>
            <div class="custom-row">
                <img src="../../assets/icones/question-mark-circle.svg"/>
                Centre d'aide
                <img class="custom-img" src="../../assets/icones/arrow-ios-forward.svg" />
            </div>
            <hr>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'ProfilPage',
    data() {
        return {
            user : [],
        }
    },
    methods:{

    },
    mounted() {
        axios
            .get('http://192.168.1.89:8000/api/user', {
                params : {
                    id_user : localStorage.id_user
                }
            })
            .then((response) => {
                if(response.data.data)
                {
                    var user = JSON.parse(response.data.user);
                    this.user = user
                }
            })
    }
}
</script>

<style scoped>
    .row {
        margin: 0 10px;
    }
    .custom-row {
        text-align: left;
        padding: 0 29px;
    }
    .custom-row > img {
        height: 30px;
        width: 30px;
    }
    /* .custom-img {
        margin-left: calc();
    } */
    .btn-profil-img {
        height: 32px;
        width: 32px;
        margin-top: -20px;
    }
    .btn-profil {
        height: 81px;
        width: 81px;
        background-color: #CE4C17;
        margin-left: 26px;
        border-radius: 20px;
        /* position: absolute; */
    }
</style>
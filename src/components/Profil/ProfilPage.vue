<template>
    <div>
        <p><b-avatar class="mr-3"></b-avatar>{{ user.lastName }} {{ user.name }} <b-icon icon="chevron-right"></b-icon></p>
        <hr>
        <div style="overflow-y:scroll;height:460px">
            <div class="row">
                <div class="btn-profil">
                    <p>Nombre</p>
                    <p>Icone</p>
                </div>
                <div class="btn-profil">
                    <p>Nombre</p>
                    <p>Icone</p>                
                </div>
                <div class="btn-profil">
                    <p>Nombre</p>
                    <p>Icone</p>
                </div>
            </div>
            <hr>
            <div style="height:232px">
                Gallery
            </div>
            <hr>
            <div>
                setting ?
            </div>
            <hr>
            <div>
                info ?
            </div>
            <hr>
            <div>
                question ?
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
    .btn-profil {
        height: 81px;
        width: 81px;
        background-color: #CE4C17;
        margin-left: 36px;
        border-radius: 20px;
        /* position: absolute; */
    }
</style>
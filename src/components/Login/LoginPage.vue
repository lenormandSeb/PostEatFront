<template>
    <div>
        <img alt="Vue logo" src="../../assets/Logo-final.png" height="230px" width="230px">
        <div class="bas-login">
            <p style="font-size:25px; line-height:28px;text-align: center;position:relative;top:10px"><strong>Connexion</strong></p>
            <b-form @submit="onSubmit">
                <b-form-group id="label-username">
                    <b-form-input id="username" v-model="form.login" type="text" required class="btn-log" placeholder="Adresse mail"></b-form-input>
                </b-form-group>
                <b-form-group id="password">
                    <b-form-input id="password-hide" v-model="form.password" type="password" required class="btn-log" placeholder="Mot de passe"></b-form-input>
                </b-form-group>
            <div>
                <b-button class="cutomButton" type="submit" variant="success">Valider</b-button>
                <b-button class="cutomButton" type="reset" variant="danger">Annuler</b-button>
            </div>
        </b-form>
        <hr>
        <p><router-link to="createAccount">Pas de compte ? Creer en un ici</router-link></p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'LoginPage',
    data() {
        return {
            form: {
                login : '',
                password : '',
            }
        }
    },
    methods: {
        onSubmit(event) {
            event.preventDefault();
            axios.get('http://192.168.1.89:8000/api/login', {
                params : this.form
            }).then((response) => {
                if(response.data.data)
                {
                    localStorage.auth = true
                    localStorage.id_user = response.data.id_user
                    this.$router.replace({name : 'homepage'})
                } else {
                    window.location.reload()
                }
            })
        }
    }
}
</script>

<style scoped>
    .cutomButton {
        position: relative;
        width: 250px;
        height: 50px;
        margin-bottom: 4px;
        background-color: #ce4c17;
        border: 1px solid #c4c4c4;
        border-radius: 12px;
    }
    .bas-login {
        background-color: #F0F0F0;
        position: absolute; 
        bottom:0; 
        height: 350px; 
        width:375px; 
        border-radius: 50px 50px 0 0
    }
    .btn-log {
        height: 50px;
        width: 250px;
        left: 63px;
        position: relative;
    }
</style>
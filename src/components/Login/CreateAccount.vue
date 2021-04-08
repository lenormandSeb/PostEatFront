<template>
    <div>
        <img alt="Vue logo" src="../../assets/Logo-final.png" height="230px" width="230px">
        <div class="bas-login">
            <p style="font-size:25px; line-height:28px;text-align: center;position:relative;top:10px"><strong>Création de compte</strong></p>
            <b-form @submit="createAccount">
                <b-form-group 
                    id="lastname-label" 
                    label-for="lastname"
                    >
                    <b-form-input 
                    id="lastname"
                    class="btn-log"
                    v-model="form.lastName"
                    type="text"
                    required
                    placeholder="Nom de famille"
                    >
                    </b-form-input>
                </b-form-group>
                <b-form-group 
                    id="name-label"
                    label-for="name"
                    >
                    <b-form-input 
                    id="name"
                    class="btn-log"
                    v-model="form.name" 
                    type="text"
                    required
                    placeholder="Prenom"
                    >
                    </b-form-input>
                </b-form-group>
                <b-form-group 
                    id="email-label"
                    label-for="email"
                    >
                    <b-form-input 
                    id="email" 
                    class="btn-log"
                    v-model="form.email" 
                    type="email"
                    required
                    placeholder="Adresse mail"
                    >
                    </b-form-input>
                </b-form-group>
                <b-form-group 
                    id="adresse-label"
                    label-for="adresse"
                    >
                    <b-form-input 
                    id="adresse" 
                    class="btn-log"
                    v-model="form.adresse" 
                    type="text"
                    required
                    placeholder="Adresse"
                    >
                    </b-form-input>
                </b-form-group>
                <b-form-group 
                    id="password-label"
                    label-for="password"
                    >
                    <b-form-input 
                    id="password" 
                    class="btn-log"
                    v-model="form.password" 
                    type="password"
                    :state="checkPassword"
                    required
                    placeholder="Mot de passe"
                    >
                    </b-form-input>
                </b-form-group>
                <b-form-group 
                    id="passw2-label"
                    label-for="passw2"
                    >
                    <b-form-input 
                    id="passw2" 
                    class="btn-log"
                    v-model="form.passw2" 
                    type="password"
                    :state="checkConfirmPassword"
                    required
                    placeholder="Confirmation mot de passe"
                    >
                    </b-form-input>
                </b-form-group>
                <b-button type="submit" variant="primary" class="cutomButton">Valider</b-button>
                <b-button type="reset" variant="primary" class="cutomButton">Annuler</b-button>
            </b-form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name : 'CreateAccount',
    data() {
        return {
            form : {
                lastName : '',
                name: '',
                email: '',
                adresse: '',
                password: '',
                passw2: ''
            }
        }
    },
    methods : {
        createAccount: function(event) {
            event.preventDefault();
            axios.get('http://192.168.1.89:8000/api/createUser', { params: this.form })
                .then(response => {
                    if(response.data.data == 'ok')
                    {
                        this.$router.replace({name : 'login'});
                    }
                })
        }
    },
    computed : {
        checkPassword: function(){
            if(this.form.password.length > 0) {
                return this.form.password.length > 7 ? true : false
            }
            return null;
        },
        checkConfirmPassword: function() {
            if(this.form.password.length > 0 && this.form.passw2.length > 0) {
                return (this.form.passw2.length > 7 && this.form.passw2 === this.form.password) ? true : false
            }
            return null;
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
        height: 527px; 
        width:375px; 
        border-radius: 50px 50px 0 0
    }
    .btn-log {
        height: 45px;
        width: 250px;
        left: 63px;
        position: relative;
    }
</style>
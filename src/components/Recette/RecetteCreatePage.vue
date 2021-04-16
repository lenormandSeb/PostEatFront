<template>
    <div class="container">
        Creation de recette
        <form>
            <div class="form-group">
                <input type="text" v-model="form.name" class="form-control" placeholder="Nom de la recette"/>
            </div>
            <div class="form-group">
                <input type="text" v-model="form.name" class="form-control" placeholder="Nom de la recette"/>
            </div>
            <div class="form-group">
                <input type="text" v-model="form.name" class="form-control" placeholder="Nom de la recette"/>
            </div>
            <div class="form-group">
                <input type="text" v-model="form.name" class="form-control" placeholder="Nom de la recette"/>
            </div>
            <div class="form-group">
                <input type="text" v-model="form.name" class="form-control" placeholder="Nom de la recette"/>
            </div>
            Liste d'ingredient
            <div class="form-group">
                <ingredient-list />
            </div>
            <div class="form-group">
                <input type="text" v-model="form.name" class="form-control" placeholder="Nom de la recette"/>
            </div>
            <div class="form-group">
                <input type="text" v-model="form.name" class="form-control" placeholder="Nom de la recette"/>
            </div>
            <div class="form-group">
                <input type="text" v-model="form.name" class="form-control" placeholder="Nom de la recette"/>
            </div>
            <div class="form-group">
                <input type="text" v-model="form.name" class="form-control" placeholder="Nom de la recette"/>
            </div>
            <div class="form-group">
                <input type="text" v-model="form.name" class="form-control" placeholder="Nom de la recette"/>
            </div>
            <div class="btn-goup">
                <button class="btn btn-success">Valider</button>
                <button class="btn btn-danger">Annuler</button>
            </div>
        </form>
    </div>
</template>

<script>
import IngredientList from './IngredientList.vue'
export default {
    name: 'recette-creation',
    data() {
        return {
            form: {
                name : '',
                preparation: '',
                cooking: '',
                difficulty: '',
                price: '',
                ingredient: '',
                nb_eat: '',
                step: '',
                draft: '',
                image: '',
                creator: ''
            }
        }
    },
    components: {
        IngredientList
    }
}
</script>
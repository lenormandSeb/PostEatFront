<template>
    <div>
        <select name="" id="" class="form-control" multiple>
            <option v-for="ingredient in ingredients" :key="ingredient.id">{{ ingredient.name }}</option>>
        </select>
    </div>
</template>

<script>
export default {
    name: 'ingredient',
    data() {
        return {
            ingredients : [
                {
                    id : 1,
                    name: 'Oeuf'
                },
                {
                    id : 2,
                    name: 'Salade'
                },
                {
                    id : 3,
                    name: 'Champignon'
                }
            ]
        }
    }
}
</script>
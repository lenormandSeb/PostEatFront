import RecettePage from '../Recette/RecettePage'
import RecetteCreate from '../Recette/RecetteCreatePage'

export default [
    {
        path: '/recettes',
        name: 'recettes',
        component: RecettePage
    },
    {
        path: '/recette-creation',
        name: 'recette-creation',
        component: RecetteCreate
    }
]
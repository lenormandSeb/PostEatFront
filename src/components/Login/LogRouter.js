import LoginPage from '../Login/LoginPage'
import CreateAccount from '../Login/CreateAccount'

export default [
    {
        path : '/login',
        name : 'login',
        component: LoginPage
    },
    {
        path : '/createAccount',
        name: 'createAccount',
        component: CreateAccount
    }
    ]

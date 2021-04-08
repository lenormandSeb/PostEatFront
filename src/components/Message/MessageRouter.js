import MessagePage from '../Message/MessagePage'
import MessageShowPage from '../Message/MessageShowPage'

export default [
        {
            path: '/messages',
            name : 'message',
            component: MessagePage
        },
        {
            path: '/message/:id',
            name: 'messageshow',
            component: MessageShowPage,
            props: true
        }
    ]

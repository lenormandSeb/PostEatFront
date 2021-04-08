<template>
    <div>
        <div>
            <h3>Sebastien Lenormand</h3>
        </div>
        <hr>
        <div style="border:1px solid">

        </div>
    </div>
</template>

<script>
export default {
    name: 'MessageShowPage',
    props: ['id'],
    data() {
        return {
            message: ''
        }
    },
    mounted() {
        if (this.id == 1) {
            this.message = 'Je suis le message 1'
        } else {
            this.message = 'Je suis le message 2'
        }
    }
}
</script>
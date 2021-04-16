<template>
    <div class="message">
    <router-link  :to="{'name' : 'messageshow', params :{'id' : id}}">
        <div class="message-body">
            <div class="message-avatar"></div>
            <div class="message-display">
                <div style="font-size:16px;line-height:19px;font-weight: 500;text-align:center;color: #663113;position:absolute">{{ name }}</div>
                <div style="font-size:14px;line-height:16px;text-align:center;display:flex;align-items:center;bottom:23.38%;position:absolute">
                    {{ lastMessage }}
                    <span style="color: #828282;left:159.68%;position:relative">{{ date }}</span>
                </div>
            </div>
        </div>
    </router-link>
    </div>
</template>

<script>
export default {
    name: 'MessageTemplate',
    props: ['id', 'name', 'avatar', 'lastMessage', 'date'],
    data() {
        return {
        }
    }
}
</script>

<style scoped>
.message{
    position: relative;
    left: 15px;
    margin: 10px 0;
}

.message-body {
    height: 77px;
    width: 333px;
    background-color: #ececec;
    border-radius: 20px;
    padding: 19px;
}

.message-avatar {
    position: absolute;
    height: 40px;
    width: 40px;
    background: url('../../assets/icones/person.svg');
}

.message-display {
    margin-left: 40px;
    height: 40px;
}
</style>
<template>
    <div>
        <h3>Messages</h3>
        <div class="search-bar">
            <img src="../../assets/icones/search.svg" width="30px" height="30px" style="position:absolute; top:5px; left:9px"/>
            <input type="text" class="search-text"/>
        </div>
        <div style="position:absolute;height:70%;width:100%;top:calc(106px + 41px);overflow-y: scroll">
            <MessageTemplate 
                v-for="message in this.messages" 
                :key="message.id" 
                :id="message.id"
                :name="message.name"
                :avatar="message.avatar"
                :lastMessage="message.message"
                :date="message.date"
            />
        </div>
    </div>
</template>

<script>
import MessageTemplate from './MessageTemplate'
export default {
    name: 'MessagePage',
    components : {
        MessageTemplate
    },
    data() {
        return {
            messages : [
                {id : 1, name : "Je suis le message 1", avatar:"la", message:"coucou", date:"20 mars"}, 
                {id: 2,name : 'Je suis le message 2', avatar:"la", message:"coucou", date:"20 mars"},
                {id: 3,name : 'Je suis le message 3', avatar:"la", message:"coucou", date:"20 mars"},
                {id: 4,name : 'Test2', avatar:"la", message:"coucou", date:"20 mars"},
                {id: 5,name : 'Test2', avatar:"la", message:"coucou", date:"20 mars"},
                {id: 6,name : 'Test2', avatar:"la", message:"coucou", date:"20 mars"},
                {id: 7,name : 'Test2', avatar:"la", message:"coucou", date:"20 mars"},
                {id: 8,name : 'Test2', avatar:"la", message:"coucou", date:"20 mars"},
                {id: 9,name : 'Test2', avatar:"la", message:"coucou", date:"20 mars"},
                {id: 10,name : 'Test2', avatar:"la", message:"coucou", date:"20 mars"},
                {id: 11,name : 'Test2', avatar:"la", message:"coucou", date:"20 mars"},
                {id: 12,name : 'Test2', avatar:"la", message:"coucou", date:"20 mars"},
                {id: 13,name : 'Test2', avatar:"la", message:"coucou", date:"20 mars"},

            ]
        }
    },
    mounted() {
        return this.messages[{id : 1, name : "1"}, {id: 2,name : '2'}]
    }

}
</script>

<style scoped>
.search-bar {
    position: absolute;
    width: 233px;
    height: 41px;
    left: 71px;
    top: 106px;
}

.search-text {
    background-color: #C4C4C4;
    border-radius: 20px;
    width: 233px;
    height: 41px;
}
</style>
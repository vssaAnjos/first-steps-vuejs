const app = new Vue({
    el:'#app',
    data:{
        titulo:'Gym with Vue',
        tarefas:[],
        novaTarefa:''
    },
    methods:{
        agregarTarefa: function(){
            this.tarefas.push({
                nome:this.novaTarefa,
                estado:false
            });
            this.novaTarefa='';
        },
        editarTarefa: function(index){
            this.tarefas[index].estado=true;
        }
    }
})
const app= new Vue({
    el:'#app',
    data:
    {
        titulo: 'Ola Mundo com Vuejs',
        animais:['macaco','cachorro'],
        frutas:[
            {nome:'maça',quantidade:10},
            {nome:'banana',quantidade:20},
            {nome:'limão',quantidade:0}
        ],
        novaFruta: '',
        total:0
    },
    methods:
    {
        agruparFruta () {
            this.frutas.push({
                nome: this.novaFruta, quantidade:0
            })
            this.novaFruta = ''
        }
    },
    computed:
    {
        somarFrutas(){
            this.total = 0;
            for(fruta of this.frutas) {
                this.total+= fruta.quantidade;

            }
            return this.total;
        }
    }

})
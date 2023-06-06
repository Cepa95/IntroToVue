const app = Vue.createApp({
    data(){
        return{
            name: 'Josip',
            age: 28,
            link: 'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg'
        }
    },
    methods:{
        oldAge(){
            return this.age +5
        },

        chooseNumber(){
            const randomNumber = Math.random();
            return randomNumber
        },

        nameValue(){
            return this.name
        }
    }
})

app.mount('#assignment')
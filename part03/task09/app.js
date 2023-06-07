const app = Vue.createApp({
    data() {
        return {
            enteredValue: '',
            tasks: [],
            taskListIsVisible: true,
        }
    },
    computed: {
        buttonCaption(){
            return this.taskListIsVisible ? 'Hide' : 'Show' 
        }
    },

    methods: {
        addTask() {
            this.tasks.push(this.enteredValue)
        },
        toggleTaskList(){
            this.taskListIsVisible = !this.taskListIsVisible
        }
    }


});

app.mount('#assignment')
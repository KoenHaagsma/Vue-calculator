const app = Vue.createApp({
    data() {
        return {
            result: ''
        };
    },
    methods: {
        key(num) {
            return this.result += num;
        },
        
        sum() {
            let sum = this.result;
            // eval leest een string en kijkt of er javascript logica inzit.
            return this.result = eval(sum);
        },

        clear() {
            return this.result = '';
        }
        
    }
});

app.mount("body");
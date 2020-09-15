const app = new Vue({
    el: '#app',
    data () {
        return {
        api_key: '41fa6d773fc61a9b8f1296bfb8780b97',
        url_base: 'http://api.openweathermap.org/data/2.5/weather?id=524901',
        query: '',
        weather: {}
        }
    },
    methods: {
        fetchWeather (e) {
        if (e.key == "Enter") {
            fetch(`${this.url_base}&q=${this.query}&units=metric&APPID=${this.api_key}`)
            .then(res => {
                return res.json();
            }).then(this.setResults);
        }
        },
        setResults (results) {
        this.weather = results;
        },
        dateBuilder () {
        let d = new Date();
        let months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        let days = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`;
        }
    }
    })
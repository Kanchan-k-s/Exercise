new Vue({
    el :'#main',
    data:{
        output:''
    },
    methods:{
        display: function(){
            console.log(this.$refs.value.value)
            this.output=this.$refs.value.value;
            console.log(this.$refs.t.innerText)
        }
    }
})
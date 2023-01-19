<template>
    <div v-theme:column="'narrow'" id="show-blogs">
        <h1>All blog Title</h1>
        <input type="text" v-model="search" placeholder="Search blogs" />
        <div v-for="blog in filteredBlogs" class="single-blog">
            <h2 v-rainbow>{{ blog.title | toUpper }}</h2>
        </div>
    </div>
</template>

<script>
import filteredBlogs from '../mixins/search'

export default {

    data() {
        return {
            blogs: [],
            search: ''
        }
    },
    methods: {

    },
    created() {
        this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function (data) {
            this.blogs = data.body.slice(0, 10);
        })
    },
    computed: {

    },
    filters: {
        toUpper: function (value) {
            return value.toUpperCase();
        }
    },
    directives: {
        'rainbow': {
            bind(el, binding, vnode) {
                return el.style.color = '#' + Math.random().toString(16).slice(2, 8);
            }
        }
    },
    mixins: [
        filteredBlogs
    ]
}
</script>

<style>
#show-blogs {
    max-width: 800px;
    margin: 0px auto;
}

.single-blog {
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>
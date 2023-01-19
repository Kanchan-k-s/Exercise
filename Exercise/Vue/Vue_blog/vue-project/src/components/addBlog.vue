<template>
    <div id="add-blog">
        <h2>Add a new Blog Post</h2>
        <form v-if="!submitted">
            <label>Blog Title:</label>
            <input type="text" v-model.lazy="blog.title" required />
            <label>Blog Content:</label>
            <textarea v-model.lazy="blog.content"></textarea>

            <div id="checkboxes">
                <label>Ninja</label>
                <input type="checkbox" value="ninja" v-model="blog.categories" />
                <label>Wizards</label>
                <input type="checkbox" value="wizards" v-model="blog.categories" />
                <label>Muggle</label>
                <input type="checkbox" value="muggle" v-model="blog.categories" />
                <label>Ghost</label>
                <input type="checkbox" value="ghost" v-model="blog.categories" />
            </div>
            <label>Authors:</label>
            <select v-model="blog.author">
                <option v-for="Author in Authors">{{ Author }}</option>
            </select>
        </form>

        <button v-on:click.prevent="post">Add Blog</button>
        <p v-if="submitted">Thank you for Submitting</p>
        <div id="preview">
            <h3>Preview Blog</h3>
            <p>Blog title:{{ blog.title }}</p>
            <p>Blog content:</p>
            <p style="white-space: pre">{{ blog.content }}</p>
            <p>Blog Categories:</p>
            <ul>
                <li v-for="cateory in blog.categories">{{ cateory }}</li>
            </ul>
            <p>Author : {{ blog.author }}</p>
        </div>
    </div>
</template>

<script>
// Imports

export default {
    data() {
        return {
            blog: {
                title: '',
                content: '',
                categories: [],
                author: ''
            },
            Authors: [
                'The Hulk',
                'The Marvel',
                'The Galaxy'
            ],
            submitted: false
        }
    },
    methods: {
        post: function () {

            this.$http.post('http://jsonplaceholder.typicode.com/posts', {
                title: this.blog.title,
                body: this.blog.content,
                userId: 1
            }).then(function (data) {
                console.log(data);
                this.submitted = true;
            });
        }
    }
}
</script>

<style>
#add-blog * {
    box-sizing: border-box;
}

#add-blog {
    margin: 20px auto;
    max-width: 500px;
}

label {
    display: block;
    margin: 20px 0 10px;
}

input[type="text"],
textarea {
    display: block;
    width: 100%;
    padding: 8px;
}

#preview {
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}

h3 {
    margin-top: 10px;
}

#checkboxes input {
    display: inline-block;
    margin-right: 10px;
}

#checkboxes label {
    display: inline-block;
}
</style>
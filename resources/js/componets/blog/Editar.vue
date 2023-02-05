<template>
     <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h4>Crear Blog</h4>
                    </div>
                    <div class="card-body">
                        <form v-on:submit.prevent="actualizar">
                            <div class="row">
                                <div class="col-12 mb-2">
                                    <div class="form-group">
                                        <label for="">Titulo</label>
                                        <input type="text" class="form-control" name="titulo" :value="blog.titulo">
                                    </div>
                                </div>
                                <div class="col-12 mb-2">
                                    <div class="form-floating">
                                        <textarea class="form-control" id="textarea2" name="contenido" v-model="blog.contenido" style="height: 100px;"></textarea>
                                        <label for="textarea2">Contenido</label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button type="submit" class="btn btn-outline-success">Actualizar</button>
                                </div>
                            </div>

                        </form>
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>
<script>


    export default {
        name:"editar_blog",
        data(){
            return{
                blog:{
                    titulo:"",
                    contenido:""
                }
            }
        },
        mounted(){
            this.mostrar_blogs()
        },
        methods:{
            mostrar_blogs(){
                console.log(this.$route.params.id)
                this.axios.get(`/api/blog/${this.$route.params.id}`)
                .then(response=>{
                    const {titulo, contenido} = response.data
                    this.blog.titulo = titulo
                    this.blog.contenido = contenido
                })
                .catch(error=>{
                    console.log(error)
                })
            },
            actualizar(){
                this.axios.put(`/api/blog/${this.$route.params.id}`, this.blog)
                .then(response=>{
                    this.$router.push({
                        name:"mostrar_blogs"
                    })
                })
                .catch(error=>{
                    console.log(error)
                })
            }
        }
    }
</script>

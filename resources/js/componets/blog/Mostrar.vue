<template>
    <div class="container">


    <div class="row">
        <div class="col-lg-12 mb-4">
    <!-- aqui llamamos a las rutas y especificamente al componente que necesitamos -->
            <router-link :to='{name:"crear_blog"}' class="btn btn-outline-success" ><i class="fa-solid fa-square-plus"></i></router-link>

            <!-- modal -->
            <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Guardar desde Modal
</button>

<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="card">
                    <div class="card-header">
                        <h4>Crear Blog</h4>
                    </div>
                    <div class="card-body">
                        <form v-on:submit.prevent="crear">
                            <div class="row">
                                <div class="col-12 mb-2">
                                    <div class="form-group">
                                        <label for="">Titulo</label>
                                        <input type="text" class="form-control" name="titulo[]" v-model="blog.titulo">
                                    </div>
                                </div>
                                <div class="col-12 mb-2">
                                    <div class="form-floating">
                                        <textarea class="form-control" id="textarea2" name="contenido" v-model="blog.contenido" style="height: 100px;"></textarea>
                                        <label for="textarea2">Contenido</label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button type="submit" data-bs-dismiss="modal" class="btn btn-outline-success">Guardar</button>
                                </div>
                            </div>

                        </form>
                    </div>

                </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>





        </div>
        <div class="col-12">
           <div class="table-response">
            <table class="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Titulo</th>
                        <th scope="col">Contenido</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for=" blog in blogs" :key="blog.id">

                        <td>{{ blog.id }}</td>
                        <td>{{ blog.titulo }}</td>
                        <td>{{ blog.contenido }}</td>
                        <td>
                            <router-link :to='{name:"editar_blog",params:{id:blog.id}}' class="btn btn-outline-info" ><i class="fa-solid fa-pen-to-square"></i></router-link>

                            <button @click="eliminar_blog(blog.id)" class="btn btn-outline-danger"><i class="fa-solid fa-trash"></i></button>
                        </td>
                    </tr>

                </tbody>
            </table>
            <select name="" id="">

                    <option v-for="blog in blogs" :key="blog.id" :value="blog.id">{{ blog.titulo }}</option>


            </select>

           </div>

        </div>
    </div>
</div>
</template>
<script>


    export default {
        name:"blogs",
        data(){
            return{
                blogs:[],
                blog:{},
                mensaje:[]
            }
        },
        mounted(){
            
        },
        methods:{
            //aqui traemos todos los datos de la tabla (listar)
            async mostrar_blogs(){
                await this.axios.get('/api/blog')
                    .then(response=>{
                        this.blogs = response.data
                    })
                    .catch(error=>{
                        this.blog = []
                    })
            },
            eliminar_blog(id){
                if (confirm("¿Seguro que Deseas Eliminar?")){
                    this.axios.delete('api/blog/'+id)
                    .then(response=>{
                        this.mostrar_blogs()
                        this.mensaje = response.data
                        alert(this.mensaje['mensaje'])
                        console.log(this.mensaje['mensaje'])

                    })
                    .catch(error=>{
                        console.log(error)
                    })
                }
            },
            crear(){
                console.log(this.blog)
                this.axios.post('/api/blog', this.blog)
                .then(response=>{

                    this.mostrar_blogs()

                })
                .catch(error=>{
                    console.log(error)
                })

            }
        }
    }
</script>

<template>
    <main>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src="https://vuejs.org//images/logo.png" width="30" height="24" alt="">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
                            <router-link exact-active-class="active" to="/" class="nav-link active" >Inicio</router-link>
                        </li>
                        <li class="nav-item">
                            <!-- <a class="nav-link" href="#">Link</a> -->
                            <router-link exact-active-class="active" to="/blogs" class="nav-link" >Blogs</router-link>
                        </li>
                        <li class="nav-item">
                            <!-- <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a> -->
                            <router-link exact-active-class="active" to="/contacto" class="nav-link " >Contacto</router-link>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
        <div>
            <router-view>

            </router-view>
        </div>
    </main>
</template>

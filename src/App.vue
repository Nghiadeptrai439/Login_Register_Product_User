<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Product</router-link>
      <router-link to="/about">User</router-link>
      <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Logout</router-link>
      <router-link v-else to="/login">Login</router-link>
    </div> -->
    <div v-if="authenticated == false" class="form-lr">
      <div class="form-left">
        <img style="width: 195px;margin-right: 800px;" src="../images/logoip_4.png"/>
    </div>
    <div class="form-right">
    </div>
    </div>
    
    <router-view @authenticated="setAuthenticated"/>
  </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                authenticated: false,
                // this is only for testing purposes no actual app will have this
                // an api call will validate user credentials
                mockAccount: {
                    username: "ameyrupji",
                    password: "P@ssword!"
                }
            }
        },
        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
            },
            
        },
        mounted() {
             const value = ('; '+document. cookie). split(`; token=`)
            //console.log(value[1])
            if(value[1]){
               this.authenticated = true;
            }
            }
    }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}
.form-left {
  width: 65%;
  height: 100%;
  margin-left: 0px;
  background-color: #f6f8ff;

}
.form-lr{
  width: 100%;
  height: 1000px;
  display: flex;
}
.form-right {
  width: 35%;
  height: 100%;
  margin-left: 0px;
  background-color: #e7eeff;

}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding-right: 10px;
}

#nav a:not(:first-child) {
  border-left: 1px solid #2c3e50;
  padding-left: 10px; 
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

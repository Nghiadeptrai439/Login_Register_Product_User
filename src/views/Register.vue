<template>
     <div class="row" style="">
            <div class="colm-form">
            <h3 style="color:red;">{{message}}</h3>
             <h1 style="color: #5b86e5; width: 500px; font-size: 50px; margin-left: -25px;  font-weight: 600;">Register Account</h1>
                <div class="form-container">
                    <!-- <input type="text" v-model="fullname" placeholder="Full Name">
                    <input type="email" v-model="username" placeholder="Your email">
                    <input type="password" v-model="password" placeholder="Password"> -->
                    <form action="">
        <div class="single-input">
        <span><i class="fa fa-user"></i></span>
        <input v-model="fullname" type="text" placeholder="Full Name">
      </div>
      <div class="single-input">
        <span><i class="fa fa-envelope icon"></i></span>
        <input v-model="username" type="text" placeholder="Your email">
      </div>
      <div class="single-input">
        <span><i class="fas fa-lock"></i></span>
        <input v-model="password" type="password" placeholder="Password">
        <button type="text" style=" border:0px;  background-color: white ; color:black; font-weight: 600;">HIDE</button>
      </div>

    </form>
                    <button class="btn-login" @click="register">Create Free Account</button>
                    <div style="margin-top: 21px;">
                        <span style="margin-left: -14px;font-size: 18px;">By providing your email, you are agreeing to our </span>
                        <a style="    font-size: 18px; margin-right: 268px; text-decoration: none;"> terms of service</a>
                    </div>
                        
                    
                    <span style=" margin-bottom: 20px;">
                    Or Register with
                    </span>
                    <div style="margin-top:30px;display:flex;">
                        <p><img style="width: 195px;" src="../../images/google_btn.png"/></p>
                        <p><img style="width: 195px;margin-left: 5px;" src="../../images/btn_fb.png"/></p>
                    </div>
                    <div style="    display: flex; margin-top:30px;">
                        <span style="margin-left: ;">Already have an account?</span>
                        <router-link to="/login" style="margin-left:10px ;margin-top:-8px ;border-bottom: solid 0px;"> Login now</router-link >
                    </div>
                </div>
            </div>
            <Auth />
        </div>
        
</template>

<script>
import axios from 'axios';
import Auth from '@/components/Auth.vue'
    export default {
        name: 'Login',
        data() {
            return {
                username: '',
                password: '',
                fullname: '',
                message: ''
            }
        },
         components: {
    Auth
  },
        methods: {
            register() {
                axios.post(`https://sohead-api-dev.socialhead.dev/api/app/sign-up`, {
      email: this.username,
      password: this.password,
      name: this.fullname
    })
    .then(response => {
         console.log( response.data.status)
        if(response.data.status == true){
            
            this.message = 'Đăng ký thành công';
        }
    })
    .catch(e => {
        this.message = 'Đăng ký thất bại';
      this.errors.push(e)
    })
            }
        },
        mounted() {
             const value = ('; '+document. cookie). split(`; token=`)
            //console.log(value[1])
            if(value[1]){
               this.$router.push({ path: '/' })
            }
            }
    }
</script>

<style>
.single-input{
    width: 100%;
  border:1px solid #c1c1c1;
  display: flex;
  margin-bottom: 15px;
}
.single-input i{
  padding: 20px 16px;
}
.single-input input{
  border:0px solid #c1c1c1;
  width: 100%;
  outline: none;
  height: 30px;
  font-size: 18px;
}
.row {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    max-width: 1000px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.colm-logo {
    flex: 0 0 50%;
    text-align: left;
}

.colm-form {
    flex: 0 0 40%;
    text-align: center;
}

.colm-logo img {
    max-width: 480px;
}

.colm-logo h2 {
    font: 26px;
    font-weight: 400;
    padding: 0 30px;
    line-height: 32px;
}

.colm-form .form-container {
    background-color: #ffffff;
    border: none;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
    padding: 20px;
    max-width: 400px;
}

.colm-form .form-container input, .colm-form .form-container .btn-login {
    width: 100%;
    margin: 5px 0;
    height: 45px;
    vertical-align: middle;
    font-size: 16px;
}

.colm-form .form-container input {
    color: #1d2129;
    padding: 0 8px;
    outline: none;
}

.colm-form .form-container input:focus {
    border-color: #1877f2;
    box-shadow: 0 0 0 2px #e7f3ff;
}

.colm-form .form-container .btn-login {
    background-color: #1877f2;
    border: none;
    border-radius: 6px;
    font-size: 20px;
    padding: 0 16px;
    color: #ffffff;
    font-weight: 700;
}

.colm-form .form-container a {
    display: block;
    color: #1877f2;
    font-size: 14px;
    text-decoration: none;
    padding: 10px 0 20px;
    border-bottom: 1px solid #dadde1;
}

.colm-form .form-container a:hover {
    text-decoration: underline;
}

.colm-form .form-container .btn-new {
    background-color: #42b72a;
    border: none;
    border-radius: 6px;
    font-size: 17px;
    line-height: 48px;
    padding: 0 16px;
    color: #ffffff;
    font-weight: 700;
    margin-top: 20px; 
}

.colm-form p {
    font-size: 14px;
}

.colm-form p a {
    text-decoration: none;
    color: #1c1e21;
    font-weight: 600;
}

.colm-form p a:hover {
    text-decoration: underline;
}

.footer-contents {
    position: relative;
    max-width: 1000px;
    margin: 0 auto;
}

footer ol {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 10px 0;
}

footer ol:first-child {
    border-bottom: 1px solid #dddfe2;
}
           
footer ol:first-child li:last-child button {
    background-color: #f5f6f7;
    border: 1px solid #ccd0d5;
    outline: none;
    color: #4b4f56;
    padding: 0 8px;
    font-weight: 700;
    font-size: 16px;
}

footer ol li {
    padding-right: 15px;
    font-size: 12px;
    color: #385898;
}

footer ol li a {
    text-decoration: none;
    color: #385898;
}

footer ol li a:hover {
    text-decoration: underline;
}

footer small {
    font-size: 11px;
}

</style>
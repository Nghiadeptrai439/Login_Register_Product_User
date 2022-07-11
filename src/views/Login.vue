<template>
    
     <div class="row">
           
            <div class="colm-form">
                <h3 style="color:red;">{{message}}</h3>
            <h1 style="color: #5b86e5; width: 500px; font-size: 50px; margin-left: -25px;">Hi, Welcome Back!</h1>
                <div class="form-container">
    <form action="">
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
      
                    <div class="main-remember">
                         <div class="remember">
                        <input type="checkbox" style="width: 20px;margin-top: 0px;"/>
                        <label for="" style="margin-top: 15px;margin-left: 13px; font-weight: 500;">Remember Me</label>
                    </div>
                    <div class="forgot" style="margin-left: 84px;" >
                          <a style="margin-top: 10px;  border-bottom: solid 0px;">Forgot password?</a>
                    </div>
                  
                    </div>
                   
                    <button style="margin-bottom: 28px" class="btn-login" @click="login">Login</button>
                  
                     <span style=" margin-bottom: 20px;">
                    Or login with
                    </span>
                    <div style="margin-top:30px;display:flex;">
                        <p><img style="width: 195px;" src="../../images/google_btn.png"/></p>
                        <p><img style="width: 195px;margin-left: 5px;" src="../../images/btn_fb.png"/></p>
                    </div>
                    <div style="    display: flex; margin-top:30px;">
                        <span style="margin-left: ;">Don't have an account?</span>
                        <router-link to="/register" style="margin-left:10px ;margin-top:-8px ;border-bottom: solid 0px;"> Create a Free Account</router-link >
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
                message: ''

            }
        },
         components: {
    Auth
  },
        methods: {
            
            login() {
                axios.post(`https://sohead-api-dev.socialhead.dev/api/app/sign-in`, {
      email: this.username,
      password: this.password
    })
    .then(response => {
        // console.log(response.data.data.token)
         var current = new Date(); //'Mar 11 2015' current.getTime() = 1426060964567
        var followingDay = new Date(current.getTime() + 86400000); // + 1 day in ms
        followingDay.toLocaleDateString();
        console.log(followingDay);
        // now.setTime(expireTime);
        if(response.data.data.token){
            //this.$cookie.set("token", response.data.data.token, 86400)
            var token = response.data.data.token;
            document.cookie = "token="+token+"; expires="+followingDay;
            this.$router.push({ path: '/' })
        }

    })
    .catch(e => {
      this.message = 'Login thất bại';
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
.main_div{
  width: 365px;
  background: #fff;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.15);
}
.main_div .title{
  text-align: center;
  font-size: 30px;
  font-weight: 600;
}
.main_div .social_icons{
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
form {
  margin-top: 25px;
}
form .input_box{
  height: 50px;
  width: 100%;
  position: relative;
  margin-top: 15px;
}
.input_box input{
  height: 100%;
  width: 100%;
  outline: none;
  border: 1px solid lightgrey;
  border-radius: 5px;
  padding-left: 45px;
  font-size: 17px;
  transition: all 0.3s ease;
}
.input_box input:focus{
  border-color: #be2edd;
}
.input_box .icon{
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  color: grey;
}
form .option_div{
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
}
.option_div .check_box{
  display: flex;
  align-items: center;
}
.option_div span{
  margin-left: 5px;
  font-size: 16px;
  color: #333;
}
.option_div .forget_div a{
  font-size: 16px;
  color: #be2edd;
}
.button input{
  padding-left: 0;
  background: #be2edd;
  color: #fff;
  border: none;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s linear;
}
.button input:hover{
  background: #a720c5;
}
form .sign_up{
  text-align: center;
  margin-top: 25px;
}
.sign_up a{
  color: #be2edd;
}
form a{
  text-decoration: none;
}
form a:hover{
  text-decoration: underline;
}

.main-remember{
     display: flex;
}
.remember{
    display: flex;
    width:200px;
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
    margin-right: -60px;
}

.colm-form {
    margin-top:300px;
    flex: 0 0 40%;
    text-align: center;
}

.colm-logo img {
    margin-top:300px;
    width: 450px;
    height: 330px;
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
    background-color: #5b86e5;
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
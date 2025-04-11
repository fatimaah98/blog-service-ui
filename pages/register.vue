<template>
  <section class="container">
      <form class="form register-form">
        <div class="left-side image-bg"></div>
        <div class="form-content">
          <header>
            <p class="welcome">خوش آمدید !</p>
            <div class="go-register-text">
              <p>حساب کاربری دارید؟</p>
              <NuxtLink to="/login">وارد شوید!</NuxtLink>
            </div>

            <div class="login-methods">
              <div>
                <img
                  src="~/assets/images/google.png"
                  alt=""
                  class="login-logo"
                />
                ورود با جیمیل
              </div>
              <div>
                <img src="~/assets/images/meta.png" alt="" class="login-logo" />
                ورود با متا
              </div>
            </div>
          </header>
          <main class="form-main">
            <p class="or">یا وارد شوید با :</p>

            <div class="inputs-container">
                <input class="form-input fullName" name="name" type="text" placeholder="نام و نام خانوادگی ...">
                <input class="form-input username" name="username" type="text" placeholder="نام کاربری ...">
                <input class="form-input email" name="email" type="email" placeholder="آدرس ایمیل ...">
                <input class="form-input password" name="password" type="password" placeholder="گذرواژه ...">
            </div>
            <div>
                <div class="remember-me">
                    <input type="checkbox" name="remember-me" id="remember-me">
                    <label for="remember-me">مرا به خاطر بسپار</label>
                </div>
            </div>
          </main>
          <footer class="form-footer">
            <button class="login-button" @click.prevent="registerUser">
                ثبت نام کنید
            </button>
          
          </footer>
        </div>
      </form>
    </section>
</template>

<script setup>
    useSeoMeta({
        title: 'ثبت نام کنید'
    })
    const self = getCurrentInstance();

    const registerUser = async() => {
        const inputs = self.vnode.el.querySelectorAll('.form-input');
        let body = {};
        inputs.forEach(input => body[input.name] = input.value);

        const {data, status, error} = await useFetch("/api/auth/register", {
            body, 
            method: 'post'
        });
        console.log(data.value, status.value); 
        console.log(error.value);
    }
</script>

<style scoped>
@import "~/assets/css/login.css";
@import "~/assets/css/register.css";
</style>
<template>
<section class="container">
      <form action="#" class="form">
        <div class="left-side image-bg"></div>
        <div class="form-content">
          <header>
            <p class="welcome">خوش آمدید !</p>
            <div class="go-register-text">
              <p>حساب کاربری ندارید؟</p>
              <NuxtLink href="/register">ثبت نام کنید !</NuxtLink>
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
                <input class="form-input" type="text" placeholder="نام کاربری ...">
                <input class="form-input" type="password" placeholder="گذرواژه ...">
            </div>
            <div>
                <div class="remember-me">
                    <input type="checkbox" name="remember-me" id="remember-me">
                    <label for="remember-me">مرا به خاطر بسپار</label>
                </div>
            </div>
          </main>
          <footer class="form-footer">
            <button class="login-button">
                وارد شوید
            </button>
          
          </footer>
        </div>
      </form>
    </section>
</template>

<script setup>
    useSeoMeta({
        title: 'وارد شوید'
    })
</script>

<style scoped>
@import "~/assets/css/login.css";
</style>
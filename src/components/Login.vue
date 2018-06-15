<template>
  <div>
    <div class="form-wrapper">
      <form action="#" id="form" @submit.prevent="checkLogin">
        <div class="form-row">
          <input class="form-input"
                 type="text"
                 name="login"
                 :placeholder="$t('form.login')"
                 v-model="login"
                 required>
        </div>
        <div class="form-row">
          <input class="form-input"
                 type="password"
                 name="password"
                 :placeholder="$t('form.password')"
                 v-model="password"
                 required>
        </div>
        <div class="form-row">
          <button class="form-button" type="submit">{{ $t('form.submit') }}</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      login: '',
      password: '',
    };
  },
  methods: {
    checkLogin() {
      const formData = {
        login: this.login,
        password: this.password,
      };

      this.$store.dispatch('auth/login', formData).then((response) => {
        if (!response) {
          // eslint-disable-next-line
          alert('Login or password are invalid');
          return;
        }
        this.$router.push('/scan');
      }).catch((e) => {
        throw new Error(e);
      });
    },
  },
};
</script>

<style scoped>
  .form-wrapper {
    max-width: 240px;
    width: 100%;
    margin: 0 auto;;
    text-align: center;
  }

  .form-row {
    margin: 5px 0;
  }

  .form-input {
    max-width: 100%;
    width: 100%;
    box-sizing: border-box;
  }

  .form-button {
    padding: 5px 15px;
    border-radius: 4px;
  }
</style>

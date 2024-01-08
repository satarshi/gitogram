<template>
  <div class="auth-wrapper">
    <h1 class="auth-title">Gitogram /</h1>
    <Button @click="getCode" title="Войти с помощью Github"></Button>
  </div>
</template>

<script>
import { button } from '@/components/button'

import env from '../../../env'

export default {
  name: 'auth',
  components: {
    Button: button
  },
  methods: {
    getCode() {
      const githubAuthApi = 'https://github.com/login/oauth/authorize'
      const params = new URLSearchParams()
      params.append('client_id', env.clientId)
      params.append('scope', 'repo:status read:user public_repo')

      window.location.href = `${githubAuthApi}?${params}`
    }
  },
  async created() {
    const code = new URLSearchParams(window.location.search).get('code')

    if (code) {
      try {
        const response = await fetch('https://webdev-api.loftschool.com/github', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            clientId: env.clientId,
            code,
            clientSecret: env.clientSecret
          })
        })

        const { token } = await response.json()

        localStorage.setItem('token', token)
        this.$router.replace({ name: 'feeds' })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<styles lang="scss" scoped>
.auth-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;

  .auth-title {
    font-size: 48px;
    margin-bottom: 38px;
  }
}
</styles>

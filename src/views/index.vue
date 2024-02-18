<template>
    <div>
      <h1>Hi</h1>
      <h2>Hello</h2>
      <form @submit.prevent="logout">
        <button type="submit">Log Out</button>
      </form>
    </div>
</template>

<script>
export default {
    /*
  data() {
    return {
      name: 'ユーザー名',
      id: 'ユーザーID'
    }
  },
  */
 
  methods: {
    logout() {
      // ログアウト処理を実装
      // 実際には、ここでAPIエンドポイントにリクエストを送信するか、
      // ルーティングを使ってログアウトページにリダイレクトするかもしれません
      console.log('ログアウト処理');
    }
  }
}
</script>

<style>
/* スタイルはここに追加 */
</style>
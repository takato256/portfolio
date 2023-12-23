<template>
    <div>
        <h1>Career</h1><br>
        <div v-for="(card, index) in cards" :key="index" class="card-container">
            <div class="year" v-if="card.year">{{ card.year }}</div>
            <div class="card">
                <div class="card-body">
                    <h3 class="card-title">{{ card.title }}</h3>
                    <p class="card-text">{{ card.content }}</p>
                </div>
            </div>
            <div class="line" v-if="index < cards.length - 1"></div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      cards: [
        { title: '滑川高等学校', content: '普通科 卒業', year: '2021/3' },
        { title: '金沢工業大学', content: '工学部 情報工学科 入学', year: '2021/4' },
        { title: 'FUJITSU Academy', content: '2days event', year: '2021/10' },
        { title: 'SecHack365', content: '開発駆動コース 仲山ゼミ', year: '2022/5' },
        { title: 'セキュリティ・ミニキャンプ', content: 'in 東京 2022', year: '2022/12' },
        { title: '技育CAMPキャラバン in 金沢', content: 'CARTA HOLDINGS賞 受賞', year: '2023/7' },
        { title: 'KLab Expert Camp', content: 'TCP/IPプロトコルスタック自作', year: '2023/8' },
        { title: '技育展2023 決勝大会', content: 'ゆめみ賞 受賞', year: '2023/9' },
        { title: 'NTT東日本 インターンシップ', content: 'ネットワークエンジニア仕事体験コース', year: '2023/12' }
      ]
    }
  }
}
</script>

<style scoped>
.card-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.card-body {
  padding: 50px;
}

.line {
    width: 4px;
    height: 30px;
    background-color: #000;
    margin: 10px 0;
}

.year {
    margin-top: 10px;
    font-size: 18px;
}
</style>

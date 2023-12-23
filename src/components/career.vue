<template>
  <div>
    <h1>Career</h1><br>
    <div v-for="(card, index) in cards" :key="index" class="card-container">
      <div class="card-row">
        <div class="year">{{ card.year }}</div>
        <div class="card mx-auto" style="width:600px;">
          <div class="row no-gutters">
            <div class="col-lg-6">
              <img class="card-img" :src="card.image" style="width: 60%;" alt="Card image">
            </div>
            <div class="col-lg-6 d-flex align-items-center">
              <div class="card-body">
                <h4 class="card-title" style="white-space: pre-wrap;">{{ card.title }}</h4>
                <p class="card-text" style="white-space: pre-wrap;">{{ card.content }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cards: [
        { title: '富山県立滑川高等学校', content: '普通科 卒業', image: require('@/assets/weight.jpg'), year: '2021/3' },
        { title: '金沢工業大学', content: '工学部 情報工学科 入学', image: require('@/assets/kit.jpeg'), year: '2021/4' },
        { title: 'FUJITSU Academy', content: '2days event', image: require('@/assets/nakaya.png'), year: '2021/10' },
        { title: 'SecHack365', content: '開発駆動コース 仲山ゼミ', image: require('@/assets/SecHack365.png'), year: '2022/5' },
        { title: 'セキュリティ\nミニキャンプ', content: 'in 東京 2022', image: require('@/assets/seccamp.jpg'), year: '2022/12' },
        { title: '技育CAMPキャラバン\nin 金沢', content: 'CARTA HOLDINGS賞 受賞', image: require('@/assets/caravan.jpg'), year: '2023/7' },
        { title: 'KLab Expert Camp', content: 'TCP/IPプロトコルスタック自作', image: require('@/assets/klab.jpg'), year: '2023/8' },
        { title: '技育展2023 決勝大会', content: 'ゆめみ賞 受賞', image: require('@/assets/geekten.jpg'), year: '2023/9' },
        { title: 'NTT東日本\nインターンシップ', content: 'ネットワークエンジニア\n仕事体験コース', image: require('@/assets/nakaya.png'), year: '2023/12' }
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

.card-row {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.card {
  position: relative;
}

.year {
  font-size: 20px;
  margin: 0 30px;
}
</style>

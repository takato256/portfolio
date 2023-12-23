<template>
    <div>
        <h1>Career</h1><br>
        <div v-for="(card, index) in cards" :key="index" class="card-container">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">{{ card.title }}</h4>
                    <h6 class="card-subtitle mb-2 text-muted">{{ card.subtitle }}</h6>
                    <p class="card-text">{{ card.content }}</p>
                    <a href="#!" class="card-link">Card link</a>
                    <a href="#!" class="card-link">Another link</a>
                </div>
            </div>
            <div class="line" v-if="index < cards.length - 1"></div>
            <div class="year" v-if="card.year">{{ card.year }}</div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      cards: [
        { title: 'Card title 1', subtitle: 'Card subtitle 1', content: 'Content for card 1', year: '2022' },
        { title: 'Card title 2', subtitle: 'Card subtitle 2', content: 'Content for card 2', year: '2023' }
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

.line {
    width: 2px;
    height: 50px;
    background-color: #000;
    margin: 10px 0;
}

.year {
    margin-top: 10px;
}
</style>

<template>
  <form @submit.prevent="calculate" class="monologue">
    <div>
      <label for="mProgram">Program (1-100):</label>
      <input id="mProgram" type="number" v-model="program" min="1" max="512" required />
    </div>
    <button type="submit">Calculate</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      bank: 0,
      program: null,
    };
  },
  methods: {
    calculate() {
      if (this.program < 1 || this.program > 100) {
        alert("Program number must be between 1 and 100.");
        return;
      }
      const bankAbleton = 1; // fixed at one
      const subAbleton = 1; // fixed at one
      const programAbleton = Number(this.program);
      this.$emit('output', { bank: bankAbleton, sub: subAbleton, program: programAbleton });
    },
  },
};
</script>

<style scoped>
.monologue {
    background-color: #000080; /* Dark blue, almost navy */
    border: 1px solid #333;
}

.monologue label {
    color: #f0f0f0; /* Almost white */
}

.monologue input, .monologue select, .monologue button {
    background-color: #d7d5d5; /* Grey color like synth body */
    color: #333333; /* Dark text */
}

.monologue button {
    background-color: #3B4559;
    color: #f0f0f0; /* Almost white */
    border: none;
    cursor: pointer;
    margin-top: 10px;
    padding: 10px;
    font-size: 16px;
    border-radius: 3px;
}

.monologue button:hover {
    background-color: #050E20;
}
</style>

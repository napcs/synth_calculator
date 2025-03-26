<!-- src/components/JunoCalculator.vue -->
<template>
  <form @submit.prevent="calculate" class="juno">
    <div>
      <label for="junoBank">Bank (1-8):</label>
      <input id="junoBank" type="number" v-model="bank" min="1" max="8" required />
    </div>
    <div>
      <label for="junoProgram">Program (1-8):</label>
      <input type="number" v-model="program" min="1" max="8" required />
    </div>
    <button type="submit">Calculate</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      bank: null,
      program: null,
    };
  },
  methods: {
    calculate() {
      const bankAbleton = 1; // Bank is fixed at 1
      const subAbleton = 1; // Sub is fixed at 1
      const programAbleton = (this.bank - 1) * 8 + Number(this.program); // Program is calculated across the banks
      this.$emit('output', { bank: bankAbleton, sub: subAbleton, program: programAbleton });
    },
  },
};
</script>

<style scoped>
.juno {
    background-color: #000080; /* Dark blue, almost navy */
    border: 1px solid #000060;
}

.juno label {
    color: #f0f0f0; /* Almost white */
}

.juno input, .juno select, .juno button {
    background-color: #d7d5d5; /* Grey color like synth body */
    color: #333333; /* Dark text */
}

.juno button {
    background-color: #000060;
    color: #f0f0f0; /* Almost white */
    border: none;
    cursor: pointer;
    margin-top: 10px;
    padding: 10px;
    font-size: 16px;
    border-radius: 3px;
}

.juno button:hover {
    background-color: #000040;
}
</style>

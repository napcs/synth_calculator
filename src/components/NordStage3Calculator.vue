<!-- src/components/NordStage3Calculator.vue -->
<template>
  <form @submit.prevent="calculate" class="nord">
    <div>
      <label for="nordBank">Bank (A-Z):</label>
      <select id="nordBank" v-model="bank">
        <option value="A">Bank A</option>
        <option value="B">Bank B</option>
        <option value="C">Bank C</option>
        <option value="D">Bank D</option>
        <option value="E">Bank E</option>
        <option value="F">Bank F</option>
        <option value="G">Bank G</option>
        <option value="H">Bank H</option>
        <option value="I">Bank I</option>
        <option value="J">Bank J</option>
        <option value="J">Bank K</option>
        <option value="L">Bank L</option>
        <option value="M">Bank M</option>
        <option value="N">Bank N</option>
        <option value="O">Bank O</option>
        <option value="P">Bank P</option>
        <option value="Q">Bank Q</option>
        <option value="R">Bank R</option>
        <option value="S">Bank S</option>
        <option value="T">Bank T</option>
        <option value="U">Bank U</option>
        <option value="V">Bank V</option>
        <option value="W">Bank W</option>
        <option value="X">Bank X</option>
        <option value="Y">Bank Y</option>
        <option value="Z">Bank Z</option>
      </select>
    </div>
    <div>
      <label for="nordNumber1">Number 1 (1-5):</label>
      <input id="nordNumber1" type="number" v-model="number1" min="1" max="5" required />
    </div>
    <div>
      <label for="nordNumber2">Number 2 (1-5):</label>
      <input id="nordNumber2" type="number" v-model="number2" min="1" max="5" required />
    </div>
    <button type="submit">Calculate</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      bank: '',
      number1: null,
      number2: null,
    };
  },
  methods: {
    calculate() {
      const bankIndex = this.bank.charCodeAt(0) - 65; // A=0, B=1, ..., Z=25
      const programNumber = (Number(this.number1) - 1) * 5 + Number(this.number2); // Calculate the program number (1-25)
      const totalProgramNumber = bankIndex * 25 + programNumber;
      const bankAbleton = 1; // Bank is fixed at 1
      const subAbleton = Math.floor(bankIndex / 5) + 1; // Sub is determined by the group of 5 banks
      const programAbleton = totalProgramNumber - (subAbleton - 1) * 125; // Program is calculated within the sub
      this.$emit('output', { bank: bankAbleton, sub: subAbleton, program: programAbleton });
    },
  },
};
</script>

<style scoped>
.nord {
    background-color: #8B0000; /* Deep red, dulled */
    border: 1px solid #660000;
}

.nord label {
    color: #f2f2f2; /* Almost white */
}

.nord input, .nord select, .nord button {
    background-color: #e8e3e3;
    color: #333333; /* Dark text */
}

.nord button {
    background-color: #660000;
    color: #f2f2f2; /* Almost white */
    border: none;
    cursor: pointer;
    margin-top: 10px;
    padding: 10px;
    font-size: 16px;
    border-radius: 3px;
}

.nord button:hover {
    background-color: #500000;
}
</style>

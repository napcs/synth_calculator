<!-- src/components/UltranovaCalculator.vue -->
<template>
  <form @submit.prevent="calculate" class="ultra">
    <div>
      <label for="ultranovaBank">Bank:</label>
      <select id="ultranovaBank" v-model="bank">
        <option value="2">Bank A</option>
        <option value="3">Bank B</option>
        <option value="4">Bank C</option>
        <option value="5">Bank D</option>
      </select>
    </div>
    <div>
      <label for="ultranovaProgram">Program (0-127):</label>
      <input id="ultranovaProgram" type="number" v-model="program" min="0" max="127" required />
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
      if (this.program < 0 || this.program > 127) {
        alert("Program number must be between 0 and 127.");
        return;
      }
      const bankAbleton = 1; // Bank is fixed at 1
      const subAbleton = Number(this.bank); // Sub-Bank starts at 2 for Bank A
      const programAbleton = Number(this.program) + 1; // Program is 1-based
      this.$emit('output', { bank: bankAbleton, sub: subAbleton, program: programAbleton });
    },
  },
};
</script>

<style scoped>
.ultra {
    background-color: #315fab;
    border: 1px solid #0E1049;
}

.ultra label {
    color: #e0e0e0; /* Light grey */
}

.ultra input, .ultra select, .ultra button {
    background-color: #d7d5d5; /* Grey color like synth body */
    color: #333333; /* Dark text */
}

.ultra button {
    background-color: #232568;
    color: #e0e0e0; /* Light grey */
    border: none;
    cursor: pointer;
    margin-top: 10px;
    padding: 10px;
    font-size: 16px;
    border-radius: 3px;
}

.ultra button:hover {
    background-color: #0E1049;
}
</style>

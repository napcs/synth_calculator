<!-- src/components/NordRackCalculator.vue -->
<template>
  <form @submit.prevent="calculate" class="nord">
    <div>
      <label for="nordRackBank">Bank:</label>
      <select id="nordRackBank" v-model="bank">
        <option value="0">Internal</option>
        <option value="1">Card Bank 1</option>
        <option value="2">Card Bank 2</option>
        <option value="3">Card Bank 3</option>
        <option value="4">Card Bank 4</option>
      </select>
    </div>
    <div>
      <label for="nordRackProgram">Program (1-128):</label>
      <input id="nordRackProgram" type="number" v-model="program" min="1" max="128" required />
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
      if (this.program < 1 || this.program > 128) {
        alert("Program number must be between 1 and 128.");
        return;
      }
      const bankAbleton = 1; // Bank is fixed at 1
      const subAbleton = this.bank + 1; // Sub is the bank value + 1
      const programAbleton = this.program; // Program is the same as the input
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

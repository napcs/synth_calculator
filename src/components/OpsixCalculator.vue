<!-- src/components/OpsixCalculator.vue -->
<template>
  <form @submit.prevent="calculate" class="opsix">
    <div>
      <label for="opsixBank">Bank:</label>
      <select id="opsixBank" v-model="bank">
        <option value="0">Bank 1</option>
        <option value="1">Bank 2</option>
        <option value="2">Bank 3</option>
      </select>
    </div>
    <div>
      <label for="opsixProgram">Program (0-127):</label>
      <input id="opsixProgram" type="number" v-model="program" min="0" max="127" required />
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
      const subAbleton = this.bank + 1; // Sub-Bank starts at 1 for Bank 1
      const programAbleton = this.program + 1; // Program is 1-based
      this.$emit('output', { bank: bankAbleton, sub: subAbleton, program: programAbleton });
    },
  },
};
</script>

<style scoped>
.opsix {
    background-color: #00422c;
    border: 1px solid #002060;
}

.opsix label {
    color: #f0f0f0; /* Almost white */
}

.opsix input, .opsix select, .opsix button {
    background-color: #d7d5d5; /* Grey color like synth body */
    color: #333333; /* Dark text */
}

.opsix button {
    background-color: #01714c;
    color: #f0f0f0; /* Almost white */
    border: none;
    cursor: pointer;
    margin-top: 10px;
    padding: 10px;
    font-size: 16px;
    border-radius: 3px;
}

.opsix button:hover {
    background-color: #025137;
}
</style>

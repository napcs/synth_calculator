<template>
  <form @submit.prevent="calculate" class="opsix">
    <div>
      <label for="mfProgram">Program (1-512):</label>
      <input id="mfProgram" type="number" v-model="program" min="1" max="512" required />
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
      if (this.program < 1 || this.program > 512) {
        alert("Program number must be between 1 and 512.");
        return;
      }
      const bankAbleton = Math.ceil(this.program / 128)
      const subAbleton = 1; // fixed at one
      const programAbleton = ((this.program - 1) % 128) + 1
      this.$emit('output', { bank: bankAbleton, sub: subAbleton, program: programAbleton });
    },
  },
};
</script>

<style scoped>
.opsix {
    background-color: #19253C;
    border: 1px solid #333;
}

.opsix label {
    color: #f0f0f0; /* Almost white */
}

.opsix input, .opsix select, .opsix button {
    background-color: #d7d5d5; /* Grey color like synth body */
    color: #333333; /* Dark text */
}

.opsix button {
    background-color: #3B4559;
    color: #f0f0f0; /* Almost white */
    border: none;
    cursor: pointer;
    margin-top: 10px;
    padding: 10px;
    font-size: 16px;
    border-radius: 3px;
}

.opsix button:hover {
    background-color: #050E20;
}
</style>

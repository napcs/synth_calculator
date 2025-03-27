<!-- src/App.vue -->
<template>
  <div id="app">
    <h1>Ableton Program Change Synth Calculator</h1>
    <p>
      Enter the patch number of the hardware synth and get the Bank, Sub, and Program numbers.
    </p>
    <div class="tabs">
      <router-link to="/nord-stage-3" class="tab" active-class="active-tab">Nord Stage 3</router-link>
      <router-link to="/juno" class="tab" active-class="active-tab">JU-06 Boutique</router-link>
      <router-link to="/nord-rack" class="tab" active-class="active-tab">Nord Rack</router-link>
      <router-link to="/ultranova" class="tab" active-class="active-tab">Ultranova</router-link>
      <router-link to="/opsix" class="tab" active-class="active-tab">Opsix</router-link>
      <router-link to="/mf" class="tab" active-class="active-tab">MicroFreak</router-link>
      <router-link to="/monologue" class="tab" active-class="active-tab">Monologue</router-link>
    </div>
    <router-view @output="setOutput"></router-view>
    <div class="output">
      <span>Bank:</span><span>{{ output.bank }}</span>
      <span>Sub:</span><span>{{ output.sub }}</span>
      <span>Program:</span><span>{{ output.program }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      output: {
        bank: 'N/A',
        sub: 'N/A',
        patch: 'N/A',
      },
    };
  },
  methods: {
    setOutput(output) {
      this.output = output;
    },
  },
};
</script>

<style>
body {
    font-family: Arial, sans-serif;
    margin: 20px;
}

h1, h2 {
    text-align: center;
}

.tabs {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}

.tab {
    padding: 10px 20px;
    margin: 0 10px;
    text-decoration: none;
    color: black;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.active-tab {
    background-color: #ccc;
}

.output {
    text-align: center;
    margin-top: 20px;
}

.output p {
    font-size: 18px;
    font-weight: bold;
}
</style>

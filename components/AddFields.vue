<template>
    <div>
        <div class="form-group" v-for="(input,k) in inputs" :key="k">
    <input type="text" class="form-control" v-model="input.name">
    <input type="text" class="form-control" v-model="input.party">
    <span>
      <i class="fas fa-minus-circle" @click="remove(k)" v-show="k || ( !k && inputs.length > 1)">Remove</i>
      <i class="fas fa-plus-circle" @click="add(k)" v-show="k == inputs.length-1">Add fields</i>
    </span>
  </div>
  <button @click="addCandidate">
    Submit
  </button>
    </div>
</template>

<script>
  data () {
    return {
      inputs: [{
        name: '',
        party: ''
      }]
    }
  };

  methods: {
    add () {
      this.inputs.push({
        name: '',
        party: ''
      })
      console.log(this.inputs)
    };

    remove (index) {
      this.inputs.splice(index, 1)
    };

    addCandidate () {
      axios
        .post('/candidates', {
          my_prop_name: JSON.stringify(this.inputs)
        })
        .then(response => {})
        .catch(error => {})
    }
</script>

<style lang="scss" scoped>

</style>
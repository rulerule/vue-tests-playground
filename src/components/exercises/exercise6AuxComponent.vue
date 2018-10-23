<template>
  <div class="exercise-6-aux-component">
    <li class="list-group-item">
        Server #{{ internalIndex }}
    </li>
  </div>
</template>

<script>
export default {
  props: {
    dataIndex: Number
  },
  data () {
    return {
      internalIndex: this.dataIndex
    }
  }
}
</script>

<style>
</style>

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Installed CLI Plugins</h3>
    <div>这是一个由父组件传过来的数：{{ numdel }}</div>
    <button type="button" @click="toParent">点击向父组件传递数据</button>
    <input
      type="text"
      :value="val"
      @input="$emit('update:val', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
    numdel: {
      style: Number,
      default: 0
    },
    val: {
      style: String,
      default: ""
    }
  },
  data() {
    return {
      parentInfo: "这是一个由子组件传给父组件的一个信息"
    };
  },
  methods: {
    toParent: function() {
      this.$emit("parentFun", this.parentInfo);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

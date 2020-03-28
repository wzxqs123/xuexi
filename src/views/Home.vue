<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld
      msg="Welcome to Your Vue.js App"
      :numdel="numdels"
      @parentFun="getMsgFormSon"
      :val.sync="name"
    />
    <div>{{ msgs }}</div>
    <div>子组件传给父组件的值为：{{ childInfo }}</div>
    <div>使用sync从子组件传值回父组件的值为：{{ name }}</div>
    <div>a:{{ $store.state.count }}</div>
    <button @click="addCount">点击count+1</button>
    <div>当前状态：{{ $store.state.ceshi.show }}</div>
    <button @click="changeStare">点击改变当前状态</button>
    <div>b:{{ $store.state.ceshi.newcount }}</div>
    <button @click="actionsFun">同时对两个mutations进行操作</button>
    <div>显示与上述相反的状态：{{ $store.getters.contrary }}</div>
    <div>b*10={{ multiplication }}</div>
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "home",
  data() {
    return {
      msgs: "this is vue model",
      numdels: 123456789,
      childInfo: "",
      name: "xiaoming"
    };
  },
  components: {
    HelloWorld
  },
  methods: {
    ...mapActions(["switch_dialog"]),
    ...mapMutations(["increment", "changeState"]),
    getMsgFormSon: function(data) {
      this.childInfo = data;
    },
    addCount: function() {
      // this.$store.commit("increment")
      this.increment();
    },
    changeStare: function() {
      // this.$store.commit("changeState")
      this.changeState();
    },
    actionsFun: function() {
      // this.$store.dispatch("switch_dialog")
      this.switch_dialog();
    }
  },
  computed: {
    ...mapState({
      show: state => state.ceshi.newcount
    }),
    ...mapGetters(["multiplication"])
  },
  mounted: function() {
    // 实例构建完成后调用
  }
};
</script>
<style scoped lang="scss">
@mixin display-flex-center {
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
}
$center: center;
.home {
  @include display-flex-center;
  text-align: $center;
}
</style>

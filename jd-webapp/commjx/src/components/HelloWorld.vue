<template>
  <div>
<!--    <van-button type="default">默认按钮</van-button>-->
<!--    <van-button type="primary">主要按钮</van-button>-->
<!--    <van-button type="info">信息按钮</van-button>-->
<!--    <van-button type="warning">警告按钮</van-button>-->
<!--    <van-button type="danger" href="#/views/adda">危险按钮</van-button>-->
    <van-card
            num="2"
            price="2.00"
            desc="描述信息"
            title="商品标题"
            thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
    />
    <van-card
            num="2"
            tag="标签"
            price="2.00"
            desc="描述信息"
            title="商品标题"
            thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
            origin-price="10.00"
    />
    <van-card
            num="2"
            price="2.00"
            desc="描述信息"
            title="商品标题"
            thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
    >
      <div slot="tags">
        <van-tag plain type="danger">标签</van-tag>
        <van-tag plain type="danger">标签</van-tag>
      </div>
      <div slot="footer">
        <van-button size="mini">按钮</van-button>
        <van-button size="mini">按钮</van-button>
      </div>
    </van-card>
  </div>
</template>

<script>
  import { Card } from 'vant';
  import { button } from "vant"
export default {
  name: 'HelloWorld',
  components:{
    [button.name]:button,
    [Card.name]:Card
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

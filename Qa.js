/*
*
*   redux  中提供了 一种slice 的模式，可以对每个组件自己的variable 存储，
*   然后在store文件中 通过 configureStore的方式统一绑定到全局上，在index文件中 添加了
*   嵌套Provide标签 添加了 store属性 添加数据
*
*   使用HOOK后 组件自身包含了其 状态
*
*
*
*    normal    :       在持续的事件发生中，每个event 都会触发方法
*    throttling: 节流  在持续的事件发生中，自定义了 每个一段时间触发 一次方法   使用时间戳或者 计时器
*    debounce  : 防抖  在持续的事件发生中，在开始或者结束 只执行一次，直到本次的持续事件结束。
*
*
*
*
* **/

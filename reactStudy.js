/*
* 生命周期
*
* component Did Mount()
* component Did Update()
* component Will Unmount()
*  useEffect
* **/



/*
* redux学习  思考和Vuex的 相似和不同    思考为什么使用 状态管理器
*
*
* ui->event -> dispatch -> action   reducer(action,state) => newState ->ui
*
*
*  when we need use store  and  when we should use state in local ?
*  合适需要使用 状态管理  并且 我们应该如何在本地项目使用 状态管理
*  There have some common rules of thumb for determining
*  这有一些标准规则供你决定
*
* 1.  Do other parts of the application care about this data?
*     应用的其他块是否关心这些数据
  2.  Do you need to be able to create further derived data based on this original data?
  *   你是否需要能够创建 进一步的数据  基于原始数据
  3.  Is the same data being used to drive multiple components?
  *   相同的数据被用运行在多个组件中
  4.  Is there value to you in being able to restore this state to a given point in time (ie, time travel debugging)?
  *
  5.  Do you want to cache the data (ie, use what's in state if it's already there instead of re-requesting it)?
  *   你是否需要缓存住这些数据
  6.  Do you want to keep this data consistent while hot-reloading UI components (which may lose their internal state when swapped)?
  *   你是否想保持这些数据一致在 高频率刷新的 UI 组件中。
  *
  *
  *
*  redux 使用 Provider 来包裹 整个项目  相当于提供了一个 最大的 状态提升  在这个组件中定义了一堆state 来让所有的component 使用
*   <Provider store ={store}></Provider>
*  通过props的形式 传入之前定义好的全局变量
*   高阶组件一样
*
*
* redux-toolkit
* createSlice
*
*
* useDispatch
* useSelector
*
*
*
*
* thunk middleware
* have some use rules
*
* add 'start'  async request   add 'success'  complete this action
*
* add selectors when you find this code need be used to some pieces
*
*
*  when I used the dispatch  what happened ,
*  and  its parameter  is a object or a  thunk function .
*   middleware  always be used before the dispatch and it used typeof action === 'function'
*
*
*
* memoize selector
*
* optimize performance
*
*  I have learn the react,redux and react-router, now I need use these set up my own project.
*
*
*
*
*
* **/

/*                          sharp tools make good work
*                              glossary of term
*  SPA  is   single-page application
*  compiler
*  Bundler
*  package   control tool
*  CDN  content delivery network
*  HOC higher order component
*  SSR server side render
*  DevOps  development  Operation :  process method and system
*
*  SnapShot(快照技术，ps is really technique):this is a specially version in you store(git,svn);
*
*  camelCased  驼峰
*
*   Gradual Adoption Strategy
*
*
*
* **/


//  Advanced guide  高阶指引
/*
*   React中一共提供了几种优化的方式
*     1.React.lazy
*     2.React.memo
*     3.React.pureComponent   跳过shouldComponentUpdate阶段
*
*
*
*
*  一、Code-Splitting  代码分割
*      代码分割是由 webpack等打包工具中支持的一项技术，能够创建多个包并在运行时 动态加载。
*   1. React.lazy(()=>import('./address'));
*   2. use React-router with  React.lazy  can make the  lazy-load
*      基于路由和 React.lazy 的懒加载
*   3. is a way for optimize performance
*      是一种优化性能的方式
*
*   二、Context is  mean : “上下文”
*   step-by-step
*   1. use  const MyContext = React.createContext('default');
*      使用React.createContext来创建 一个对象
*   2. use JSX      <MyContext.Provider value={'come value if not have value  while use default'}  />
*       在JSX中 后面添加 Provider 和 value 来进行 想子集传输数据
*   3. in its child  components inside
*      在子集组件中
*      1. in class component   static contextType = MyContext;  can receive current value
*         在class组件中中  通过   static contextType = MyContext 的
*      2. in  function component  had added the useContext  Hook this API
*         在函数组件中 通过使用useContext的方法来创建
*         we can    const aa = useContext(MyContext);  receive current value;
*     3.<MyContext.Customer /> also can used
*
*   三、Error Boundaries
*       错误边界
*     Only class component can be error boundaries
*       只有在class组件中才能用 错误边界
*     if an class component defines  either(or both) the lifecycle methods
*     static getDerivedStateFromError() or  componentDidCatch()  is considered  Error Boundary
*      *     如果一个class组件定义可 static getDerivedStateFromError() 或者componentDidCatch() 任意一个(或两个)时，
*            那么他就是一个错误边界
*
*       错误边界是一种React组件,这种组件可以捕获并打印发生在其子组件树任何位置的javascript错误，并且，，它会渲染出备用UI
*
*
*   Component Stack Trace
*
*   四、forward Refs
*      Ref 转发是一项将 ref 自动地通过组件传递到其一子组件的技巧
*
*     React.createRef API  call this to create ref, in component above  we need to  add 'ref' prop
*     component must be created  by React.forwardRef( (props,ref)=>{} );
*     For example:
*     const FancyBtn = React.forward((props,ref) =>{
*       <button ref={ref} className='FancyBtn' >
*       {props.child}
*        <button>
*     })
*     const ref = React.createRef();
*     <FancyBtn ref={ref}>click me!</FancyBtn>
*
*     通过 React.forwardRef((props,ref)=>{}); 创建组件  设置ref的值
*
*     accept an function has two parameters. only used React.forwardRef wo can receive ref this is like 'key'prop
*     is have specially handle;
*
*     use ref  we can accessing their DOM node to manage focus, selected, or animation;
*     使用ref 我们可以访问他们的DOM节点去管理 焦点 选择 动画
*
*     useRef is a Hook   const inputEl = useHook(initialValue);
*     <input ref={inputEl} />
*     used  inputEl.current can accessing DOM
*
*   五、 Fragments
*    In my knowledge  is contain  multiple elements and don't have any side-effect
*    Because React allow the component only return one node
*   <React.Fragment></React.Fragment>  can use  'key'prop
*     正常来讲 一个组件只能返回一个元素
*
*     但是我们可以使用<React.Fragment></React.Fragment>在一个组件返回多个元素
*     其实还是返回了一个 就是这个<React.Fragment></React.Fragment>组件  然后在构建的时候 编译为空
*
*    the short syntax
*   <></>  don't accept any attribute or key
*
*   六、  HOC  higher-order component  高阶组件  也就是高阶执行顺序的组件
*       是React中用于复用组件逻辑的一种高级技巧
*
*     is not syntax, is a common design pattern
*     这不是语法，而是一种常见的设计模式
*     This is a function that can accept component as parameter, return new component
*     这是一种把组件作为参数访问， 然后新组件的
*     Usually it is used on encapsulate the common logic;
*     通常用来 封装相同逻辑
*
*  七、Integrating with Other libraries
*      第三方插件库
*      React可以被用于任何web组件中。它可以被嵌入到其他应用，且需要注意，其他应用也可以被嵌入到 React。
*   Because ReactDOM.render() is flexibility, it can be embedded in any application
*
*   八、 JSX in depth
*     JSX is the react syntactic sugar  all JSX will be converted by React.createElement()
*      JSX是react的语法糖 所有的JSX 会通过React.createElement()方法转换，所以在文件的头部需要引入React。
*      在17版本后 JSX自动添加到了loader中，所以不用在引入
*
*     React.createElement() pass  three parameter  below code
*     React.createElement(
*      'component',   also is a tag
*       {attribute},
*       child
*     )
*
*     inside React diff, React will used  'key' and  'component' is equal to notify current component whether to update
*     在React diff算法中，React会使用key 和 component 是否相等 去通知 当前 组件 是否更新
*
*
*     User-Defined component the first letter must capitalized ,
*     the lowercase letter will be compile to HTML tag
*
*     spread attribute: use ... can pass object to child props
*
*   九、Optimize Performance  性能优化
*
*    use the Production build  on the online
*     线上 使用 生产模式
*    use the development in normal
*     日常开发使用开发模式
*
*     use the chrome devtool performance and  profile to  watch the component mount
*     使用chrome 开发工具的 performance 和 profile 去观察 组件的安装
*
*     Virtualize longer lists
*       虚拟长列表
*     we can using a technique known as "windowing" means "虚拟滚动"
*     我们使用一种 虚拟滚动的技术
*
*     avoid reconciliation
*     避免调停
*
*     shouldComponentUpdate  跳过无用的 shouldComponentUpdate
*
*     immutability
*       避免该问题最简单的方式是避免更改你正用于 props 或 state 的值
*       不可变数据的力量
*
*
*   十、 Portals
*    ReactDOM.createPortal(child,container)
*     first argument 'child'  is  a React element
*     container  is an actual DOM node
*
*   this provide one method, can take you render child  outside its parent component
*   提供了一种将子节点 渲染到存在于父组件之外的DOM节点的 优秀的方案。
*
*
*   十一、Profiler
*    React provide a  Component, can be measured the its child cost of rendering;
*    Its purpose is to help you identify which part is slow;
*    React提供了一个组件，能够测量他的子元素 渲染的华府额
*    它的目的是帮助你识别 那个模块 渲染满
*
*    <Profiler id='Id', onRender={callback}> require two props,
*     Id is string  to tell you who is who;
*     onRender is called on the  a component within the tree  'commit' an update;
*
*   十二、React without ES6
*    boilerplate  code like : in  class component  constructor  we can  this.handle = this.handle.bind(this)
*
*      React中的时间的绑定方式
*       1.在 constructor 中绑定方法。  this.handleClick = this.handleClick.bind(this);
*       2.使用箭头函数，比如：onClick = {(e) => this.handleClick(e)}。
*
*    Main  introduce the createReactClass require('create-react-class');
*    inside  we can you the  mixin;
*
*    Mixin  is  important to know  React and Vue difference
*
*
*   十三、 React without JSX
*   this part like the  八、JSX in depth
*    describe  we can use  createElement this method
*    It introduce a shorthand
*    const e = React.createElement;
*    ReactDOM.render(
*    e('div'，null,'Hello World'),
*     document.getElementById('root');
*    )
*
*
*   十四、Reconciliation   英文有  中文没有
*    Motivation
*
*    React if used  ‘the state of the art algorithm’ is find the minimum number of operation to transform between new and old
*    use this algorithm  will be  O(n^3)  n is the React element in whole app;
*
*     如果React 使用了 最先进的算法 他发现转换 新 旧两个树的最小公倍数将是  n的3次方， 其中n是整个APP的 React元素
*
*
*    So  React use the Diffing algorithm
*     所以React使用了diff算法, 只进行同层的数进行比较  从而大大提高了效率
*
*    I think  it used  type and key to compare whether is equal
*
*     使用当前组件类型 和 key 值 去比较是否全等
*
*
*    十五、Refs and the DOM
*     this article is different to  forward ref
*     这片文章不同于 转发Ref 那篇文章
*
*     this part main to tell you, ref is usually used in class component
*     这篇文章主要告诉你，refs主要被用在 class组件
*
*     In the constructor, you can use the React.createRef()，and use its instance by React.createRef created;
*     在 constructor(构造函数)，你可以使用React.CreateRef()来创建实例。
*     for example:  const ref = React.createRef();   ref.current to access that node;
*
*     use Ref in Function component
*     wo can't use the ref attribute on the function components,because they don't have instance
*     you want to use the ref attribute inside function components, we can use useRef this Hook function
*     we should guarantee  ref be used on DOM element or class component
*     我们不能使用ref 属性在function组件上，因为他们没有实例。
*     你如果想用ref属性在function组件中，我们可以使用 useRef 这个HOOK 方法
*     我们能办证 ref 被使用在DOM元素 或者 class组件中
*
*
*    十六、 Render Props
*        是一种在React组件中 使用一个值为函数的prop 共享代码的简单技术
*
*      Cross-Cutting concern mean ‘关注横切点’
*      render attribute  is return a function
*       render 属性 返回一个 函数
*      In official, a render prop is a function prop that a component uses to know what to render;
*       在官方，一个render属性是一个方法 ，一个组件知道如何去渲染一个组件的方法
*
*      In actually, the render Prop is like add a function for prop, in nest component  we can access this obj attribute
*
*      PrueComponent
*
*     十七、Static Type Checking 静态类型检测
*       1.Flow
*           If you use the javascript, you can use the Flow library, and the if you use 'create-react-app' command to
*         building your project.  you don't care about how to cleanup it in production bundle;
*         it's special  syntax is  Flow annotation
*         we need add "// @flow" on top the file
*
*       TypeScript
*       we can used this Type language, is have itself's static type checking;
*       It is a  Typed superset of JavaScript
*
*
*     十八、Strict Mode  严格模式           dynamic is a word
*
*       The Strict Mode is only on the development.
*         严格模式 只运行在开发环境
*
*        we can use it  like  <React.StrictMode>  <React.StrictMode>
*        is will check its descendants       它会检测它的 自己
*        StrictMode currently helping with 5 part   严格模式现在的帮助 主要5个方面
*
*        1.identifying unsafe lifecycle               1.识别不安全的生命周期
*        2.Warning about legacy String ref API usage  2.关于使用过时 字符串 ref API 的警告
*        3.Waring about deprecate findDOMNode usage   3.关于使用 废弃的 findDOMNode 方法
*        4.detecting unexpected side effect           4.检测 意外的 副作用
*        5. detecting legacy context ApI              5.检测过时的 context API
*
*     十九、 TypeChecking With PropTypes  使用PropTypes类型检测
*       Since React 15.5, PropType is not built-in;   15.5版本后  PropType 不内置
*       You can use it by the  import PropType from  'prop-types'   使用引入 prop-type的方式 引入
*       is just a object ,inside you can set some   default value;   是一个对象 ，你可以设置一些 默认 值
*
*       Have some different between  Chinese Docs and English Docs
*         中文和英文有一些不同
*       In English have the additional content
*        英文版有一些 额外内容
*       It introduce the PropType be used in function component
*       它介绍了 PropType 在function组件中 使用
*       For example:
*       import PropTypes from 'prop-types'
*
*       function  HelloWorldComponent({name}){
*         return (
*             <div>Hello,{name}div
*         )
*       }
*
*       HelloWorldComponent.propTypes = {
*          name:PropTypes.string   // check the name is whether String type
*       }
*       HelloWorldComponent.defaultProps={
*          name:'anything'
*       }
*
*       In above code,I think this pattern really same the object.propType;
*       上面的代码  我认为这种模式 和 object.propType 想用
*
*
*      二十、Uncontrolled Components and  Controlled Components
*           非受控组件和受控组件
*
*      In froms, the from element's state be controlled by React, is a Controlled Components
*
*       在表单中， 表单元素的状态被React控制 这就是受控组件
*
*      Either, the from element's state be controlled by itself. it means Uncontrolled Components
*       而，from元素状态被它自己控制。这就是非受控组件
*
*      Uncontrolled Components: you can use the  'useRef' to get DOM node; then use the this.ref.current.prop to do something
*                               你能使用 useRef 去获取 DOM节点，然后 通过使用  this.ref.current.prop 干点啥
*
*      Controlled Components: you can use the 'useState' to create state, and set the element(dom or react) to use it.
*                             你能使用功能 useState去创建状态，并且设置 元素 去使用使用它
*
*       <input type="file" />  is always a Uncontrolled Components. use the ref to access it.
*       文件传输 总是一个非受控组件 。 使用 ref 去访问它
*
*    二十一、 Web Components
*
*     web provide a method to create your custom element.
*     this can explain  we can  add a value prop above <textarea value={state}>  这里当时思想错了 还是通过react编译器来实现的
*     and a lots of third-party UI  use this.
*     web 提供了一个方法去创建 你自定义的 元素
*
*
*
*
*
*
* **/


/*
* *    API  REFERENCE
*
*   一、React and  React.Component
*     1.React.component
*     2.React.PurComponent    this can implement shouldComponentUpdate() with a shallow prop and state comparison.
*                                 实现了shouldComponetUpdate（）      浅层对比prop和state的方式 实现该函数
*       shouldComponentUpdate() skip the prop update for whole component subtree
*                             能跳过 属性更新 整个阶段
*
*     3.React.memo   memory    提供了一个记忆函数
*      this is a HOC;
*      give the same prop, and return same result.  React will skip rendering phase, and return the last result.
*       inside React.memo  use the useState or useContext，when context have change  it still rerender。
*       给于相同的参数，返回相同的结果。React 会跳过 渲染阶段，并且返回最近的结果。
*       如果函数组件被React.memo包裹。且实现拥有 useState 或者useContext的HOOK,当context改变时，它仍会重新渲染。

*      React.memo(function MyComponent(){},comparison)
*
*      first argument is component,second argument is a comparison method.
*         默认情况下 只会对复杂对象做浅层对比， 第一个参数是组件，第二个参数是 自定义的比较函数
*
*
*
*     4.createElement
*
*
*     5.cloneElement
*
*     6.createFactory (legacy)
*
*     7. React.isValidElement(obj)
*       Verifies the object is a  React element. return 'true' or 'false'
*        验证一个对象是不是React元素  返回 true或者false
*
*
*     7.React.Children
*         React.Children.map
*         React.Children.forEach
*         React.Children.count
*         React.Children.only
*         React.Children.toArray
*
*      8. React.Fragment
*
*      9.React.createRef
*     10.React.forwardRef
*
*     11.React.lazy
*      this is  a way to loaded dynamically
*        React.lazy允许你定义一个动态加载组件
*
*     const SomeComponent = React.lazy(()=> import('./SomeComponent'))
*
*
*     二、  React.Component
*      this article describe the LifeCycle
*       这篇文章讲述了 生命周期
*
*       1.Mounting:  when an instance of a component is being created and inserted into the DOM
*                    当一个组件实例被创建和插入到DOM中
*         constructor()
*         static getDerivedStateFromProps()
*         render()
*         componentDidMount()
*
*       2.Updating:  when a component is being re-rendered
*          static getDerivedStateFromProps
*          shouldComponentUpdate     instance is created by React.PureComponent
*          render()
*          getSnapshotBeforeUpdate
*          componentDidUpdate
*
*        3.Unmounting:  when a component is being removed DOM
*           componentWillUnmout
*
*        4.Error Handling:  when there is an error during rendering, in lifecycle method,
*                           or in the constructor of any child component
*
*          static getDerivedStateFromError
*          componentDidCatch()
*
*         5. Other APIs
*             setState()    forceUpdate()
*
*            Class Properties
*              defaultProps
*              displayName
*
*            Instance Properties
*               props
*               state
*
*     三、LifeCycle
*           => mean 'cause';  -> mean 'next phase' ; update UI mean '(react update dom and ref)';
*         1.common LifeCycle
*          mounting:  constructor -> render -> update UI ->  componentDidMount
*          update:  (new state,new props)=>render -> update UI -> componentDidUpdate
*          unmounted:  componentWillUnmount
*
*         2.less common LifeCycle
*           mounting:  constructor -> getDerivedStateFormProps -> render -> update UI ->componentDidMount
*           update:  (news state,new prop)=>getDerivedStateFormProps->shouldComponentUpdate->
*                     render -> getSnapshotBeforeUpdate -> update UI -> componentDidUpdate
*          unmounted: componentWillUnmount
*
*          3. in Function Component useEffect instead
*             useEffect  contain componentDidMount,componentDidUpdate and componentWillUnmount
*             subscribe be created in useEffect and  return a function to  cancel subscribe
*
*     四、ReactDOM
*          render()
*          hydrate()
*          unmountComponentAtNode()
*          findDOMNode()    to attach a ref to the DOM node and avoid using findDOMNode at all.
*          createPortal()     outside its parents, and  render current element  in any container
*
*     五、ReactDOMServer
*
*
*
*
*     六、DOM element
*
*
*     七、synthetic event
*
*         SyntheticEvent 实例将被传递给你的事件处理函数，它是浏览器的原生事件的跨浏览器包装器。
*
*         yesterday I want to see article,  listen a new message.
*         in the React 16,  if you want to you the event.target, you need call event.persist() hold current target in  async.
*         but in React 17,  had removed the event pooling, and add event in the  root node;
*         昨天我想看这文章，收到了一个消息
*         在React16中，，如果你想要获取 事件的target， 你需要 调用 even.persist 保持住当前目标在异步
*         但是在React17中，移除事件池，并且把 事件添加在了 根节点
*
*
*      八、Test Utilities
*       in the  'react-dom/test-utils'  have the ReactTestUtils, it will help you easy to complete test working with
*        third-party library.  （配合第三方插件进行 单元测试)
*
*        the  Jest library  is used in  FaceBook;
*        the Simulate library is used, and React understand it;
*
*       九、Test Renderer
*
*         in 'react-test-renderer' package, it can easy to grab a snapshot.
*
*       十、javaScript environment
*           React 16  depend on  the  ES6  Map and Set, if you want to used in older browser,
*        you need use a global polyfill  such as core-js，babel-polyfill.
*
*
*      Hook
*
*       一、Introducing Hooks  Hooks简介
*         Q:why we use Hook and what is motivation and Hook can do what
*           为什么我们使用HOOK，动机是什么， Hook能做什么
*          1.class component want to reuse stateful logic, need to use pattern(like 'render prop','HOC')
*            Hooks allow you to reuse stateful logic without changing your component hierarchy.
*            (PS: use the 'render prop' or HOC can re-structure)  会修改结构
*
*             class组件想要重复使用 状态逻辑，需要使用 HOC 和 render prop 这种模式
*              HOOK 允许你 反复使用 状态逻辑 在 不改变 组件层级的情况下
*
*          2. complex components become hard to understand
*             HooK let you split one component into smaller function based on what piece of related
*             复杂组件变的难以理解
*               Hook 将组件中相互关联的部分拆 分成更小的函数
*
*          3. learning React class component is hard, in class component you need complete understand 'this'
*           Hooks let you use more of React feature without class
*             学习React中class组件太难，在class组件中你需要完全理解 this 这个东西
*             HOOK让你使用更多 React 特性 在不使用class的状态下
*
*          4.Gradual adoption strategy
*
*        二、Hooks at a Glance
*             1.useState
*
*             2.useEffect
*                the useEffect  equal  the componentDidMount,componentDidUpdate,componentWillUnmount
*                By default, React runs the effect after every render (include first render).
*                 useEffect 相当于  componentDidMount,componentDidUpdate，componentWillUnmount 三个周期
*                 通常 React 执行 effect 在每个 渲染之后
*
*                in useEffect you can return a function to 'clean up'
*                 可以在useEffect中添加 返回函数 来取消订阅
*
*
*             3.Rules of Hooks
*                1.call Hooks at the top level. Don't call hooks inside loops,conditions,or nest function.
*                  调用Hook在最上层， 不能在循环 条件判断 或者 子函数中调用
*
*                2.Only call Hooks from React function component. don't in javascript function.
*                      只能在React的 function组件中调用。不能在javascript 方法中。
*                   the first upperCase letter named component is React component.
*                   the prefix  is 'use',eg: useDoSomething   this is  custom Hook. (can use Hook)
*
*                   !!!!!!!!!!!    I think this have a specially compile, to differ the function and custom Hook
*
*
*             4.Building your own Hooks
*
*         三、Using the State Hook
*          introduce: Hooks are function that let you 'Hook into' React feature from function component
*
*            e.g.: const [state, setState] = useState(0);
*
*            Use the Hook like useState in function component is different to use this.setState in class component,
*         useState is  replace, convert, transform
*         this.setState is Merge
*
*         四、Using the Effect Hook
*
*            useEffect Hook as componentDidMount,componentDidUpdate adn componentWillUnmount combined.
*
*            There are two common kinds fo side effects:
*               1. need to cleanup
*                 (e.g.:like progress plugin:NProgress, we need call NProgress.done(),and return NProgress.start() to destructure ).
*
*               2. Effect without cleanup
*                 such as: Network request, manual DOM mutation, logging.
*
*             Hook let us split the code based on what it is doing rather than a lifecycle method name;
*
*             By default, useEffect clean up the previous effect before applying the next effect.
*             This behavior ensure you can prevent bug that in class Component due to missing update logic.
*              running useEffect until after the browser has painted,so doing extra work is less of a problem
*
*
*            Remap:
*                 1. automatically clean up previous effect then run current effect
*                 2. only code one,it include  'componentDidMount','componentDidUpdate','componentWillUnmount'
*                 3. related code closer together, looking more clear.
*                 4. use multiple useEffect to separate effects by their purpose.
*
*              五、Rule of Hooks
*                1.call Hooks at the top level. Don't call hooks inside loops,conditions,or nest function.
*                  Because the React rely on the order in which Hooks are called.
*                2. use Hook in React function components or in custom Hook.
*
*              六、Building Your Own Hooks
*                  In class components, we use the 'render prop' and 'HOC' pattern to solve, stateful logic to
*               common used.
*
*                  We can extract the common stateful logic with a custom Hook.
*                  A custom Hook is a javascript function whose name starts with 'use' and that may call other Hook.
*
*                 we can use the Redux to solve the complex logic,
*                 and the React provide a useReducer Hook to solve this mistake.
*
*              七、Hooks Api reference
*                  Basic Hooks:
*                       useState
*                       const [state,setState] = useState(0);
*                       setState(prevState => prevState+1)  can incept a function  the argument is  previous state
*
*                       pass any type value, can receive a function and to call.
*
*                       useEffect
*                       useContext
*
*                  Additional Hook:
*                       useReducer    like  Redux   reducer
*                       useCallBack
*                       useMemo       memory HOC
*                       useRef  can create a instance be used on DOM node, and by  instance .current get node
*                       useImperativeHandle
*                       useLayoutEffect  sync, include componentDidMount and componentDidUpdate
*                       useDebugValue
*
*                 ps: there we can know in React to compare the new and old state by  "Object.is"  comparison algorithm
*
*               八、Hook FAQ
*                  You can see it every time, this is only note something that I think important
*
*
*                  Performance Optimizations
*
*                  useEffect, we can pass the second argument with a array that contain it needs prop.
*                  if(the, array every child don't changed, will skip this effect);
*
*
*                  shouldComponentUpdate
*
*                  const Button = React.memo((prop)=>{
*                     // your component 
*                  })
*
*
*        In event handle the setState is async, the state update end of the browser event;
*        React update this.state until all components call setState() in
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*

*
*
*
*
* **/


/*   Optimized Performance
*
*     mainly
*     1. language itself  have some method to improve
*     2. webpack  bundler(打包工具)   tree-shaking
*     3. HTTP 协议    in HTTP2.0  his  header is binary  less code
*     4.cdn 服务器
*
*
* **/


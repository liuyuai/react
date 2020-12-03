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
* ui->event -> dispatch -> action   reducer(action,state) => newState ->ui
*
*  when we need use store  and  when we should use state in local ?
*  There have some common rules of thumb for determining
*
* 1.  Do other parts of the application care about this data?
  2.  Do you need to be able to create further derived data based on this original data?
  3.  Is the same data being used to drive multiple components?
  4.  Is there value to you in being able to restore this state to a given point in time (ie, time travel debugging)?
  5.  Do you want to cache the data (ie, use what's in state if it's already there instead of re-requesting it)?
  6.  Do you want to keep this data consistent while hot-reloading UI components (which may lose their internal state when swapped)?
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
*
*
* **/


//  Advanced guide
/*
*   一、Code-Splitting
*   1. React.lazy(()=>import('./address'));
*   2. use React-router with  React.lazy  can make the  lazy-load
*   3. is a way for optimize performance
*
*   二、Context is  mean : “上下文”
*   step-by-step
*   1. use  const MyContext = React.createContext('default');
*   2. use JSX      <MyContext.Provider value={'come value if not have value  while use default'}  />
*   3. in its child  components inside
*      1. in class component   static contextType = MyContext;  can receive current value
*      2. in  function component  had added the useContext  Hook this API
*         we can    const aa = useContext(MyContext);  receive current value;
*     3.<MyContext.Customer /> also can used
*
*   三、Error Boundaries
*     Only class component can be error boundaries
*
*   Component Stack Trace
*
*   四、forward Ref
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
*     accept an function has two parameters. only used React.forwardRef wo can receive ref this is like 'key'prop
*     is have specially handle;
*
*     use ref  we can accessing their DOM node to manage focus, selected, or animation;
*
*     useRef is a Hook   const inputEl = useHook(initialValue);
*     <input ref={inputEl} />
*     used  inputEl.current can accessing DOM
*
*   五、 Fragments
*    In my knowledge  is contain  multiple elements and don't have any side-effect
*    Because React allow the component only return one node
*   <React.Fragment></React.Fragment>  can use  'key'prop
*    the short syntax
*   <></>  don't accept any attribute or key
*
*   六、  HOC  higher-order component
*     is not syntax, is a common design pattern
*     This is a function that can accept component as parameter, return new component
*     Usually it is used on encapsulate the common logic;
*
*  七、Integrating with Other libraries
*   Because ReactDOM.render() is flexibility, it can be embedded in any application
*
*   八、 JSX in depth
*     JSX is the react syntactic sugar  all JSX will be converted by React.createElement()
*     React.createElement() pass  three parameter  below code
*     React.createElement(
*      'component',   also is a tag
*       {attribute},
*       child
*     )
*     inside React diff, React will used  'key' and  'component' is equal to notify current component whether to update
*
*     User-Defined component the first letter must capitalized ,
*     the lowercase letter will be compile to HTML tag
*
*     spread attribute: use ... can pass object to child props
*
*   九、Optimize Performance
*    use the Production build  on the online
*    use the development in normal
*
*     use the chrome devtool performance and  profile to  watch the component mount
*
*     Virtualize longer lists
*
*     we can using a technique known as "windowing" means "虚拟滚动"
*     avoid reconciliation
*
*   十、 Portals
*    ReactDOM.createPortal(child,container)
*     first argument 'child'  is  a React element
*     container  is an actual DOM node
*
*   this provide one method, can take you render child  outside its parent component
*
*   十一、Profiler
*    React provide a  Component, can be measured the its child cost of rendering;
*    Its purpose is to help you identify which part is slow;
*
*    <Profiler id='Id', onRender={callback}> require two props,
*     Id is string  to tell you who is who;
*     onRender is called on the  a component within the tree  'commit' an update;
*
*   十二、React without ES6
*    boilerplate  code like : in  class component  constructor  we can  this.handle = this.handle.bind(this)
*
*   Main  introduce the createReactClass require('create-react-class');
*   inside  we can you the  mixin;
*    Mixin  is  important to know  React and Vue difference
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
*   十四、Reconciliation
*    Motivation
*
*    React if used  ‘the state of the art algorithm’ is find the minimum number of operation to transform between new and old
*    use this algorithm  will be  O(n^3)  n is the React element in whole app;
*
*    So  React use the Diffing algorithm
*    I think  it used  type and key to compare whether is equal
*
*
*    十五、Refs and the DOM
*     this article is different to  forward ref
*
*     this part main to tell you, ref is usually used in class component
*     In the constructor, you can use the React.createRef()，and use its instance by React.createRef created;
*     for example:  const ref = React.createRef();   ref.current to access that node;
*
*     use Ref in Function component
*     wo can't use the ref attribute on the function components,because they don't have instance
*     you can use the ref attribute inside function components, we can use useRef this Hook function
*     we should guarantee  ref be used on DOM element or class component
*
*    十六、 Render Props
*      Cross-Cutting concern mean ‘关注横切点’
*      render attribute  is return a function
*      In official, a render prop is a function prop that a component uses to know what to render;
*      In actually, the render Prop is like add a function for prop, in nest component  we can access this obj attribute
*
*      PrueComponent
*
*     十七、Static Type Checking
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
*     十八、Strict Mode            dynamic is a word
*
*       The Strict Mode is only on the development.
*
*        we can use it  like  <React.StrictMode>  <React.StrictMode>
*        is will check its descendants
*        StrictMode currently helping with 5 part
*
*        1.identifying unsafe lifecycle
*        2.Warning about legacy String ref API usage
*        3.Waring about deprecate findDOMNode usage
*        4.detecting unexpected side effect
*        5. detecting legacy context ApI
*
*     十九、 TypeChecking With PropTypes
*       Since React 15.5, PropType is not built-in;
*       You can use it by the  import PropType from  'prop-types'
*       is just a object ,inside you can set some   default value;
*
*       Have some different between  Chinese Docs and English Docs
*       In English have the additional content
*       It introduce the PropType be used in function component
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
*       In above code,I think this pattern really same the object.propType;
*
*
*      二十、Uncontrolled Components and  Controlled Components
*
*      In froms, the from element's state be controlled by React, is a Controlled Components
*      Either, the from element's state be controlled by itself. it means Uncontrolled Components
*
*      Uncontrolled Components: you can use the  'useRef' to get DOM node; then use the this.ref.current.prop to do something
*
*      Controlled Components: you can use the 'useState' to create state, and set the element(dom or react) to use it.
*
*       <input type="file" />  is always a Uncontrolled Components. use the ref to access it.
*
*    二十一、 Web Components
*     web provide a method to create your custom element.
*     this can explain  we can  add a value prop above <textarea value={state}>
      and a lots of third-party UI  use this.
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
*       shouldComponentUpdate() skip the prop update for whole component subtree
*
*     3.React.memo   memory
*      this is a HOC;
*      give the same prop, and return same result.  React will skip rendering phase, and return the last result.
*       inside React.memo  use the useState or useContext  it still rerender。
*
*      React.memo(function MyComponent(){},comparison)
*      first argument is component,second argument is a comparison method.
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
*
*     const SomeComponent = React.lazy(()=> import('./SomeComponent'))
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
*   synthetic event
*
*   yesterday I want to see article,  listen a new message.
*   in the React 16,  if you want to you the event.target, you need call e.persist() hold current target in  async.
*   bu in React 17,  had removed the event pooling, and add event in the  root node;
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


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
*  SnapShot(快照技术，ps is really technique):this is a specially version in you store(git,svn);
*
*  camelCased  驼峰
*
*   Gradual Adoption Strategy
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
*     if an class component defines  either(or both) the lifecycle methods
*     static getDerivedStateFromError() or  componentDidCatch()  is considered  Error Boundary
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
*     二、  React.Component
*      this article describe the LifeCycle
*
*       1.Mounting:  when an instance of a component is being created and inserted into the DOM
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
*         yesterday I want to see article,  listen a new message.
*         in the React 16,  if you want to you the event.target, you need call e.persist() hold current target in  async.
*         bu in React 17,  had removed the event pooling, and add event in the  root node;
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
*        you need use a global polyfill  such as core-js.
*
*
*      Hook
*
*       一、Introducing Hooks
*         Q:why we use Hook and what is motivation and Hook can do what
*          1.class component want to reuse stateful logic, need to use pattern(like 'render prop','HOC')
*            Hooks allow you to reuse stateful logic without changing your component hierarchy.
*            (PS: use the 'render prop' or HOC can re-structure)
*          2. complex components become hard to understand
*             HooK let you split one component into smaller function based on what piece of related
*
*          3. learning React class component is hard, in class component you need complete understand 'this'
*           Hooks let you use more of React feature without class
*
*          4.Gradual adoption strategy
*
*        二、Hooks at a Glance
*             1.useState
*
*             2.useEffect
*                the useEffect  equal  the componentDidMount,componentDidUpdate,componentWillUnmount
*                By default, React runs the effect after every render (include first render).
*
*                in useEffect you can return a function to 'clean up'
*
*             3.Rules of Hooks
*                1.call Hooks at the top level. Don't call hooks inside loops,conditions,or nest function.
*                2.Only call Hooks from React function component. don't in javascript function.
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


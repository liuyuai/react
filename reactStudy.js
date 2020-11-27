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
*    API  REFERENCE
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

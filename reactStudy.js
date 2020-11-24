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
* **/



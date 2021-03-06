import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import {PostsList} from "./features/posts/PostsList";
import { AddPostForm } from "./features/posts/AddPostForm";
import {SinglePostPage} from "./features/posts/SinglePostPage";
import {EditPostForm} from "./features/posts/EditPostForm";
import {UserList} from "./features/user/UsersList";
import {UserPage} from "./features/user/UserPage";
import {NotificationsList} from "./features/notifications/NotificationsList";

import { Navbar } from './app/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <AddPostForm />
                <PostsList />
              </>
            )}
          />
          <Route exact path="/notifications" component={NotificationsList}></Route>
          <Route exact path="/posts/:postId" component={SinglePostPage} ></Route>
          <Route exact path="/editPost/:postId" component={EditPostForm} ></Route>
          <Route exact path="/users" component={UserList}></Route>
          <Route exact path="/users/:userId" component={UserPage}></Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App

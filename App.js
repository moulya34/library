import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/login';
import AddBook from './components/addbook';
import BookList from './components/booklist';
import Announcement from './components/announcement';
import Feedback from './components/feedback';
import UpdateProfile from './components/updateprofile';

function App() {
  return (
    <Router>
      <div>
        <h1>Library Management System</h1>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/add-book" component={AddBook} />
          <Route path="/book-list" component={BookList} />
          <Route path="/announcements" component={Announcement} />
          <Route path="/feedback" component={Feedback} />
          <Route path="/update-profile" component={UpdateProfile} />
          <Route path="/" component={BookList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

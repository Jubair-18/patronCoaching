import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from 'axios';

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
import StudentList from "./components/List/StudentList";
import Graph from "./components/Graph/Graph";
import Admin from "./components/Admin/Admin";
import TeacherList from "./components/List/Teacher";

function App() {
  const [ isAdmin, setIsAdmin ] = useState(false)
  useEffect(() => {
    axios.get('/user/admin').then((res) => setIsAdmin(res.data.isAdmin)).catch(err => console.log(err))
  }, [])
  console.log(isAdmin)
  return (
    <Router>
      <Navbar isAdmin={isAdmin}/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={Signin} />
        <Route path="/user/signup" component={Signup} />
        <Route path="/graph" component={Graph} />
        {isAdmin && (<>
        <Route path="/admin" component={Admin}/>
        <Route path="/studentList" component={StudentList} />
        </>
        )}

        <Route path="/teacherList" component={TeacherList} />
      </Switch>
    </Router>
  );
}
export default App;

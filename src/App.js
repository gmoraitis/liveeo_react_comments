import { BrowserRouter, Route, Switch } from "react-router-dom"

import './App.css';
import Navbar from './components/Navbar.js';
import AdminPage from './pages/AdminPage.js'
import CommentsPage from './pages/CommentsPage.js'
import DashboardPage from './pages/DashboardPage.js'
import HomePage from './pages/HomePage.js'
import LoginPage from './pages/LoginPage.js'
import MapPage from './pages/MapPage.js'
import TasksPage from './pages/TasksPage.js'



function App() {
  return (
    <div>
      <header>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" component = {HomePage} />
            <Route path="/admin" component = {AdminPage} />
            <Route path="/dashboard"component = {DashboardPage} />
            <Route path="/tasks" component = {TasksPage} />
            <Route path="/map" component = {MapPage}/>
            <Route path="/comments" component = {CommentsPage} />
            <Route path="/login" component = {LoginPage}/>
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;

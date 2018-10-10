import React from 'react';
import { Layout, Menu } from 'antd';
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from 'react-router-dom';
import MovieDetails from '../../containers/details/MovieDetails';
import Home from '../home/Home';
import './App.css';

const { Header, Content } = Layout;

const App = () => (
  <Router>
    <Layout className="App">
      <Header>
        <div className="logo">
          <NavLink to="/">
            <h1>Star Wars Page</h1>
          </NavLink>
        </div>
        <Menu theme="dark" mode="horizontal" selectable={false}>
          <Menu.Item key="1">
            <NavLink to="/">List of Movies</NavLink>
          </Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Content>
          <Switch>
            <Route path="/:id" component={MovieDetails} />
            <Route path="/" component={Home} />
            <Redirect to="/" />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  </Router>
);

export default App;

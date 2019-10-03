import React from 'react';
import { Switch, Route, Redirect, HashRouter } from 'react-router-dom';
import RegisterVoter from './WF1/RegisterVoter';
import Vote from './WF2/Vote';
import CreateBallot from './WF3/CreateBallot';
import Home from './common/home';

class Routes extends React.Component {
  render() {
    return (
      <main style={{ padding: '1rem' }}>
        <HashRouter>
          <Switch>
            <Route exact path="/" render={Home} />

            <Route exact path="/register" component={RegisterVoter} />
            <Redirect from={`/register*`} to={'/register'} />

            <Route exact path="/vote" component={Vote} />
            <Redirect from={`/vote*`} to={'/vote'} />

            <Route exact path="/create-ballot" component={CreateBallot} />
            <Redirect from={`/create-ballot*`} to={'/create-ballot'} />

            <Route render={Home} />
          </Switch>
        </HashRouter>
      </main>
    );
  }
}

export default Routes;
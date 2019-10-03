import React from 'react';
import { Switch, Route, Redirect, HashRouter } from 'react-router-dom';
import RegisterVoter from './containers/VoterContainer';
import Vote from './components/WF2/Vote';
import Ballot from './components/WF2/Ballot';
import CreateElection from './containers/ElectionContainer';
import Home from './components/common/home';

const currentElection = {
  id: 1,
  questions: [
    {id: 1, text: "Do you own a dog?", yesCount: 0},
    {id: 2, text: "Do you like corgis?", yesCount: 0},
    {id: 3, text: "Would you own a Corgi??", yesCount: 0},
  ]
}

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
            {/* <Redirect from={`/vote*`} to={'/vote'} /> */}

            <Route exact path="/vote/ballot" render={() => <Ballot currentElection={currentElection} />} />
            <Redirect from={`/vote/ballot*`} to={'/vote/ballot'} />

            <Route exact path="/create-election" component={CreateElection} />
            <Redirect from={`/create-election*`} to={'/create-election'} />

            <Route render={Home} />
          </Switch>
        </HashRouter>
      </main>
    );
  }
}

export default Routes;

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Ballot from '../components/WF2/Ballot';

import {

} from '../redux/actions/ballotActions';

import {
  refreshVoter,
} from '../redux/actions/currentVoterActions';

import {

} from '../redux/actions/currentElectionActions';

const mapStateToProps = state => {
  return {
    // ballots: state.ballots,
    currentVoter: state.currentVoter,
    currentElection: state.currentElection,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  refreshVoter,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Ballot);
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Ballot from '../components/WF2/Ballot';

import {
  getCurrentVoter,
} from '../redux/actions/currentVoterActions';

import {
  getCurrentElection,
} from '../redux/actions/currentElectionActions';

import { updateElection } from '../redux/createElectionRedux';

const mapStateToProps = state => {
  return {
    currentVoter: state.currentVoter,
    currentElection: state.currentElection,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  getCurrentElection, getCurrentVoter, updateElection,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Ballot);
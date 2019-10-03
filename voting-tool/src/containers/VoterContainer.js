import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RegisterVoter from '../components/WF1/RegisterVoter';

import {
  refreshVoters,
  createVoter,
  updateVoter,
  deleteVoter,
  deleteMultipleVoters,
  sortAscAction,
} from '../redux/actions/voterRegistration';

const mapStateToProps = state => {
  return {
    voters: state.voters,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  refreshVoters,
  createVoter,
  updateVoter,
  deleteVoter,
  deleteMultipleVoters,
  sortAscAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RegisterVoter);

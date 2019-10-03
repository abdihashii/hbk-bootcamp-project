import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RegisterVoter from '../components/WF1/RegisterVoter';

import {
  createVoter,
  updateVoter,
  deleteVoter,
} from '../redux/actions/voterRegistration';

const mapStateToProps = state => {
  return {
    voters: state.voters,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  createVoter,
  updateVoter,
  deleteVoter,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RegisterVoter);

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Vote from '../components/WF2/Vote';

import {
  goToSecondForm,
} from '../redux/actions/validateFormActions';

const mapStateToProps = state => {
  return {
    isValid: state.isValidVoter, 
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  goToSecondForm
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Vote);
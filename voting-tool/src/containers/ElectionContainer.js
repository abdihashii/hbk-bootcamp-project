import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { CreateElection } from '../components/WF3/CreateElection';

import {
	createAddElection,
	createAddQuestion
} from '../redux/createElectionRedux';

const mapStateToProps = state => {
	return {
		elections: state.elections,
	};
};

const mapDispatchToProps = dispatch => bindActionCreators({
	createAddElection, createAddQuestion
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CreateElection);

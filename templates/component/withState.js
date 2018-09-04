import { connect } from 'react-redux'

import * as actions from './actions'

function mapStateToProps (state, ownProps) {
  return ownProps
}

export default connect(mapStateToProps, actions)

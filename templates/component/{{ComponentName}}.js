import React, { Component } from 'react'
import PropTypes from 'prop-types'
{{#if withCss}}
import style from './style.css'
{{/if}}

class {{ ComponentName }} extends Component {
  render ({foo}) {
    {{! "~" controls whitespace trimming after or in front of a placeholder}}
    return <div{{#if withCss}} className={style.{{~ComponentName~}} }{{/if}}>
      <p>{{ titleCase name }}</p>
    </div>
  }
}

{{ ComponentName }}.proptypes = {
  foo: PropTypes.string
}

export default {{ ComponentName }}

{{#if withState}}
import {{ ComponentName }} from './{{ ComponentName }}'
import withState from './withState'

export default withState({{ ComponentName }})
{{else}}
export { default } from './{{ ComponentName }}'
{{/if}}

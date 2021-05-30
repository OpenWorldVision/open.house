import { $element, $text, Behavior, component, INode, style, stylePseudo } from "@aelea/core"
import { $column, $Field, $row, Field, layoutSheet } from "@aelea/ui-components"
import { pallete, theme } from "@aelea/ui-components-theme"
import { O } from "@aelea/utils"
import { empty, map, merge } from "@most/core"


export interface TextField extends Field {
  label: string
  hint?: string
}


export const $label = $element('label')(
  layoutSheet.column,
  style({ cursor: 'pointer', color: pallete.foreground })
)


const ovverideInputStyle = O(
  style({
    backgroundColor: '#e9eae9',
    color: 'black',
    lineHeight: '40px',
    fontSize: '16px',
    fontWeight: 'bold',
    height: '40px',
    padding: '0 12px',
    borderRadius: '8px'
  }),
  stylePseudo('::placeholder', {
    color: '#8e8e8e',
  })
)


export const $TextField = (config: TextField) => component((
  [change, sampleValue]: Behavior<string, string>
) => {
  const { hint } = config

  const $field = ovverideInputStyle(
    $Field(config)({
      change: sampleValue()
    })
  )

  return [
    $label(layoutSheet.spacingTiny)(
      $text(style({ paddingBottom: '1px' }))(config.label),
      $field,
      hint ? $text(style({ fontSize: '75%', width: '100%' }))(hint) : empty()
    ),

    { change }
  ]
})
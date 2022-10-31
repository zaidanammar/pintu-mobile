import { View as DefaultView } from 'react-native'

import { useThemeColor } from '../../hooks/useThemeColor'

type ThemeProps = {
  lightColor?: string
  darkColor?: string
}

export type ViewProps = ThemeProps & DefaultView['props']

const View = (props: ViewProps) => {
  const { style, lightColor, darkColor, ...otherProps } = props
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background',
  )

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />
}

export default View

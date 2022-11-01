import { View as DefaultView } from 'react-native'

import { useThemeColor } from '../../../hooks/useThemeColor'
import type { ThemeProps } from '../../../types/theme'

export type ViewProps = ThemeProps & DefaultView['props']

const View = ({
  style,
  lightColor,
  darkColor,
  className,
  ...otherProps
}: ViewProps) => {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background',
  )

  return (
    <DefaultView
      style={[{ backgroundColor }, style]}
      {...otherProps}
      className={className}
    />
  )
}

export default View

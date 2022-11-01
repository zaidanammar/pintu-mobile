import { Text as DefaultText } from 'react-native'
import { useThemeColor } from '../../../hooks/useThemeColor'
import type { ThemeProps } from '../../../types/theme'

export type TextProps = ThemeProps & DefaultText['props']

const Text = ({
  style,
  lightColor,
  darkColor,
  className,
  ...otherProps
}: TextProps) => {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text')

  return (
    <DefaultText
      style={[{ color }, style]}
      className={className}
      {...otherProps}
    />
  )
}

export default Text

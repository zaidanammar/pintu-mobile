import React from 'react'
import { SvgXml } from 'react-native-svg'
import { useThemeColor } from '../../../hooks/useThemeColor'

const DeFiIcon = () => {
  const color = useThemeColor({ light: '#000', dark: '#f1f1f1' }, 'background')

  const xml = `<svg width="24px" height="24px" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M21 19.5C21.5523 19.5 22 19.9477 22 20.5C22 21.0523 21.5523 21.5 21 21.5H3C2.44772 21.5 2 21.0523 2 20.5C2 19.9477 2.44772 19.5 3 19.5V19C3 17.3431 4.34315 16 6 16V11.5C6 10.9477 6.44772 10.5 7 10.5C7.55228 10.5 8 10.9477 8 11.5V15.999H11V11.5C11 10.9477 11.4477 10.5 12 10.5C12.5523 10.5 13 10.9477 13 11.5L12.999 15.999H16V11.5C16 10.9477 16.4477 10.5 17 10.5C17.5523 10.5 18 10.9477 18 11.5L17.999 15.999C19.5977 16 20.9037 17.2489 20.9949 18.8237L21 19V19.5ZM19 7.5C19.5523 7.5 20 7.94772 20 8.5C20 9.05228 19.5523 9.5 19 9.5H5C4.44772 9.5 4 9.05228 4 8.5C4 7.94772 4.44772 7.5 5 7.5H19ZM11.977 2.5L21.3707 6.24884C21.7507 6.40051 22 6.76842 22 7.17761V7.5C22 7.8739 21.6969 8.17701 21.323 8.17701C21.2369 8.17701 21.1515 8.16057 21.0715 8.12858L12.0011 4.5L2.92849 8.12864C2.5813 8.2675 2.18728 8.09862 2.04842 7.75143C2.01643 7.67146 2 7.58613 2 7.5V7.17645C2 6.76784 2.2486 6.40033 2.62787 6.24827L11.977 2.5ZM19 19L18.9933 18.8834C18.94 18.4243 18.5757 18.06 18.1166 18.0067L18 18L19 17.999V17.9989L18.0193 17.9998C18.0129 17.9999 18.0065 18 18 18H6L5.98 17.998L5 17.9989V18H6L5.88338 18.0067C5.4243 18.06 5.06005 18.4243 5.00673 18.8834L5 19V18.101L4.99685 19H5V19.499H19V19H19.0032L19 18.155V19Z" fill="currentColor"></path>
</svg>`

  const Svg = () => <SvgXml xml={xml} color={color} />
  return <Svg />
}

export default DeFiIcon

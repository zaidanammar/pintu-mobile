import React from 'react'
import { SvgXml } from 'react-native-svg'
import { useThemeColor } from '../../../hooks/useThemeColor'

const Layer2Icon = () => {
  const color = useThemeColor({ light: '#000', dark: '#f1f1f1' }, 'background')

  const xml = `<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.30651 8.84604C2.5852 9.25348 2.5852 9.91407 3.30651 10.3215L6.89896 12.3507L3.4612 14.2926C2.25902 14.9717 2.25903 16.0727 3.46121 16.7517L9.92713 20.4041C11.1293 21.0831 13.0784 21.0831 14.2806 20.4041L20.5405 16.8681C21.7426 16.1891 21.7426 15.0881 20.5405 14.409L17.1141 12.4736L20.6944 10.4512C21.4157 10.0438 21.4157 9.38317 20.6944 8.97574L13.1917 4.73774C12.4704 4.3303 11.3009 4.3303 10.5796 4.73774L3.30651 8.84604ZM8.64035 13.3344L10.8092 14.5595C11.5305 14.9669 12.7 14.9669 13.4213 14.5595L15.3727 13.4572L18.7991 15.3926C19.0395 15.5285 19.0395 15.7487 18.7991 15.8845L12.5392 19.4204C12.2988 19.5562 11.909 19.5562 11.6685 19.4204L5.2026 15.7681C4.96216 15.6323 4.96216 15.4121 5.2026 15.2762L8.64035 13.3344Z" fill="currentColor"></path>
</svg>`

  const Svg = () => <SvgXml xml={xml} color={color} />
  return <Svg />
}

export default Layer2Icon

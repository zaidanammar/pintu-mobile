import React from 'react'
import { SvgXml } from 'react-native-svg'
import { useThemeColor } from '../../../hooks/useThemeColor'

const CexIcon = () => {
  const color = useThemeColor({ light: '#000', dark: '#f1f1f1' }, 'background')

  const xml = `<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>Icons/24/Cex</title>
    <g id="Icons/24/Cex__njK9wj9b" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <path d="M17.5,2 C18.6045695,2 19.5,2.8954305 19.5,4 L19.5,20 C19.5,21.1045695 18.6045695,22 17.5,22 L6.5,22 C5.3954305,22 4.5,21.1045695 4.5,20 L4.5,4 C4.5,2.8954305 5.3954305,2 6.5,2 L17.5,2 Z M17.5,4 L6.5,4 L6.5,20 L17.5,20 L17.5,4 Z M15.75,17 C16.3022847,17 16.75,17.4477153 16.75,18 C16.75,18.5522847 16.3022847,19 15.75,19 L13.25,19 C12.6977153,19 12.25,18.5522847 12.25,18 C12.25,17.4477153 12.6977153,17 13.25,17 L15.75,17 Z M10.75,17 C11.3022847,17 11.75,17.4477153 11.75,18 C11.75,18.5522847 11.3022847,19 10.75,19 L8.25,19 C7.69771525,19 7.25,18.5522847 7.25,18 C7.25,17.4477153 7.69771525,17 8.25,17 L10.75,17 Z M15.75,13.75 C16.3022847,13.75 16.75,14.1977153 16.75,14.75 C16.75,15.3022847 16.3022847,15.75 15.75,15.75 L8.25,15.75 C7.69771525,15.75 7.25,15.3022847 7.25,14.75 C7.25,14.1977153 7.69771525,13.75 8.25,13.75 L15.75,13.75 Z M16.3455339,5.79289322 C16.7360582,6.18341751 16.7360582,6.81658249 16.3455339,7.20710678 L13.5171068,10.0355339 L13.5001812,10.0519528 C13.4939989,10.0584722 13.4877119,10.0649288 13.4813203,10.0713203 C13.0907961,10.4618446 12.4576311,10.4618446 12.0671068,10.0713203 L11.274,9.278 L9.06710678,11.4855339 C8.67658249,11.8760582 8.04341751,11.8760582 7.65289322,11.4855339 C7.26236893,11.0950096 7.26236893,10.4618446 7.65289322,10.0713203 L10.4813203,7.24289322 C10.698535,7.02567852 10.9908162,6.92928147 11.2746579,6.95370206 C11.5583018,6.92950953 11.8501488,7.02593528 12.0671068,7.24289322 L12.774,7.949 L14.9313203,5.79289322 C15.3218446,5.40236893 15.9550096,5.40236893 16.3455339,5.79289322 Z" id="Combined-Shape__njK9wj9b" fill="currentColor"></path>
    </g>
    </svg>`

  const Svg = () => <SvgXml xml={xml} color={color} />
  return <Svg />
}

export default CexIcon

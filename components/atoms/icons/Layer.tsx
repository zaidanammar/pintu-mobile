import React from 'react'
import { SvgXml } from 'react-native-svg'
import { useThemeColor } from '../../../hooks/useThemeColor'

const LayerIcon = () => {
  const color = useThemeColor({ light: '#000', dark: '#f1f1f1' }, 'background')

  const xml = `<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <title>Icons/24/Layer1</title>
  <g id="Icons/24/Layer1__HFrgNbFQ" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <path d="M11.1017062,4.27665843 C11.8441247,3.96517365 12.6805859,3.96517365 13.4230043,4.27665843 L13.4230043,4.27665843 L21.1753408,7.52918383 C22.1938962,7.95652301 22.6731716,9.12865212 22.2458324,10.1472075 C22.0466791,10.6218858 21.6721704,11.001498 21.200231,11.2070576 L21.200231,11.2070576 L16.2896287,13.3460448 L20.8286547,15.306898 C21.3356742,15.5258723 21.5691809,16.1144065 21.3502067,16.6214259 C21.2495882,16.8544008 21.0641571,17.0404068 20.8314949,17.141746 L13.0610115,20.5262849 C12.5516825,20.7481301 11.973028,20.7481301 11.463699,20.5262849 L3.72380761,17.1550708 C3.21746849,16.9345279 2.98578483,16.3452737 3.20632767,15.8389346 C3.30910746,15.6029649 3.49891355,15.4157105 3.73625272,15.3161339 L8.33062868,13.3880448 L3.32447948,11.2070576 C2.36002402,10.786976 1.89380974,9.69803015 2.23262175,8.72048406 L2.28951959,8.57478517 C2.49507918,8.10284575 2.87469136,7.72833712 3.3493697,7.52918383 L3.3493697,7.52918383 Z M12.6492383,6.12091604 C12.4017655,6.01708778 12.1229451,6.01708778 11.8754722,6.12091604 L11.8754722,6.12091604 L4.12313574,9.37344143 L11.8630271,12.7446556 C12.1176916,12.8555782 12.4070189,12.8555782 12.6616834,12.7446556 L12.6616834,12.7446556 L20.4015748,9.37344143 Z" id="Combined-Shape__HFrgNbFQ" fill="currentColor"></path>
  </g>
</svg>`

  const Svg = () => <SvgXml xml={xml} color={color} />
  return <Svg />
}

export default LayerIcon
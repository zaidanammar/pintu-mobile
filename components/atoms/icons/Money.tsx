import React from 'react'
import { SvgXml } from 'react-native-svg'
import { useThemeColor } from '../../../hooks/useThemeColor'

const MoneyIcon = () => {
  const color = useThemeColor({ light: '#000', dark: '#f1f1f1' }, 'background')

  const xml = `<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <title>Icons/24/Lending</title>
  <g id="Icons/24/Lending__OzQbRW8K" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <path d="M12.9826065,2.19829467 L13.1974467,2.27618744 L13.3849968,2.21822612 C14.0135962,2.04334 14.7090419,2.05994315 15.3355583,2.2802166 L15.5213095,2.35242092 C16.7968793,2.8972419 17.3254771,4.15325606 16.7602387,5.21702761 L16.6763481,5.36081093 L15.5591007,7.11234177 L18.8387871,8.9650725 C20.1467974,9.70412143 21.0200635,10.8504255 21.2603808,12.1294913 L21.2979746,12.3708049 L21.9764613,17.8460347 C21.9921437,17.9725881 22,18.0997098 22,18.2269129 C22,20.2475854 20.060024,21.8972578 17.6218856,21.9953824 L17.3918946,22 L6.60845806,22 C6.45310373,22 6.29784878,21.9935674 6.14328802,21.9807267 C3.6880286,21.7767478 1.87939327,20.0298939 2.00628539,18.033854 L2.02389135,17.8460347 L2.73383531,12.1169525 C2.8713805,11.0069948 3.48455385,9.9755954 4.4593771,9.20342038 L4.67376172,9.04198786 L7.29331169,7.16705153 L6.53935912,5.8103386 C6.15198503,5.11314826 6.29279243,4.30075273 6.8861101,3.72097048 L7.0201482,3.60041859 C7.5829647,3.13414605 8.35882758,2.94499006 9.09447387,3.03416786 L9.11696939,3.03740776 L9.15643373,2.9964325 C10.0666463,2.09013979 11.6144328,1.74618068 12.9826065,2.19829467 Z M10.7544715,4.47350128 L10.7167909,4.54178294 L10.6870565,4.61239118 C10.4419019,5.29585725 9.34134411,5.52304833 8.69161851,5.02431475 C8.64582748,4.98916526 8.5720188,4.98950175 8.52676221,5.02506633 C8.50410094,5.04287453 8.49244544,5.06669416 8.49312618,5.09072431 L8.50356579,5.12620229 L9.33705788,6.54880502 L10.8692959,6.54919761 C11.4834448,6.54919761 11.9896167,6.90825596 12.0587936,7.37083373 L12.0668504,7.47930375 C12.0668504,7.95629551 11.6045462,8.3494247 11.0089561,8.40315239 L10.8692959,8.40940989 L9.01491572,8.4090173 L5.96037421,10.4836599 C5.33712429,10.9067612 4.92305678,11.4826061 4.78386449,12.1124223 L4.75041876,12.3028875 L4.01241777,17.9520066 C3.87888813,18.9741256 4.83749025,19.8867892 6.15351552,19.9904979 L6.27424924,19.9976229 L6.39529231,20 L17.604891,20 C18.9276732,20 20,19.1671546 20,18.1397877 L19.9969394,18.0457771 L19.9877655,17.9520066 L19.282465,12.5531968 C19.1843304,11.8020141 18.6990239,11.1166214 17.943172,10.6502262 L17.7486401,10.5382785 L13.4694315,8.24483373 C13.0133729,8.00040881 12.8378443,7.54913755 13.0270973,7.15500491 L13.0878192,7.04912919 L14.7375169,4.59291395 C14.8488612,4.42713472 14.7660895,4.22263989 14.5526411,4.13616196 C14.3960707,4.07272798 14.2056928,4.08892894 14.0705228,4.17718972 C13.7497554,4.38663832 13.3148754,4.4488355 12.9239473,4.34837024 L12.7797182,4.30304087 L12.1928546,4.0832465 C11.6569025,3.88251971 11.0129165,4.05724272 10.7544715,4.47350128 Z M12.42,10.4 L12.42,11.02 L12.6522222,11.0433951 C13.2566667,11.1207613 13.7425926,11.317963 14.11,11.635 C14.5233333,11.9916667 14.7466667,12.4966667 14.78,13.15 L14.78,13.15 L13.21,13.15 L13.1841,13.0156 C13.0887,12.6292 12.834,12.394 12.42,12.31 L12.42,12.31 L12.42,13.77 L12.6941975,13.8367284 C13.4039918,14.0207613 13.9425926,14.2535185 14.31,14.535 C14.7233333,14.8516667 14.93,15.33 14.93,15.97 C14.93,16.6233333 14.6966667,17.14 14.23,17.52 C13.7633333,17.9 13.16,18.1066667 12.42,18.14 L12.42,18.14 L12.42,19.03 L11.81,19.03 L11.81,18.13 L11.5656,18.1088 C10.8492,18.0296 10.284,17.81 9.87,17.45 C9.41,17.05 9.17333333,16.4966667 9.16,15.79 L9.16,15.79 L10.82,15.79 L10.8421528,15.9330556 C10.9434954,16.4382407 11.2661111,16.7305556 11.81,16.81 L11.81,16.81 L11.81,15.19 L11.6152,15.1396 C11.3677333,15.0745333 11.1693333,15.018 11.02,14.97 C10.8333333,14.91 10.6166667,14.8216667 10.37,14.705 C10.1233333,14.5883333 9.93666667,14.4633333 9.81,14.33 C9.68333333,14.1966667 9.575,14.0183333 9.485,13.795 C9.395,13.5716667 9.35,13.3166667 9.35,13.03 C9.35,12.41 9.57666667,11.9266667 10.03,11.58 C10.4833333,11.2333333 11.0766667,11.0433333 11.81,11.01 L11.81,11.01 L11.81,10.4 L12.42,10.4 Z M12.42,15.37 L12.42,16.81 C12.6666667,16.7766667 12.8683333,16.7016667 13.025,16.585 C13.1816667,16.4683333 13.26,16.3066667 13.26,16.1 C13.26,15.9066667 13.195,15.7583333 13.065,15.655 C12.935,15.5516667 12.72,15.4566667 12.42,15.37 L12.42,15.37 Z M11.81,12.29 L11.661,12.3112 C11.4716667,12.3464 11.3196667,12.4093333 11.205,12.5 C11.0616667,12.6133333 10.99,12.7566667 10.99,12.93 C10.99,13.11 11.0516667,13.2466667 11.175,13.34 C11.2983333,13.4333333 11.51,13.5233333 11.81,13.61 L11.81,13.61 L11.81,12.29 Z" id="Combined-Shape__OzQbRW8K" fill="currentColor"></path>
  </g>
</svg>`

  const Svg = () => <SvgXml xml={xml} color={color} />
  return <Svg />
}

export default MoneyIcon

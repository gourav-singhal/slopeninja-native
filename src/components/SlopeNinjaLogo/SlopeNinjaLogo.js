import React from 'react';
import { Constants, Svg } from 'expo';
import { View, StyleSheet } from 'react-native';

const {
  G,
  Path,
} = Svg;

const SlopeNinjaLogo = ({ width = 30, height = 30 }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 30 30">
      <G fill="none" fill-rule="evenodd">
        <Path d="M25.272 5.143c1.286-.772 3.62-2.233 3.54-2.638-.107-.556-2.44-.415-2.44-.415s.535-1.64.05-2.063c-.368-.323-2.494 2.325-3.476 3.592C20.81 2.51 18.252 1.866 15.5 1.866 8.044 1.867 2 6.597 2 12.43c0 .13.005.26.013.392.05 1.08.307 2.117.74 3.09C5.344 22.49 13.81 30 15.5 30c1.69 0 10.156-7.51 12.746-14.088.434-.973.69-2.01.74-3.09.01-.132.014-.262.014-.39 0-2.827-1.418-5.394-3.728-7.29" fill="#474746"/>
        <Path d="M20.975 7H10.87C5.095 7 4.645 9.29 4.645 9.99v1.03H4v2.78h.644v1.475c0 1.553 1.576 2.333 5.688 2.725L24 7.277C23.203 7.105 22.212 7 20.975 7" fill="#979796"/>
        <Path d="M27 10.793h-.625V9.75c0-.56-.27-2.11-3.108-2.75L10 17.87c.437.043.903.082 1.4.117.042.005.082.01.123.01h.067l.185-.013c.37-.04.72-.197 1.012-.45l2.64-2.87 2.44 2.664.13.138c.327.313.74.5 1.166.528l.123.006c.067 0 .132-.006.188-.014 5.03-.354 6.9-1.135 6.9-2.88v-1.493H27v-2.82z" fill="#747473"/>
      </G>
    </Svg>
  );
}

export default SlopeNinjaLogo;
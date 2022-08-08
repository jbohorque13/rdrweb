/*
  NOTE:
  You can import these elements in your component and use it as follows:
  import { LogoSVG } from 'components/UI/Image';
  ...
  <LogoSVG />
*/

import styled from 'styled-components';

import SampleImagePNG from 'assets/images/sample-image.png';

export const SampleImage = {
  // NOTE: you can specify an image for a breakpoint, or just export it as img and src
  // NOTE: the image can be used at any time and is already styled
  mobile: {
    img: styled.img.attrs({ src: `${SampleImagePNG}` }),
    src: SampleImagePNG,
  },
  // NOTE: the srcSet is for using with /components/Picture component, each position of the array matches a breakpoint
  srcSet: [
    SampleImagePNG,
    SampleImagePNG,
    SampleImagePNG,
    SampleImagePNG,
    SampleImagePNG,
    SampleImagePNG,
  ],
};

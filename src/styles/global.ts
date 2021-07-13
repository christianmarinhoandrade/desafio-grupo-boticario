import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent
} from 'styled-components'
import OpenSansLightTtf from '@/fonts/OpenSans-Light.ttf'
import OpenSansRegularTtf from '@/fonts/OpenSans-Regular.ttf'
import OpenSansSemiBoldTtf from '@/fonts/OpenSans-SemiBold.ttf'

type GlobalStylesProps = {
  any?: string
}

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 300;
  src:  url(${OpenSansLightTtf}) format('truetype'),
}
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  src:  url(${OpenSansRegularTtf}) format('truetype')
}
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  src:  url(${OpenSansSemiBoldTtf}) format('truetype'); 
}

* {
    margin: 0;
    padding: 0;
    border: 0;
    text-decoration: none;
    box-sizing: border-box;
}

html {
    font-size: 62.5%;
}
  ${({ theme }) => css`
    body {
      font-family: ${theme.fontFamily};
    }
  `}
`

export default GlobalStyles

/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent
} from 'styled-components'
import OpenSansLightTtf from '@/fonts/OpenSans-Light.ttf'
import OpenSansRegularTtf from '@/fonts/OpenSans-Regular.ttf'
import OpenSansSemiBoldTtf from '@/fonts/OpenSans-SemiBold.ttf'

const GlobalStyles: GlobalStyleComponent<any, DefaultTheme> = createGlobalStyle`
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


input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
      -webkit-box-shadow: 0 0 0px transparent inset;
      transition: background-color 5000s ease-in-out 0s;
    }
.ant-form-item-has-error :not(.ant-input-disabled).ant-input:focus,
.ant-form-item-has-error :not(.ant-input-affix-wrapper-disabled).ant-input-affix-wrapper:focus,
.ant-form-item-has-error :not(.ant-input-disabled).ant-input-focused,
.ant-form-item-has-error :not(.ant-input-affix-wrapper-disabled).ant-input-affix-wrapper-focused{
  border-color: none;
  box-shadow: none;
}


  ${({ theme }) => css`
    body {
      font-family: ${theme.fontFamily};
    }
  `}
`

export default GlobalStyles

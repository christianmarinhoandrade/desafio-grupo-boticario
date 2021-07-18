import * as S from './styles'
export type HeaderProps = {
  children: JSX.Element
  justifycontent?: 'space-around' | 'flex-end'
}
function Header({
  children,
  justifycontent = 'space-around',
  ...props
}: HeaderProps) {
  return (
    <S.Header justifycontent={justifycontent} {...props}>
      {children}
    </S.Header>
  )
}

export default Header

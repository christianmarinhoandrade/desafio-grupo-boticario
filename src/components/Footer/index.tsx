import * as S from './styles'

export type FooterProps = {
  color?: string
}

function SharedFooter(props: FooterProps) {
  const { color } = props

  return (
    <S.Footer>
      <S.Text color={color}>© </S.Text>
      <S.Text strong color={color}>
        Grupo Boticário
      </S.Text>
      <S.Text color={color}> | {new Date().getFullYear()}</S.Text>
    </S.Footer>
  )
}

export default SharedFooter

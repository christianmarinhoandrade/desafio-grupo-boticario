import { ImageProps as ImagePropsAntd } from 'antd'

import grupoBoticario from '@/img/logo-grupo-boticario.png'
import { Image } from './styles'

export type ImageProps = { cursor?: string } & ImagePropsAntd
function Logo({
  width,
  height,
  preview = false,
  cursor,
  id,
  src,
  ...props
}: ImageProps) {
  const img = src || grupoBoticario

  return (
    <Image
      src={img}
      id={id}
      width={width}
      height={height}
      preview={preview}
      cursor={cursor}
      alt="Grupo Boticário"
      {...props}
    />
  )
}

export default Logo

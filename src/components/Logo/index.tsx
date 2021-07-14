import { Image, ImageProps } from 'antd'

import grupoBoticario from '@/img/logo-grupo-boticario.png'

function Logo({
  width,
  height,
  preview = false,
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
      alt="Grupo Boticário"
      {...props}
    />
  )
}

export default Logo

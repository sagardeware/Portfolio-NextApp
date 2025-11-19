import NextImage, { ImageProps } from 'next/image'

const Image = (props: ImageProps) => {
  return (
    <NextImage
      {...props}
      unoptimized
      loading={props.priority ? 'eager' : 'lazy'}
    />
  )
}

export default Image 
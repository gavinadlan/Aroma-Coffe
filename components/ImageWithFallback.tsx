"use client"

import Image from "next/image"
import { useState } from "react"

interface ImageWithFallbackProps {
  src: string
  alt: string
  fallbackSrc: string
  fill?: boolean
  width?: number
  height?: number
  className?: string
  priority?: boolean
}

export default function ImageWithFallback({
  src,
  alt,
  fallbackSrc,
  fill = false,
  width,
  height,
  className,
  priority = false,
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src)

  const handleError = () => {
    setImgSrc(fallbackSrc)
  }

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill={fill}
      width={width}
      height={height}
      className={className}
      priority={priority}
      onError={handleError}
    />
  )
} 
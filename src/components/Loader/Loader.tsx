import animacoes from '@resources/animacoes'
import Lottie from 'lottie-react'

export function Loader() {
  const {carrregamento} = animacoes
  return <Lottie animationData={carrregamento} />
}

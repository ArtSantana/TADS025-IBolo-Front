import { useEffect } from 'react'
import { useFirstMountState } from '.'

const useUpdateEffect: typeof useEffect = (effect, deps) => {
   const isFirstMount = useFirstMountState()

   useEffect(() => {
      if (!isFirstMount) {
         return effect()
      }
   }, deps)
}

export { useUpdateEffect }

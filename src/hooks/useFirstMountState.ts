import { useRef } from 'react'

const useFirstMountState = (): boolean => {
   const isFirst = useRef(true)

   if (isFirst.current) {
      isFirst.current = false

      return true
   }

   return isFirst.current
}

export { useFirstMountState }
import { useEffect } from "react"

function useScrollLock(lock: boolean) {
  useEffect(() => {
    const body = document.body
    if (body) {
      body.style.overflow = lock ? "hidden" : "auto"
    }
  }, [lock])
}

export default useScrollLock

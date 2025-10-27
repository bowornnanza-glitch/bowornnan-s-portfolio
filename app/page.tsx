import Component from "../portfolio-landing"
import { Suspense } from "react"

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  )
}

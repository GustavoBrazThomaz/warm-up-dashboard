import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/skins')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_app/skins"!</div>
}

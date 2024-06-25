import { Container } from '@/components/Container'

export function SimpleLayout({children }) {
  return (
    <Container className="mt-16 sm:mt-6">
      <div className="mt-16 sm:mt-20">{children}</div>
    </Container>
  )
}

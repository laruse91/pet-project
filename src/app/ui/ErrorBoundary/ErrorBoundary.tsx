import { ErrorBoundaryProps, ErrorBoundaryState } from 'app/ui/ErrorBoundary/ErrorBoundary.type'
import { Component, ErrorInfo, Suspense } from 'react'
import { types } from 'sass'
import { ErrorComponent } from 'widgets/ErrorComponent'
import Error = types.Error

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error(error, errorInfo)
  }

  render() {
    const { hasError } = this.state
    const { children } = this.props
    if (hasError) {
      // You can render any custom fallback UI
      return (
        <Suspense>
          <ErrorComponent />
        </Suspense>
      )
    }

    return children
  }
}

export default ErrorBoundary

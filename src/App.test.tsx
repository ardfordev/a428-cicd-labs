import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App Component', () => {
  it('renders the card with correct title', () => {
    render(<App />)
    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })

  it('renders the card with correct description', () => {
    render(<App />)
    expect(screen.getByText('Submission Proyek Membangun CI/CD Pipeline dengan Jenkins')).toBeInTheDocument()
  })

  it('renders the footer with author name', () => {
    render(<App />)
    expect(screen.getByText('ardi_supriyadi')).toBeInTheDocument()
  })
})
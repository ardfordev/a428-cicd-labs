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

  it('renders the card with proper styling classes', () => {
    const { container } = render(<App />)
    
    // Check for container classes
    const mainContainer = container.querySelector('.container')
    expect(mainContainer).toHaveClass('flex', 'w-full', 'min-h-screen', 'flex-col', 'justify-center', 'items-center')
    
    // Check for card width class
    const card = screen.getByRole('article') // Card component renders as article
    expect(card).toHaveClass('w-[350px]')
  })

  it('has proper card structure', () => {
    render(<App />)
    
    // Verify card header exists
    expect(screen.getByRole('heading', { name: 'Hello World' })).toBeInTheDocument()
    
    // Verify card content exists (even if empty)
    const cardContent = document.querySelector('[class*="CardContent"]')
    expect(cardContent).toBeInTheDocument()
    
    // Verify card footer exists and has correct alignment
    const cardFooter = document.querySelector('[class*="CardFooter"]')
    expect(cardFooter).toHaveClass('flex', 'justify-end')
  })
})
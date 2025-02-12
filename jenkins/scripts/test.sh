#!/usr/bin/env sh

echo 'Setting up and running tests for Vite + React + TypeScript project'

# First ensure all dependencies are installed
echo 'Installing dependencies...'
set -x
npm install
set +x

# Type checking
echo 'Running TypeScript compilation check...'
set -x
npm run tsc
set +x

# Linting
echo 'Running ESLint checks...'
set -x
npm run lint
set +x

# Run tests (Note: You'll need to add testing configuration)
echo 'To run tests, you will need to:'
echo '1. Install testing dependencies like Vitest:'
echo '   npm install -D vitest @testing-library/react @testing-library/jest-dom'
echo '2. Add test script to package.json:'
echo '   "test": "vitest"'
echo '3. Create test configuration'

# Build check
echo 'Running build check...'
set -x
npm run build
set +x

echo 'All checks completed.'
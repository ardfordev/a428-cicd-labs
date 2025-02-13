#!/usr/bin/env sh

echo 'The following "npm" command builds your TypeScript/React application for'
echo 'production in the local "dist" directory'
set -x
npm run build
set +x

echo 'The following "npm" command runs your TypeScript/React application in'
echo 'preview mode and makes the application available for web browsing.'
set -x
npm run preview -- --host 0.0.0.0 --port 3000 &
sleep 1
echo $! > .pidfile
set +x

echo 'Now...'
echo 'Visit http://localhost:3000 to see your TypeScript/React application in action.'
#!/usr/bin/env sh

echo 'The following "npm" command builds your TypeScript/React application for'
echo 'production in the local "dist" directory (i.e. within the'
echo '"/var/jenkins_home/workspace" directory),'
echo 'correctly bundles React in production mode and optimizes the build for'
echo 'the best performance.'
set -x
npm run build
set +x

echo 'The following "npm" command runs your TypeScript/React application in'
echo 'preview mode and makes the application available for web browsing.'
echo 'The "npm run preview" command has a trailing ampersand so that the command runs'
echo 'as a background process (i.e. asynchronously). Otherwise, this command'
echo 'can pause running builds of CI/CD applications indefinitely.'
set -x
npm run preview -- --port 3000 &
sleep 1
echo $! > .pidfile
set +x

echo 'Now...'
echo 'Visit http://localhost:3000 to see your TypeScript/React application in action.'
echo '(This is why you specified the "args ''-p 3000:3000''" parameter when you'
echo 'created your initial Pipeline as a Jenkinsfile.)'
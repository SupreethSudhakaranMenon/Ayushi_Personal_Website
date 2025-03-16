#!/bin/bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm use 18.17.0
rm -rf node_modules package-lock.json .cache public
npm install --legacy-peer-deps
npm run build

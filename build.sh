#!/bin/bash

#
# Helper script for deploying.
#

set -x
set -e
set -u

git pull
rm -rf node_modules/
npm install --production
npm run build
pm2 reload tsitaat-com

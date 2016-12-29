#!/bin/bash

# Exit with nonzero exit code if anything fails
set -e

# Build source
yarn run build

# Build docs
yarn start

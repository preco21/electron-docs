#!/bin/bash

# Exit with nonzero exit code if anything fails
set -e

function doBuild {
  ./build.sh
}

# Pull requests and commits to other branches shouldn't try to deploy, just build to verify
if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "$SOURCE_BRANCH" ]; then
    echo "Skipping deploy; just doing a build."
    doBuild
    exit 0
fi

# Save some useful information
REPO=`git config remote.origin.url`
SSH_REPO=${REPO/https:\/\/github.com\//git@github.com:}
SHA=`git rev-parse --verify HEAD`

# Clone the existing gh-pages for this repo into out/
# Create a new empty branch if gh-pages doesn't exist yet (should only happen on first deply)
git clone $REPO out
cd out
git checkout $TARGET_BRANCH || git checkout --orphan $TARGET_BRANCH
cd ..

# Clean out existing content
rm -rf out/**/* || exit 0

# Run build script
doBuild

# Now move on cloned repo directory
cd out

# Setup basic git config
git config user.name "$COMMIT_AUTHOR_NAME"
git config user.email "$COMMIT_AUTHOR_EMAIL"

# Check delta changes for source branch
if [ -z `git diff --exit-code` ]; then
    echo "No changes to the output on this push; exiting."
    exit 0
fi

# Commit all changes
# The delta will show diffs between new and old versions.
git add --all .
git commit -m "Deploy to GitBook: ${SHA}"

# Get the deploy key from Travis's environment variables
echo -e $DEPLOY_KEY > deploy_key
chmod 600 deploy_key
eval "$(ssh-agent -s)"
ssh-add deploy_key

# Push docs to target branch
git push $SSH_REPO $TARGET_BRANCH

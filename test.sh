#!/bin/bash -e

# keep a reference to the local wix-code-docs path
local_docs_dir=$(pwd)

# clone corvid-types into a temporary directory
tmp_dir=$(mktemp -d -t wix-code-docs-test-XXXXXXXXXX)
cd $tmp_dir
git clone --depth 1 https://github.com/wix-incubator/corvid-types.git .

# run corvid-types tests based on the local wix-code-docs repo
npm install
LOCAL_DOCS_REPO_PATH=$local_docs_dir npm run build
npm run test

# cleanup
rm -rf $tmp_dir
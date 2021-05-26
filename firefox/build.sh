#!/bin/bash

script=$(realpath $0)
dir=$(dirname $script)
build="$dir/build"

# delete build directory and output
rm -rf $build
rm -f "$dir/build.xpi"

# check desktop build exists
desktop_build="$dir/../desktop/build"
if [[ ! -d "$desktop_build" ]]
then
  echo "desktop build does not exist"
  exit 1
fi

# copy desktop build and src files
cp -r $desktop_build $build
cp -a "$dir/src/." $build

# process for use as extension
mv "$build/_next" "$build/next"

if [[ "$OSTYPE" == "darwin"* ]]; then
  # Mac OSX
  (cd $build && grep -rli '_next' * | xargs -I@ sed -i '' 's/_next/next/g' @)
else
  (cd $build && grep -rli '_next' * | xargs -i@ sed -i 's/_next/next/g' @)
fi

# zip into build.zip
(cd $build; zip -r ../build.xpi .)

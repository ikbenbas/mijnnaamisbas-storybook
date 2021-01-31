#!/bin/bash

originalComponent="BasExample"
kebabOriginalComponent="bas-example"
c=BasComponent

while getopts "c:" opt
do
   case "$opt" in
      c ) component="$OPTARG" ;;
   esac
done

kebabComponent=$(echo "$component" | perl -pe 's/([a-z0-9])([A-Z])/$1-\L$2/g' | tr '[:upper:]' '[:lower:]');

echo "Copying $originalComponent to new compontent directory: $component";

rsync -a --exclude={'dist','node_modules','package-lock.json'} ./src/components/$originalComponent/ ./src/components/$component/

echo "Rename component to $component.vue";
mv ./src/components/$component/src/$originalComponent.vue ./src/components/$component/src/$component.vue

echo "Replace $originalComponent => $component occurences in files";
perl -pi -e "s/$originalComponent/$component/g" ./src/components/$component/package.json
perl -pi -e "s/$originalComponent/$component/g" ./src/components/$component/README.md
perl -pi -e "s/$originalComponent/$component/g" ./src/components/$component/src/$component.vue

echo "Replace $kebabOriginalComponent => $kebabComponent occurences in files";
perl -pi -e "s/$kebabOriginalComponent/$kebabComponent/g" ./src/components/$component/package.json
perl -pi -e "s/$kebabOriginalComponent/$kebabComponent/g" ./src/components/$component/README.md
perl -pi -e "s/$kebabOriginalComponent/$kebabComponent/g" ./src/components/$component/src/$component.vue

echo "Reset package version";
perl -pi -e "s/\"version\": \"([0-9]+).([0-9]+).([0-9]+)\"/\"version\": \"0.0.0\"/g" ./src/components/$component/package.json

echo "";
echo "Done! 🚀";

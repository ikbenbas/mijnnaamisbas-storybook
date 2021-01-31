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

scp -rp ./src/components/$originalComponent/. ./src/components/$component/

echo "Remove /dist folder";
rm -rf ./src/components/$component/dist

echo "Remove /node_modules folder";
rm -rf ./src/components/$component/node_modules

echo "Remove /package-lock.json";
rm -rf ./src/components/$component/package-lock.json

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

echo "Done!";

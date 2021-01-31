#!/bin/bash

originalComponent="BasExample"
kebabOriginalComponent="bas-example"
component=BasComponent

while getopts "c:" opt
do
   case "$opt" in
      c ) component="$OPTARG" ;;
   esac
done

kebabComponent=$(echo "$component" | perl -pe 's/([a-z0-9])([A-Z])/$1-\L$2/g' | tr '[:upper:]' '[:lower:]');
storyFileName=$kebabComponent.stories.mdx


echo "Copying $kebabOriginalComponent story to new story: $storyFileName";

cp ./src/stories/vue/01-$kebabOriginalComponent.stories.mdx ./src/stories/vue/$storyFileName

echo "Replace $originalComponent => $component occurences in files";
perl -pi -e "s/$originalComponent/$component/g" ./src/stories/vue/$storyFileName

echo "Replace $kebabOriginalComponent => $kebabComponent occurences in files";
perl -pi -e "s/$kebabOriginalComponent/$kebabComponent/g" ./src/stories/vue/$storyFileName

echo "";
echo "Done! 🚀";

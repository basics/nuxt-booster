docker run --rm -ti -v $(pwd):$(pwd) -w $(pwd) dkarchmervue/fluent-ffmpeg node build/index.js --thumbnails 200 -o dist

docker run --rm -ti -v $(pwd):$(pwd) -w $(pwd) dkarchmervue/fluent-ffmpeg node build/renditions.js

node ./build/index.js --outputDir ./C
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
cd $DIR
cd ..

WORD_DIR=`pwd`

function clean(){
	rm -rf common/*.debug.js
	rm -rf common/*.min.js
	rm -rf word/*.debug.js
	rm -rf word/*.min.js
	rm -rf word/*.map
	rm -rf build
	mkdir build
}

#clean
clean

#build
npm run release-common
npm run release

#copy
cp common/common.min.js build/


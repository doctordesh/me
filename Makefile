build:
	npm install
	cp node_modules/jquery/dist/jquery.min.js javascript/lib
	cp node_modules/bootstrap/dist/js/bootstrap.min.js javascript/lib
	rm -rf fonts/bootstrap
	cp -r node_modules/bootstrap/dist/fonts fonts/bootstrap
	compass compile --force --output-style compressed


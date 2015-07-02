build:
	npm install
	cp node_modules/jquery/dist/jquery.min.js javascript/lib
	cp node_modules/bootstrap/dist/js/bootstrap.min.js javascript/lib
	rm -rf fonts/bootstrap
	cp -r node_modules/bootstrap/dist/fonts fonts/bootstrap
	compass compile --force --output-style compressed

deploy:
	make build
	rsync -rap --delete-excluded --exclude-from=excludes.txt --rsh="ssh -p 51823" . deploy@188.226.219.55:/home/deploy/public_html/me/public

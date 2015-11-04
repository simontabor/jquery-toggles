.DEFAULT: clean build
.PHONY: clean distclean

css = ./node_modules/.bin/lessc $< | ./node_modules/.bin/postcss --use autoprefixer --autoprefixer.browsers "> 5%" -o $@

build: \
	setup \
	toggles.js \
	toggles.min.js \
	css \

clean: \
	clean-js \
	clean-css \

clean-js:
	rm -rf toggles.js toggles.min.js

clean-css:
	rm -rf css

lib:
	mkdir lib

css/themes:
	mkdir -p css/themes

distclean: clean
	rm -f lib/compiler.jar lib/jquery-1.8-extern.js

css/toggles.css: less/toggles.less

setup: \
	lib \
	lib/jquery-1.8-extern.js \
	lib/compiler.jar \
	css/themes \
	node_modules/.bin/lessc \
	node_modules/.bin/postcss \
	node_modules/.bin/js-beautify \

lib/jquery-1.8-extern.js:
	wget -O $@ http://closure-compiler.googlecode.com/svn/trunk/contrib/externs/jquery-1.8.js

lib/compiler.jar:
	wget -O- http://dl.google.com/closure-compiler/compiler-latest.tar.gz | tar -xz -C lib compiler.jar

node_modules/.bin/lessc:
	npm install less

node_modules/.bin/postcss:
	npm install autoprefixer
	npm install postcss-cli

node_modules/.bin/js-beautify:
	npm install js-beautify

toggles.js: js/Toggles.js js/wrap.js
	sed -e "/<<Toggles>>/r js/Toggles.js" -e "/<<Toggles>>/d" js/wrap.js > toggles.js
	./node_modules/.bin/js-beautify -r -n --indent-size=2 toggles.js

toggles.min.js: toggles.js
	java -jar lib/compiler.jar --compilation_level ADVANCED_OPTIMIZATIONS --externs lib/jquery-1.8-extern.js < $< > $@

css: \
	css/toggles.css \
	css/themes/toggles-dark.css \
	css/themes/toggles-iphone.css \
	css/themes/toggles-light.css \
	css/themes/toggles-modern.css \
	css/themes/toggles-soft.css \
	css/themes/toggles-all.css \
	css/toggles-full.css \

css/toggles.css: less/toggles.less
	$(call css)

css/toggles-full.css: css/toggles.css css/themes/toggles-all.css
	cat $^ > $@

css/themes/toggles-all.css: css/themes/toggles-dark.css css/themes/toggles-iphone.css css/themes/toggles-light.css css/themes/toggles-modern.css css/themes/toggles-soft.css
	cat $^ > $@

css/themes/toggles-dark.css: less/themes/toggles-dark.less
	$(call css)

css/themes/toggles-iphone.css: less/themes/toggles-iphone.less
	$(call css)

css/themes/toggles-light.css: less/themes/toggles-light.less
	$(call css)

css/themes/toggles-modern.css: less/themes/toggles-modern.less
	$(call css)

css/themes/toggles-soft.css: less/themes/toggles-soft.less
	$(call css)

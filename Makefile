.PHONY: all build preview

all: build

ORGS=*.org

BUILD=./build

$(BUILD)/index.html: ~/sbin/org2blog-ng.rkt $(ORGS)
	DONT_RANK=1 game-rank	
	time rk ~/sbin/org2blog-ng.rkt -- $(BUILD)
	du -hc $(BUILD) | tail -1
	du -hac $(BUILD)/*html | sort -h

$(BUILD)/sorttable.js: sorttable.js
	cp -f sorttable.js $(BUILD)/

$(BUILD)/games.css: games.css
	cp -f games.css $(BUILD)/

build: $(BUILD)/index.html $(BUILD)/sorttable.js $(BUILD)/games.css

preview:
	rk ~/Dev/scm/github.jeapostrophe/exp/dir-serve.rkt $(BUILD)

remake:
	rm -f $(BUILD)/index.html

deploy: build
	git add .
	git commit -m "Update" . || true
	git push
	git gc
	cd $(BUILD) ; \
		git commit -m "Update" . || true ; \
		git push ; \
		git gc

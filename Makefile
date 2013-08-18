.PHONY: all build preview

all: build

ORGS=*.org
EXTRAS=sorttable.js games.css jquery-games.js
BUILD=./build

$(BUILD)/index.html: ~/sbin/org2blog-ng.rkt $(ORGS) $(EXTRAS)
	time rk ~/sbin/org2blog-ng.rkt -- $(BUILD)
	cp -f $(EXTRAS) $(BUILD)
	du -hc $(BUILD) | tail -1
	du -hac $(BUILD)/*html | sort -h

build: $(BUILD)/index.html

preview:
	rk ~/Dev/scm/github.jeapostrophe/exp/dir-serve.rkt -- -p 8001 $(BUILD)

remake:
	rm -f $(BUILD)/index.html

deploy: build
	git add .
	git commit -m "Update" . || true
	git push
	git gc
	cd $(BUILD) ; \
		git add . ; \
		git commit -m "Update" . || true ; \
		git push ; \
		git gc

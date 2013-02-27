default:
	npm install
	component install
	grunt


clean:
	rm -fr components node_modules

.PHONY: clean

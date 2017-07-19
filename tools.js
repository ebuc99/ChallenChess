/**
 * Decodes window.location.search and returns the parameters as key value pairs.
 * @return {object} dictionary (associative array) of key value pairs
 */
function getQueryParametersDict() {
	return window.location.search ? stringToDict(decodeURI(window.location.search.substring(1)),"&") : {};
}

/**
 * Decodes a given string and returns the key value pairs.
 * @param {string} s source string to be decoded
 * @param {string} pairSep separator string between the pairs, defaults to semicolon (";")
 * @param {string} keyValueSep separator string between key and value for each pair, defaults to equal sign ("=")
 * @return {object} dictionary (associative array) of key value pairs
 */
function stringToDict(s, pairSep=";", keyValueSep="=") {
	result = {};
	if (s) {
		s.split(pairSep).forEach(function(pair) {
			pairList = pair.split(keyValueSep, 2);
			result[pairList[0]] = (pairList.length >= 2) ? pairList[1] : "";
		});
	}
	return result;
}

/**
 * Appends a new link tag to the HTML head, specifying the given stylesheet file.
 * @param {string} path path of the file, including the extension
 */
function appendCssFileToHead(path) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	linkElement.type = "text/css";
	linkElement.href = path;
	document.getElementsByTagName("head")[0].appendChild(linkElement);
}

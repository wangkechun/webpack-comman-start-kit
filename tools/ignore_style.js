var jade = require('wkc-react-jade');
require.extensions['.jade'] = function(module, filename){
	var template = jade.compileFileClient(filename);
	template = `var React = require('react'); module.exports = ${template}`
	module._compile(template, filename);
}

var _DEBUG = false
function debug(a){
	if (_DEBUG) console.log("[DEBUG] --> \n",a,"\n<--[Debug]");
}

function show(a){
	console.log(a)
}

module.exports = {show:show, debug:debug}
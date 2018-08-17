/*
	Bot Pé Diabético
*/

var args = process.argv;

var telegramAPI = require("./libs/telegramAPI.js");
var interface = require("./libs/interface.js"); 
var servicesAPI = require("./constants/servicesAPI.js");

data = [{key:"url=",value:args[2]+"/rest?"}]


telegramAPI.consumeAPI(servicesAPI.setWebhook,data,interface.show);

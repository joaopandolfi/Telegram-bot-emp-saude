const fs = require('fs');

var file_queue = [] //[{chat_id:"",image_id:""}]

function responseImages(folder,uploadFuncion){
	fs.readdir(folder, (err, files) => {
	  files.forEach(file => {
	    
	    file_queue = file_queue.map(function(v){
	    	if((v.image_id+".png") == file){
	    		sendImage(v.chat_id,folder+file,uploadFuncion);
	    		v.image_id = 0
	    		return v
	    	}
	    })
	    //console.log(file);
	  });
	})
}

/*
Send image
chat_id = chat_id
photo = file_id or url
*/

function sendImage(chat_id,image_file,uploadFuncion){
/*
	var req = request.post(url, function (err, resp, body) {
	  if (err) {
	    console.log('Error!');
	  } else {
	    console.log('URL: ' + body);
	  }
	});
	var form = req.form();
	form.append('file', '<FILE_DATA>', {
	  filename: 'myfile.txt',
	  contentType: 'text/plain'
	});
*/
console.log("TENTANDO UPLOAD")
	uploadFuncion(image_file,function(a){
		console.log(a)
	console.log("RESPONDENDO")
	console.log(chat_id)
	console.log(image_file)	
	})
	
}

module.exports = {file_queue:file_queue,responseImages:responseImages,sendImage:sendImage}
var fs = require('fs');

module.exports = {
	//RNA Image processing configs
	reverse_path:"../../../../Emescam/pediabeticobot/",
	caffe_path:"../../RNA/caffe/crfasrnn/python-scripts",
	caffe_script: "crfasrnn.py -i {path_in} -o {path_out}",
	download_path: "files/download/",
	processed_path: "files/processed/",
	
	//Images
	tut_img_path: "files/tutorial.png",
	tut_question_path: "files/elavamosnos.jpg",
	tut_troll_path: "files/fuitapeado.jpg",
	//Id Tutorial Image
	tut_img_id: "AgADAQADvKcxG_YDuEbFeXgYtbq9ubYU9y8ABEYBMoRRmxRDvfUAAgI",

	//SSL Credentials
	credentials:{
		key: fs.readFileSync('./sslcert/server.key', 'utf8'), 
		cert: fs.readFileSync('./sslcert/server.crt', 'utf8')
	}
}
var fs = require('fs');

module.exports = {
	reverse_path:"../../../../Emescam/pediabeticobot/",
	caffe_path:"../../RNA/caffe/crfasrnn/python-scripts",
	caffe_script: "crfasrnn.py -i {path_in} -o {path_out}",
	download_path: "files/download/",
	processed_path: "files/processed/",
	tut_img_path: "files/tutorial.png",
	tut_question_path: "files/elavamosnos.jpg",
	tut_troll_path: "files/fuitapeado.jpg",
	tut_img_id: "AgADAQADvKcxG_YDuEbFeXgYtbq9ubYU9y8ABEYBMoRRmxRDvfUAAgI",
	credentials:{
		key: fs.readFileSync('./sslcert/server.key', 'utf8'), 
		cert: fs.readFileSync('./sslcert/server.crt', 'utf8')
	}
}
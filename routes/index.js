
/*
 * GET home page.
 */

exports.index = function(req, res){
	var bichon = process.env.NODE_ENV;
	console.log("bichon braisé vaut" + bichon);
  res.render('index', { title: 'Express', commentaire: bichon });
};
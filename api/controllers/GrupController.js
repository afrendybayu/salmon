/**
 * GrupController
 *
 * @description :: Server-side logic for managing Grups
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  /**
   * `GrupController.index()`
   */
  index: function (req, res) {
    return res.json({
      todo: 'index() arg g:'+req.query.g,
      isi: 'www'
      
    });
  },


  /**
   * `GrupController.baca()`
   */
	baca: function (req, res) {
		var query = {
			"grup": req.query.g
		};
		Grup.find(query).exec(function(err, isi) {
			if(err) return res.serverError(err);
			res.json(isi);
		});
	}
};


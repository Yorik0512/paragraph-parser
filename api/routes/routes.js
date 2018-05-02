module.exports = function(app) {
    const corrections = require('../controllers/correctionController')
    
    // Get index page.
    app.get('/', function(req, res) {
        res.render('index.html')
    });
    
    // Parse paragraphs in json by URL.
    app.route('/api/article')
        .get(corrections.site_parser)
    
    // Get list of corrections.
    app.route('/api/corrections')
        .get(corrections.list_all_correction)

    // Update correction.
    app.route('/api/corrections/update/:id')
        .put(corrections.update_correction)

    // Delete correction.
    app.route('/api/corrections/delete/:id')
        .delete(corrections.delete_correction)
    
    // Save correction to DB.
    app.route('/api/correction-save')
        .post(corrections.create_correction)
};
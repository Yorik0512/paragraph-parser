import mongoose from 'mongoose'
import request from 'request'
import cheerio from 'cheerio'
const Correction = mongoose.model('Corrections');

exports.site_parser = function(req, res) {
  let article = {
      title: '',
      pharagraphs: []
  }
  
  const appRes = res

  request(req.query.url, function (err, res, body) {
      if (err) throw err
      
      const $ = cheerio.load(body);
      
      article.title = $('.article-entity header h2.headline').text()
      
      $('.body-copy p').each(function() {
          article.pharagraphs.push($(this).text())
      })
      
      appRes.json(article)
  })
};

exports.create_correction = function(req, res) {
  const new_correction = new Correction(req.body);
  new_correction.save(function(err, correction) {
    if (err) res.send(err)
    res.json(correction)
  });
};

exports.list_all_correction = function(req, res) {
  Correction.find({}, function(err, correction) {
    if (err)
      res.send(err);
    res.json(correction);
  });
};

exports.update_correction = function(req, res) {
  Correction.findOneAndUpdate({_id: req.params.id}, req.body, function(err, correction) {
    if (err)
      res.send(err);
    res.json(correction);
  });
};


exports.delete_correction = function(req, res) {
  Correction.remove({
    _id: req.params.id
  }, function(err, correction) {
    if (err)
      res.send(err);
    res.json({ message: 'Correction successfully deleted' });
  });
};
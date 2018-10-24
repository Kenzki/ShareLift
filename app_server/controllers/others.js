/* GET home page */
const about = function(req, res){
  res.render('generic-text', {
    title: 'Working in Progress',
    content: 'Page in progress'
  });
};

module.exports = {
  about
};
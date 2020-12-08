var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   // res.render('index', { title: 'Express' });
//   res.send('Hello World!');
// });

router.get('/', (req, res) => {
  return res.send('Received a GET HTTP method');
});
 
router.post('/', (req, res) => {
  return res.send('Received a POST HTTP method');
});
 
router.put('/', (req, res) => {
  return res.send('Received a PUT HTTP method');
});
 
router.delete('/', (req, res) => {
  return res.send('Received a DELETE HTTP method');
});

module.exports = router;

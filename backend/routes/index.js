var express = require('express');
var router = express.Router();
const plansRepo = require('../repository/plan');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({"config":""})
  res.render('index', { title: 'Express' });
});

router.get('/features', function(req, res, next) {
  let data = {
    data:{features: ["General","Specialist","Physiotherapy"]}
  }
  res.json(data);
});

router.post('/plans',async function(req,res){
  const result = await plansRepo.create(req.body)
  console.log(result)
  res.json({data:{plan:result}});
})
router.get('/plans', async function(req, res, next) {
  const result = await plansRepo.findAll()
  console.log(result)
  result.map((r)=>{
    r.features = JSON.parse(r.features)
    return r
  })
  
  res.json({data:{plans:result}});
});

module.exports = router;

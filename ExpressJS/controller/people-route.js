const express=require('express');
const router=express.Router();
const{getPeople,createPerson,updatePerson}=require('./people-controller')

router.get('/peopleList',getPeople);

router.post('/addPerson',createPerson);

router.route('/:id').put(updatePerson);

//ROUTER CHAINING- used when multiple request have same URL but different request type
router.route('/displayOrAddNew').get(getPeople).post(createPerson);


module.exports = router
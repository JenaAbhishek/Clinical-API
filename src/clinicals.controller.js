import dao from './clinicals.dao';
import mongodb from 'mongodb';

exports.getAll=(req,res)=>{
    dao.get({patient:mongodb.ObjectId(req.params.patientId)},(err,clinicalData)=>{
        res.send(clinicalData);
    })
}

exports.create=(req,res)=>{
    var clinicals=req.body;
    dao.create(clinicals,(err,clinicals)=>{
        res.send(clinicals);
    })
}
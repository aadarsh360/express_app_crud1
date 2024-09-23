const db = require('../config/db');

// Read all data from table

exports.getAllUsers = (req, res)=>{

    const query = 'Select * from user_table2';
    db.execute(query, (err, results)=>{
        if(err) return res.status(500).json({error:err});
        res.json(results);
    })
}
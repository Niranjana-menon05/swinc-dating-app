const userModel = require("../models/User");


const addUser = async (req,res) => {
    
    const body = {
        user_id: req.body.user_id,
        user_name: req.body.user_name,
        user_email: req.body.user_email,
        user_age: req.body.user_age,
        user_gender: req.body.user_gender,
        user_password: req.body.user_password
    };

    try{
        await userModel.insertOne(body);
        res.status(201).send({message: "success!" })
    }
    catch (err){
        console.log("Error inserting data:", err);
        res.status(400).send({message: "Insertion failed!" })
    }
    
};

const getUser = async (req, res) => {
    try{
        const result = await userModel.find();
        res.status(200).send(result);

    }
    catch(err) {
        console.log("Error :", err);
        res.status(400).send({message: "Failed to get list", error: err });
    }
};

const deleteUser = async (req, res) => {
    const id =req.params.id;
    try{
        await userModel.findOneAndDelete({ 
            user_id: id 
        })
        res.status(200).send({message: "Deletion successful!" });
    }
    catch(err) {
        console.log("Error :", err);
        res.status(400).send({message: "Deletion failed", error: err });
    }

};

module.exports = { addUser, getUser, deleteUser }; 
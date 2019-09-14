// importing the models
const resultsModel = require('../models/result.model');

module.exports = {
// saving each record in database
    submit: async (req, res) => {
        try{
            await new resultsModel(req.body).save();
            return res.send({ status: true, response: { saved: true } });
        } catch(err) {
            return res.status(500).send({ status: false, error: 'General Error' });
        }
    },

    // fetching the all data records
    history: async (req, res) => {
        try{
            const result = await resultsModel.find().lean().exec();
            if(!result || !result.length) {
                return res.status(404).send({ status:false, error: 'No history found' });
            }
            return res.send({ status: true, response: result });
        } catch(err) {
            return res.status(500).send({ status: false, error: 'General Error' });
        }
    }

};
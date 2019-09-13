const questionsModel = require('../models/questions.model');

module.exports = {

    getQuestions: async (req, res) => {
        try{
            const pageNo = parseInt(req.query['page']);
            if(!pageNo) {
                return res.status(400).send({ status:false, error: 'Please provide page number' });
            }
            const result = await questionsModel.findOne({ Page: pageNo }).lean().exec();
            if(!result) {
                return res.status(404).send({ status: false, error: 'Page not Found' });
            }
            return res.send({ status:true, response: result });
        } catch(err) {
            return res.status(500).send({ status: false, error: 'General Error' });
        }
    }

};
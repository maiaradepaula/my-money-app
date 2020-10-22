const restful = require ('node-restful')
const { mongoose } = restful.mongoose

const creditoSchema =   new mongoose.Schema({
    name: { type: String, require: true},
    value: { type: Number, require: true}
})

const debtSchema = new mongoose.Schema({
    name: { type: String, require: true},
    value: { type: Number, require: true},
    status: { type: String, require: false, uppercase: true,
        enum: ['PAGO', 'PENDENTE', 'AGENDADO']}
})

const billingCycleSchema = new mongoose.Schema ({
    name: { type: String, require: true},
    month: {type: Number, min:1, max:12, require:true},
    year: { type: Number, min: 1970, max: 2100, require: true},
    credits: [creditoSchema],
    debts: [debtSchema]
})

module.exports = restful.model('BillingCycle', billingCycleSchema)
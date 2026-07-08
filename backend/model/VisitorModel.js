const { model } = require("mongoose");

const { VisitorSchema } = require("../schemas/VisitorSchema");

const VisitorModel = new model("Visitor", VisitorSchema);

module.exports = { VisitorModel };

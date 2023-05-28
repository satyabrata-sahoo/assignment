const customerModel = require("../schema/customerSchema");

module.exports = {
    add_customer: async (data) => {
        return new Promise(async (resolve, reject) => {
            await customerModel(data)
                .save()
                .then((result) => {
                    resolve(result);
                }).catch((error) => {
                    reject(error);
                });

        })
    },
    get_customer_by_email: async (email) => {
        return new Promise(async (resolve, reject) => {
            await customerModel
                .findOne({ email: email, status: "Active" })
                .then((result) => {
                    resolve(result);
                }).catch((error) => {
                    reject(error);
                });

        })
    },
    edit_customer: async (id, obj) => {
        return new Promise(async (resolve, reject) => {
            await customerModel
                .findOneAndUpdate(
                    { _id: id },
                    { name: obj.name, mobile: obj.mobile },
                    { returnDocument: "after" }
                )
                .then((result) => {
                    resolve(result);
                }).catch((error) => {
                    reject(error);
                });

        })
    },
    delete_customer:async (id) => {
        return new Promise(async (resolve, reject) => {
            await customerModel
                .findByIdAndDelete(id)
                .then((result) => {
                    resolve(result);
                }).catch((error) => {
                    reject(error);
                });

        })
    },

};
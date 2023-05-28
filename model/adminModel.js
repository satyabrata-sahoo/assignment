const adminModel = require("../schema/adminSchema");
const customerModel = require("../schema/customerSchema")
module.exports = {
    add_admin: async (data) => {
        return new Promise(async (resolve, reject) => {
            await adminModel(data)
                .save()
                .then((result) => {
                    resolve(result);
                }).catch((error) => {
                    reject(error);
                });

        })
    },
    get_admin_by_email: async (email) => {
        return new Promise(async (resolve, reject) => {
            await adminModel
                .findOne({email:email,status:"Active"})
                .then((result) => {
                    resolve(result);
                }).catch((error) => {
                    reject(error);
                });

        })
    },
    get_admin_by_id: async (id) => {
        return new Promise(async (resolve, reject) => {
            await adminModel
                .findById(id)
                .then((result) => {
                    resolve(result);
                }).catch((error) => {
                    reject(error);
                });

        })
    },
    get_all_customer:async () => {
        return new Promise(async (resolve, reject) => {
            await customerModel
                .find({status:"Active"})
                .select('-password -token')
                .then((result) => {
                    resolve(result);
                }).catch((error) => {
                    reject(error);
                });

        })
    },
};
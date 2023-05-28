const categorySchema = require("../schema/categorySchema");

module.exports = {
  add_category: async (data) => {
    return new Promise(async (resolve, reject) => {
      await new categorySchema(data)
        .save()
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};

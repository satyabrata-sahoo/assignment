const subcategorySchema = require("../schema/subcategorySchema");

module.exports = {
  add_subcategory: async (data) => {
    return new Promise(async (resolve, reject) => {
      await new subcategorySchema(data)
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

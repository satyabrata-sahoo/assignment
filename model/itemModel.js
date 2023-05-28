const itemSchema = require("../schema/itemSchema");

module.exports = {
    add_item: async (data) => {
        return new Promise(async (resolve, reject) => {
            await itemSchema(data)
                .save()
                .then((result) => {
                    resolve(result);
                }).catch((error) => {
                    reject(error);
                });

        })
    },

    search_item: async (req) => {

        return new Promise(async (resolve, reject) => {
            let obj;
            if (req.category) {
                obj = {
                    category: { $regex: new RegExp(req.category, 'i') }
                }
            }
            if (req.price) {
                obj = {
                    price: { $eq: Number(req.price) }
                }
            }
            if (req.itemname) {
                obj = {
                    itemname: { $regex: new RegExp(req.itemname, 'i') }
                }
            }
            if (req.brandname) {
                obj = {
                    brandname: { $regex: new RegExp(req.brandname, 'i') }
                }
            }

            await itemSchema.aggregate([
                {
                    $match: {
                        status: "Active",
                    },
                },
                {
                    $lookup: {
                        from: "categories",
                        let: {
                            categoryid: "$categoryid",
                        },
                        pipeline: [
                            {
                                $match: {
                                    $expr: {
                                        $and: [
                                            {
                                                $eq: ["$_id", "$$categoryid"],
                                            },
                                            {
                                                $eq: ["$status", "Active"],
                                            },
                                        ],
                                    },
                                },
                            },
                            {
                                $project: {
                                    categoryname: 1,
                                },
                            },
                        ],
                        as: "category",
                    },
                },
                {
                    $unwind: {
                        path: "$category",
                    },
                },
                {
                    $lookup: {
                        from: "subcategories",
                        let: {
                            subcategoryid: "$subcategoryid",
                        },
                        pipeline: [
                            {
                                $match: {
                                    $expr: {
                                        $and: [
                                            {
                                                $eq: [
                                                    "$_id",
                                                    "$$subcategoryid",
                                                ],
                                            },
                                            {
                                                $eq: ["$status", "Active"],
                                            },
                                        ],
                                    },
                                },
                            },
                            {
                                $project: {
                                    subcategoryname: 1,
                                },
                            },
                        ],
                        as: "subcategory",
                    },
                },
                {
                    $unwind: {
                        path: "$subcategory",
                    },
                },
                {
                    $addFields: {
                        category: "$subcategory.subcategoryname",
                        subcategory: "$category.categoryname",
                    },
                },
                {
                    $match: obj,
                },
                {
                    $project: {
                      categoryid: 0,
                      subcategoryid: 0,
                    },
                  },
            ]).then((result) => {
                    resolve(result);
                }).catch((error) => {
                    reject(error);
                });

        })
    },
}
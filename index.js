const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const Registration = require('./model/registration')
const DB = process.env.DB;
console.log("db url is", DB);

//connect to DB
mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB connection successful!"));


const main = async () => {
    let duration = "";
    let description = "";
    let price = 0;

    const data_car = await Registration.aggregate([

        {
            $match: {
                date: {
                    $gte: new Date(Date.now().getDate() - 1),
                    $lte: new Date()
                }
            }
        },

        {
            $match: {
                description: description
            }
        },
        {
            $group: {
                description: {
                    dayOfWeek: { $dayOfWeek: '$date' },
                },
                // week: { $week: '$createdAt' },
                total: { $sum: '$price' },

                numberOdfVehicles: { $sum: 1 }
            }
        },
    ])

    const data_all_cars = await Registration.aggregate([

        {
            $match: {
                date: {
                    $gte: new Date(Date.now().getDate() - 1),
                    $lte: new Date()
                }
            }
        },
        {
            $group: {
                description: {
                    dayOfWeek: { $dayOfWeek: '$date' },
                },
                // week: { $week: '$createdAt' },
                total: { $sum: '$price' },

                numberOdfVehicles: { $sum: 1 }
            }
        },
    ])

    return data_all_cars;

}


main()
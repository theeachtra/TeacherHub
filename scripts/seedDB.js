
const mongoose = require('mongoose');
const db = require('../models');


mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/reactmessages'
);


const messageSeed = [
    {
        firstName: 'Tom',
        lastName: 'Wilkinson',
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam rerum, porro atque minima soluta quas dicta ea debitis perspiciatis cum fugit dolorum adipisci vitae dignissimos tempora obcaecati, natus consequatur magni!',
        dateCreated: new Date(Date.now())
    },
    {
        firstName: 'Crispin',
        lastName: 'Glover',
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam rerum, porro atque minima soluta quas dicta ea debitis perspiciatis cum fugit dolorum adipisci vitae dignissimos tempora obcaecati, natus consequatur magni!',
        dateCreated: new Date(Date.now())
    },
    {
        firstName: 'Sandra',
        lastName: 'Bullock',
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam rerum, porro atque minima soluta quas dicta ea debitis perspiciatis cum fugit dolorum adipisci vitae dignissimos tempora obcaecati, natus consequatur magni!',
        dateCreated: new Date(Date.now())
    },
    {
        firstName: 'Charlie',
        lastName: 'Sheen',
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam rerum, porro atque minima soluta quas dicta ea debitis perspiciatis cum fugit dolorum adipisci vitae dignissimos tempora obcaecati, natus consequatur magni!',
        dateCreated: new Date(Date.now())
    },
    {
        firstName: 'Susan',
        lastName: 'Sarandon',
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam rerum, porro atque minima soluta quas dicta ea debitis perspiciatis cum fugit dolorum adipisci vitae dignissimos tempora obcaecati, natus consequatur magni!',
        dateCreated: new Date(Date.now())
    },
    {
        firstName: 'Rachel',
        lastName: 'Weisz',
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam rerum, porro atque minima soluta quas dicta ea debitis perspiciatis cum fugit dolorum adipisci vitae dignissimos tempora obcaecati, natus consequatur magni!',
        dateCreated: new Date(Date.now())
    }
];



db.Message
    .remove({})
    .then(() => db.Message.collection.insertMany(messageSeed))
    .then(data => {
        console.log(data.results + 'insert success!');
        process.exit(0);
    })
    .catch(err => {
        console.log(err);
        process.exit(1)
    });


    
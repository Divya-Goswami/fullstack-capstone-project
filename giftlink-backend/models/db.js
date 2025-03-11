// db.js
require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

// MongoDB connection URL with authentication options
let url = `${process.env.MONGO_URL}`;

let dbInstance = null;
const dbName = "giftdb";

async function connectToDatabase() {
    if (dbInstance){
        return dbInstance
    };

    const client = new MongoClient(url);      

    // Task 1: Connect to MongoDB
    await client.connect()

    // Task 2: Connect to database giftDB and store in variable dbInstance
    dbInstance = client.db(dbName);

    router.post('/register', async (req, res) => {
        try {
            // Task 1: Connect to `giftsdb` in MongoDB through `connectToDatabase` in `db.js`
            const db = await connectToDatabase();
    
            // Task 2: Access MongoDB collection
            const collection = db.collection("users");
    
            //Task 3: Check for existing email
            const existingEmail = await collection.findOne({ email: req.body.email });
    
            const salt = await bcryptjs.genSalt(10);
            const hash = await bcryptjs.hash(req.body.password, salt);
            const email = req.body.email;
    
            const newUser = await collection.insertOne({
                email: req.body.email,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                password: hash,
                createdAt: new Date(),
            });
            const payload = {
                user: {
                    id: newUser.insertedId,
                },
            };
    
            const authtoken = jwt.sign(payload, JWT_SECRET);
            logger.info('User registered successfully');
            res.json({authtoken,email});
        } catch (e) {
             return res.status(500).send('Internal server error');
        }
    });

    // Task 3: Return database instance
    return dbInstance;
}

module.exports = connectToDatabase;

const express=require('express');
const mongoose=require('mongoose');
require('dotenv').config();
const cron=require('node-cron');
const morgan=require('morgan');
const routes=require('./src/routes/index');
const cors=require('cors');
const {cronService}=require('./src/services/cron.service');
const app=express();

const PORT=process.env.PORT || 3000;

app.use(express.json());
app.use(morgan('dev'));
app.use ('/',(req,res)=>{
    res.status(200).send('<h2 align="center">Welcome to the Birthday reminder bot</h2>');
});
app.use('/api',routes,(req,res)=>{
    res.status(200).send('<h2 align="center">Welcome to the Add</h2>');
} );

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));



mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
},
(err)=>{
    if (err){
        console.log(err);
    } else {
        console.log('Connected to the database');
    }
});

cron.schedule('*/2 * * * *',()=>{
console.log('Running a task every two minutes');
});

cron.schedule('0 21 * * *',async()=>{
console.log('Running a task at 21:00');
await cronService();
},{
    scheduled:true,
    timezone:'Asia/Kolkata'
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});

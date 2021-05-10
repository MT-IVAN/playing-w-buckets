require('dotenv').config();
const { FileSystemCredentials } = require('aws-sdk');
const AWS = require('aws-sdk');

AWS.config.update({region: 'us-east-2'});

s3 = new AWS.S3();

s3.listBuckets((err, data)=>{
    if(err) console.log("Error", err);
    else console.log("Success", data);
});

let bucketParams = {
    Bucket: 'buck-lic'
};

let obj = {hola:"mundo"};

let base64data = Buffer.from(JSON.stringify(obj));

let objectToUpload = {
    Body: base64data,
    Key: 'tercero.json',
    Bucket: 'buck-lic'
};



s3.upload(objectToUpload, (err,data)=>{
    if(err) console.log("Error", err);
    else console.log("Success", data.Location);
});



s3.listObjects(bucketParams, (err,data)=>{
    if(err) console.log("Error", err);
    else console.log("Success", data);
});
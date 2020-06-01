var PROTO_PATH = __dirname + '/../../protos/classifier.proto';
var grpc = require('grpc');
var protoLoader = require('@grpc/proto-loader');

var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    });
var classifier = grpc.loadPackageDefinition(packageDefinition).classifier;

var client = new classifier.AksaraJawaClassifier('localhost:50051',
                                       grpc.credentials.createInsecure());

function sendData(data) {
    client.Classify(data, function(err, feature) {
        if(err) {
            console.log("ERROR", err)
        } else {
            console.log(feature)
        }
    })
}

export default sendData;
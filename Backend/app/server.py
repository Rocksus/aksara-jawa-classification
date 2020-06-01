import logging
import grpc
from concurrent import futures

import classifier_pb2
import classifier_pb2_grpc

class Handler(classifier_pb2_grpc.AksaraJawaClassifierServicer):
    def Classify(self, request, context):
        response = classifier_pb2.Prediction()
        response.classID = 2
        response.name = "Test"
        response.confidence = 0.93
        return response


def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    classifier_pb2_grpc.add_AksaraJawaClassifierServicer_to_server(
        Handler(), server)
    server.add_insecure_port('[::]:50051')
    print("Starting GRPC server...")
    server.start()
    print("GRPC server started at 50051")
    server.wait_for_termination()
# Basic Logging
import logging

# Server
from http.server import BaseHTTPRequestHandler, HTTPServer

# Data parser
import base64
from PIL import Image
import numpy as np
from io import BytesIO
import classifier

classNames = ['ba', 'ca', 'da', 'dha', 'ga', 'ha', 'ja', 'ka', 'la', 'ma', 'na', 'nga', 'nya', 'pa', 'ra', 'sa', 'ta', 'tha', 'wa', 'ya']
class Handler(BaseHTTPRequestHandler):
    def _sendSuccess(self):
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()

    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        dcd_body = post_data.decode('utf-8')
                
        data_url = dcd_body.split()[4]

        _, encoded = data_url.split(",", 1)
        img_bytes = base64.b64decode(encoded)
        img = Image.open(BytesIO(img_bytes))
        img = img.resize((112,112))
        img  = np.array(img)
        gs = np.array(img[:,:,0])
        gs = gs.reshape([-1, 112, 112, 1])
        
        result = classifier.classify(gs)

        resp = BytesIO()
        resp.write(b'{"classID":%d, "name":"%b", "confidence":%f}' % (result['classID'], classNames[result['classID']].encode('utf-8'), result['confidence']))
        self._sendSuccess()
        self.wfile.write(resp.getvalue())


def serve(port):
    server_address = ('', port)
    httpd = HTTPServer(server_address, Handler)
    logging.info('Starting Server at port {}\n'.format(port))
    
    httpd.serve_forever()
    # httpd.server_close()
    # logging.info('Stopping Server...\n')
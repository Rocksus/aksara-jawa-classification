import server
import logging
import classifier

def main():
    port = 14022
    logging.basicConfig(level=logging.INFO)
    classifier.init()
    server.serve(port)

if __name__ == "__main__":
    main()
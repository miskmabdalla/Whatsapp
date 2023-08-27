from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/webhook', methods=['POST'])
def webhook():
    print("Received webhook data:", request.json)
    return jsonify(status="OK"), 200

if __name__ == '__main__':
    app.run(port=3000)
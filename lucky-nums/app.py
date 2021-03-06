from flask import Flask, render_template, request
import random
import requests

app = Flask(__name__)


@app.route("/")
def homepage():
    """Show homepage."""

    return render_template("index.html")

@app.route('/api/get-lucky-num', methods=['GET', 'POST'])
def get_lucky_num():
    print(request.json['name'])
    print(request.json['email'])
    print(request.json['year'])
    print(request.json['color'])
    required_keys = ['name', 'email', 'year', 'color']
    err_msg = {}

    def check_keys(keys_lst):
        for k in keys_lst:
            if (k not in request.json):
                err_msg[k] = ["This field is required."]
        if ('year' in request.json):
            if not (request.json['year'] >= 1900 and request.json['year'] <= 2000):
                err_msg['year'] = ['Invalid value, must be between 1900 and 2000, inclusive']
        if ('color' in request.json):
            if not (request.json['color'] in ['red', 'green', 'orange', 'blue']):
                err_msg['color'] = ['Invalid value, must be one of red, green, orange, blue']
        if err_msg == {}:
            return True
        else:
            return False

    if (check_keys(required_keys)):
        response = {}
        
       # Random Number between 1 and 100 inclusive
        rand_num = random.randint(1, 100)
        # Fact for that random number
        resp = requests.get(f'http://numbersapi.com/{rand_num}/math?json', headers={'Content-Type': "application/json"})
        response['num'] = {"num": rand_num, "fact": f"{resp.json()['text']}"}
        # Fact for the year
        resp = requests.get(f"http://numbersapi.com/{request.json['year']}/year?json")
        response['year'] = {"year": request.json['year'], "fact": resp.json()['text']}
        
        return response
    return {"errors": err_msg}
   
        
    
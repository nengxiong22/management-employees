from flask import Flask, render_template
import requests

app = Flask(__name__)

@app.route('/')
def index():
    # url = 'http://localhost:8000/employees'
    url = 'https://1fe58e05-ec02-49f7-81e1-9f1188c25147-00-384m8amukmvtf.pike.replit.dev/employees'
    try:
        response = requests.get(url)
        response.raise_for_status()
        employees = response.json()
        return render_template('index.html', employees=employees)
    
    except requests.exceptions.HTTPError as http_err:
        return render_template('index.html', employees=[], error=str(http_err))
    
    except Exception as err:
        return render_template('index.html', employees=[], error=str(err))

if __name__ == '__main__':
    app.run(debug=True)
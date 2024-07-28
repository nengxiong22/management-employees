from flask import Flask, render_template
import requests

app = Flask(__name__)

@app.route('/')
def index():
    url = 'http://localhost:8000/employees'
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
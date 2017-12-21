from flask import *
from flask_cors import CORS
from flask_vue import Vue

from scrapper  import call_search

import pickle 
import pandas as pd

class CustomFlask(Flask):
  jinja_options = Flask.jinja_options.copy()
  jinja_options.update(dict(
  block_start_string='$$',
  block_end_string='$$',
  variable_start_string='$',
  variable_end_string='$',
  comment_start_string='$#',
  comment_end_string='#$',

))

app = Flask(__name__, template_folder=".")

#app = CustomFlask(__name__)
#
CORS(app)
Vue(app)

df= pickle.load(file=open( "travel_search_results.pkl",mode='rb'))

#take a sample of the date ( 50 )
#data=data[:50]


@app.route('/')
def api_root():

    return render_template("index.html", title = 'Projects') 



@app.route('/search')
def search( method=['GET']):
    token = request.args.get('token')
    if len(token) < 1 :
        m =  {"Message" : "Error: Please check the token and try again"}
        return jsonify(m)

    search_term = request.args.get('search_term')
    countries=['US','UK']
    #data = call_search(search_term,countries,token)
    d =  df.to_json()
    return jsonify(d)


@app.route('/sample')
def api_dataframe():

    d = df.to_json() 
    return jsonify(d)


if __name__ == '__main__':
    app.run()
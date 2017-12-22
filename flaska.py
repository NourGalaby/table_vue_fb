from flask import *
from flask_cors import CORS
from flask_vue import Vue

import pickle 
import pandas as pd
#from scrapper  import call_search
app = Flask(__name__)
#Load data from filefffffffffffrfffffffffffffffffffffffff4gfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgggggfgfffggggggggggggfggggfgfgggfgggggggggggfggfggggfggggggggggfggggg
CORS(app)
Vue(app)

data= pickle.load(file=open( "temp_scrapped.pkl",mode='rb'))

#take a sample of the date ( 50 )
data=data[:50]


@app.route('/')
def api_root():
#    return "aa"
    return render_template("index.html", title = 'Projects') 

@app.route('/articles')
def api_articles():
    return 'List of ' + url_for('api_articles')     

#@app.route('/search/<search_term>')
#def search(search_term):
#    print ('You are reading ' + search_term)
#	
#    return "asda"


@app.route('/search')
def search( method=['GET']):
    token = request.args.get('token')
    search_term = request.args.get('search_term')
    countries=['US','UK']
   # df = call_search(search_term,countries)
    d=data
    d=  data.to_json()
    return jsonify(d)


@app.route('/sample')
def api_dataframe():
    # data= get_df()
    d=  data.to_json()
    return jsonify(d)


if __name__ == '__main__':
    app.run()
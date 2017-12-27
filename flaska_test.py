import time
import pickle 
from flask import  Flask , request , jsonify
from flask_cors import CORS
from flask_vue import Vue

import pandas as pd
TESTING = True

if not TESTING:
    from scrapper  import call_search

app = Flask(__name__)
#Load data from 
CORS(app)
Vue(app)

if TESTING:
    #data= pickle.load(file=open( "travel_search_results.pkl",mode='rb'))
    #data= pickle.load(file=open( "temp_scrapped.pkl"))
    #take a sample of the date ( 50 )
 #   data=data[:100]
    pass


@app.route('/')
def api_root():
#    return "aa"
    return render_template("index.html", title = 'Projects') 


@app.route('/search')
def search( method=['GET']):
    token = request.args.get('token')
    search_term = request.args.get('search_term')
    countries=['US'] #this needs to be updates based on selection from front end
    if TESTING:
        #d=data #mocking search
        time.sleep(0.2)
        print("20%")
        # time.sleep(0.2)
        print("30%")
        #time.sleep(0.2)
        print("60%")
        time.sleep(0.2)
        print("90%")
        time.sleep(0.2)
        print("Done")
        data= pickle.load(file=open( "temp_scrapped.pkl"))
    else:
        data = call_search(search_term,countries,token) #
    d =  data.to_json()
    return jsonify(d)


@app.route('/sample')
def api_dataframe():
    # data= get_df()
    d=  data.to_json()
    return jsonify(d)


if __name__ == '__main__':
    app.run()
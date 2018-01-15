import time
import pickle 
from flask import  Flask , request , jsonify
from flask_cors import CORS
from flask_vue import Vue
import json 

import pandas as pd
TESTING = True

if not TESTING:
    from scrapper  import call_search

app = Flask(__name__)
#Load data from 
CORS(app)
Vue(app)



@app.route('/')
def api_root():
#    return "aa"
    return render_template("index.html", title = 'Projects') 


@app.route('/search' , methods=['POST'])
def search( ):
    if request.method == 'POST':
		print ("POST HERE")
		data= json.loads(request.data)
		print 
		print data['countries']
		print data['search_term']
		#print request.data
		try:
			token = data['token']
			print "token = " + token
		except KeyError:
			pass
		search_term = data['search_term']
		countries= data['countries']		#this needs to be updates based on selection from front end
		print countries
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
			data= pickle.load(file=open( "dahab_search_results.pkl"))
		else:
			data = call_search(search_term,countries,token) #
		d =  data.to_json()
		return jsonify(d)
	#return "ERROR"



if __name__ == '__main__':
    app.run()
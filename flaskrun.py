#flaskrun.py 
# -*- coding: utf-8 -*- 
from flask import Flask 
from flask import request 
from flask import Response 
from flask import render_template
import json 
import zxby  
app = Flask(__name__) 
   
def Response_headers(content): 
  resp = Response(content) 
  resp.headers['Access-Control-Allow-Origin'] = '*'
  return resp 
  
@app.route('/run', methods=['POST']) 
def run(): 
  if request.method == 'POST' and request.form['code']: 
    code = request.form['code'] 
    print(code) 
    jsondata = zxby.main(code) 
    return Response_headers(str(jsondata)) 
	
@app.route('/')
def post_html():
    return render_template('index.html')

@app.route('/helloWorld') 
def f_hello_world():
    return render_template('helloWorld.html') 

@app.route('/variablesAndTypes') 
def f_variables_and_types():
    return render_template('variablesAndTypes.html') 

@app.route('/lists') 
def f_lists():
    return render_template('lists.html') 
  
@app.errorhandler(403) 
def page_not_found(error): 
  content = json.dumps({"error_code": "403"}) 
  resp = Response_headers(content) 
  return resp 
  
@app.errorhandler(404) 
def page_not_found(error): 
  content = json.dumps({"error_code": "404"}) 
  resp = Response_headers(content) 
  return resp 
  
@app.errorhandler(400) 
def page_not_found(error): 
  content = json.dumps({"error_code": "400"}) 
  resp = Response_headers(content) 
  return resp 
  
@app.errorhandler(405) 
def page_not_found(error): 
  content = json.dumps({"error_code": "405"}) 
  resp = Response_headers(content) 
  return resp 
  
@app.errorhandler(410) 
def page_not_found(error): 
  content = json.dumps({"error_code": "410"}) 
  resp = Response_headers(content) 
  return resp 
  
@app.errorhandler(500) 
def page_not_found(error): 
  content = json.dumps({"error_code": "500"}) 
  resp = Response_headers(content) 
  return resp 
  
if __name__ == '__main__': 
  app.run(debug=True)
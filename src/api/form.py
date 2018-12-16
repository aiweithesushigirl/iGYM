"""REST API for search."""
import sqlite3
import requests
import flask
import src


@src.app.route('/api/', methods=["POST"])
def form_query():

    name = flask.request.get_json()['name']
    email = flask.request.get_json()['email']
    print("w and query", name, email)
    context = {}
    results_lst = []

    return flask.jsonify(**context)

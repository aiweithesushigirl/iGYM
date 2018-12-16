"""Search index view."""
import flask
import src


@src.app.route('/', methods=['GET', 'POST'])
def show_index():
    """Display / route."""
    context = {}
    return flask.render_template("index.html", **context)

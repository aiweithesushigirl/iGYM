"""search package initializer."""
import os
import flask


# app is a single object used by all the code modules in this package
app = flask.Flask(__name__)  # pylint: disable=invalid-name

app.config.from_object('src.config')

import src.api  # noqa: E402  pylint: disable=wrong-import-position
import src.views  # noqa: E402  pylint: disable=wrong-import-position
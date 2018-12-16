"""
iGYM server python package configuration.

"""

from setuptools import setup

setup(
    name='src',
    version='0.1.0',
    packages=['src'],
    include_package_data=True,
    install_requires=[
        'flask==0.12.2',
        'arrow==0.10.0',
        'html5validator==0.2.8',
        'Flask-Testing==0.6.2',
        'selenium==3.6.0',
        'requests==2.18.4',
        'sh==1.12.14',
    ],
)

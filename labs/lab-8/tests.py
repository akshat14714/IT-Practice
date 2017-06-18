import unittest
from helloworld import app

test_client = app.test_client()

class HelloWorldTests(unittest.TestCase):
    def test_hello(self):
        rv = test_client.get("/")
        self.assertEquals(rv.data.decode("utf-8"), "Hello World!!")
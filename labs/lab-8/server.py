from flask import Flask, render_template
app = Flask(__name__)

@app.route('/hello/<user>')
def helloname(user):
    return render_template('layout.html', name=user)

if __name__=='__main__':
    app.run(debug=True)
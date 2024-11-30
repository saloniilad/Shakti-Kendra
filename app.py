from flask import Flask, request, jsonify, redirect, url_for, render_template, send_from_directory
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
import os

# Initialize Flask app and configure database
app = Flask(__name__, template_folder='templates', static_folder='static')
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# User model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)

# Route to serve photos
@app.route('/photos/<path:filename>')
def serve_photos(filename):
    return send_from_directory('photos', filename)

# Route to register a new user
@app.route('/register', methods=['POST'])
def register():
    first_name = request.form.get('first_name')
    last_name = request.form.get('last_name')
    email = request.form.get('email')
    password = request.form.get('password')

    if not first_name or not last_name or not email or not password:
        return redirect(url_for('register_page', error='All fields are required!'))

    hashed_password = generate_password_hash(password, method='pbkdf2:sha256')
    new_user = User(first_name=first_name, last_name=last_name, email=email, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()

    return redirect(url_for('age'))

# Route for the registration page
@app.route('/register')
def register_page():
    return render_template('createAcc.html')

# Route to fetch all users
@app.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    output = []
    for user in users:
        user_data = {'id': user.id, 'first_name': user.first_name, 'last_name': user.last_name, 'email': user.email}
        output.append(user_data)
    return jsonify({'users': output})

# Route for user login
@app.route('/login', methods=['POST'])
def login():
    email = request.form.get('email')
    password = request.form.get('password')

    user = User.query.filter_by(email=email).first()
    if user and check_password_hash(user.password, password):
        return redirect(url_for('age'))
    else:
        return redirect(url_for('login_page', error='Invalid email or password'))

# Route for the login page
@app.route('/login')
def login_page():
    return render_template('login.html')

# Route for the welcome page
@app.route('/index')
def welcome_page():
    return render_template('index.html')

# Route to render the age selection page
@app.route('/age')
def age():
    return render_template('age.html')

# Routes to render the age-specific pages
@app.route('/11')
def teenage_page():
    return render_template('11.html')

@app.route('/22')
def adult_page():
    return render_template('22.html')

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True, port=5000)

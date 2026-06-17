# 1. Standard library
import os

# 2. Third-party libraries
from dotenv import load_dotenv
from flask import Flask, render_template, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

# 3. Load environment variables before anything reads from os.environ
load_dotenv()


# 4. Read config values for SendGrid API
SENDGRID_API_KEY = os.environ.get('SENDGRID_API_KEY')

# 5. App initialization
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://bls@localhost/AnimeWorld-Spring2026'
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})
db = SQLAlchemy(app)


class Product (db.Model):
    __tablename__ = 'Products'

    id = db.Column(db.Integer(), primary_key=True)
    name = db.Column(db.String(200))
    description = db.Column(db.String(2000))
    price = db.Column(db.Float())
    stockAvailable = db.Column(db.Integer())

class Order (db.Model):
    __tablename__ = 'Order'

    id = db.Column(db.Integer(), primary_key=True)
    shippingAddress = db.Column(db.String(2000))
    city = db.Column(db.String(200))
    country = db.Column (db.String(200))
    region = db.Column(db.String(200))
    productOrdered = db.Column(db.Integer(), db.ForeignKey('Products.id'))
    totalCost = db.Column(db.Float())

class Notify (db.Model):
    __tablename__ = 'Notify'

    id = db.Column(db.Integer(), primary_key=True)
    email = db.Column(db.String(200))

# http://localhost:5000/health
@app.route('/health')
def health():
    return {'status': 'ok'}

# http://localhost:5000/order
@app.route('/order', methods=['POST'])
def create_order():
    data = request.get_json()
    
    # 1. extract values from data
    product_id = data['productOrdered']
    shipping_address_val = data['shippingAddress']
    city_val = data['city']
    region_val = data['region']
    country_val = data['country']
    
    # 2. look up product price
    product = Product.query.filter_by(id=product_id).first()
    
    # 3. calculate shipping based on region
    if region_val == 'NA' : shipping_cost = 7
    elif region_val == 'AS' : shipping_cost = 10
    elif region_val == 'EU' : shipping_cost = 14
    else: shipping_cost = 0

    # 4. calculate totalCost
    totalCost = product.price + shipping_cost
    
    # 5. create new Order object
    newOrder = Order(shippingAddress=shipping_address_val, 
                     city=city_val, 
                     country=country_val, 
                     region=region_val, 
                     productOrdered=product_id, 
                     totalCost=totalCost)

    # 6. add and commit to database
    db.session.add( newOrder )
    db.session.commit()
    
    # 7. return totalCost as JSON
    return jsonify({
        'totalCost':totalCost,
        'orderId': newOrder.id,
        })

# http://localhost:5000/notify
@app.route('/notify', methods=['POST'])
def notify():
    data = request.get_json()

    # 1. Write to DB, always happens
    new_notify = Notify(email=data['email'])
    db.session.add(new_notify)
    db.session.commit()

    # 2. Send confirmation email via SendGrid, best effort try-catch
    try:
        message = Mail(
            from_email='bo.siu@torontomu.ca',
            to_emails=data['email'],
            subject="You're on the AnimeWorld list! 🎌",
            html_content="<p>Thanks for signing up! We'll notify you when new packages drop.</p>"
        )
        sg = SendGridAPIClient(SENDGRID_API_KEY)
        sg.send(message)
    except Exception as e:
        print(f"SendGrid error: {e}")

    return jsonify({ "message" : "success" })

if __name__ == '__main__':
    app.run(debug=True)
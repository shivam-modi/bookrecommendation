from flask import Flask
from flask_cors import CORS
from .routes.book_routes import book_bp
from .routes.health_routes import health_bp
from .utils.db import init_db

def create_app():
    print('Creating Flask app...')  # Debug print
    app = Flask(__name__)
    app.config.from_object('app.config.Config')

    # Initialize database
    print('Initializing database...')
    init_db(app)
    
    # Configure CORS
    print('Configuring CORS...')
    CORS(app, resources={r"*": {"origins": "*", "methods": ["GET", "POST", "PUT", "DELETE"]}})

    # Register blueprints
    print('Registering blueprints...')
    app.register_blueprint(book_bp, url_prefix='/v1/books')
    app.register_blueprint(health_bp, url_prefix='/v1/health')

    print('Flask app created successfully.')
    return app

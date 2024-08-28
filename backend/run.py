import os
from app import create_app

app = create_app()

if __name__ == "__main__":
    port = int(os.getenv("FLASK_PORT", 2000))
    print(f"Running on port {port}")
    app.run(debug=True, port=port, use_reloader=False)

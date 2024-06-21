from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def homepage():
    return render_template('homepage.html')

@app.route('/categories')
def categories():
    return render_template('categories.html')

@app.route('/article/<int:id>')
def article(id):
    # Fetch article from database using id
    article = get_article_by_id(id)
    return render_template('article.html', article=article)

@app.route('/search')
def search():
    query = request.args.get('q')
    results = search_articles(query)
    return render_template('search.html', results=results)

def get_article_by_id(id):
    # Placeholder function to get article by id
    return {"id": id, "title": "Sample Article", "content": "This is a sample article content"}

def search_articles(query):
    # Placeholder function to search articles
    return [{"id": 1, "title": "Sample Article 1"}, {"id": 2, "title": "Sample Article 2"}]

if __name__ == '__main__':
    app.run(debug=True)

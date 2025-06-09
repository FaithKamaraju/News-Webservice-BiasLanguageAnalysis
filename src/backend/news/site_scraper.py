from html_to_markdown import convert_to_markdown
from newspaper import Article
from newspaper.configuration import Configuration

config = Configuration()
config.keep_article_html = True

def pull_content_from_url(url:str):
    article = Article(url, config=config)
    article.download()
    article.parse()
    markdown = convert_to_markdown(article.article_html)
    return markdown
        
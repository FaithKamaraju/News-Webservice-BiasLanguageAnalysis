from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Float
from datetime import datetime
from sqlalchemy.orm import Mapped,mapped_column
from core.db import Base


class ArticleMetadata(Base):
    """
        'uuid', 'title', 'description', 'url',
       'image_url', 'published_at', 'source', 'categories',
    """
    __tablename__ = 'article_metadata'
    id : Mapped[int] = mapped_column(primary_key=True, autoincrement=True, index=True)
    uuid : Mapped[str] = mapped_column(String, index=True, unique=True)
    title : Mapped[str] = mapped_column(String, index=True)
    description : Mapped[str] = mapped_column(String)
    url : Mapped[str] = mapped_column(String)
    image_url : Mapped[str] = mapped_column(String)
    published_at : Mapped[datetime] = mapped_column(DateTime(timezone=True), index=True)
    source : Mapped[str] = mapped_column(String, index=True)
    categories : Mapped[str] = mapped_column(String)

class ScrappedContent(Base):
    
    __tablename__ = 'scrapped_content'
    
    id : Mapped[int] = mapped_column(primary_key=True, autoincrement=True, index=True)
    uuid : Mapped[str] = mapped_column(String, ForeignKey('article_metadata.uuid'), index=True, unique=True)
    scrapped_content : Mapped[str] = mapped_column(String)
    
class InferenceResults(Base):
    
    __tablename__ = 'inference_results'
    id : Mapped[int] = mapped_column(primary_key=True, autoincrement=True, index=True)
    uuid : Mapped[str] = mapped_column(String, ForeignKey('article_metadata.uuid'), index=True, unique=True)
    bias_analysis : Mapped[str] = mapped_column(String)

class NewsArticleFinal(Base):
    
    __tablename__ = 'news_article'
    
    id : Mapped[int] = mapped_column(primary_key=True, autoincrement=True, index=True)
    uuid : Mapped[str] = mapped_column(String, ForeignKey('article_metadata.uuid'), index=True, unique=True)
    title : Mapped[str] = mapped_column(String, index=True)
    url : Mapped[str] = mapped_column(String)
    image_url : Mapped[str] = mapped_column(String)
    published_at : Mapped[datetime] = mapped_column(DateTime(timezone=True), index=True)
    source : Mapped[str] = mapped_column(String, index=True)
    categories : Mapped[str] = mapped_column(String)
    scrapped_content : Mapped[str] = mapped_column(String, ForeignKey('scrapped_content.scrapped_content'))
    bias_analysis : Mapped[str] = mapped_column(String, ForeignKey('inference_results.bias_analysis'))
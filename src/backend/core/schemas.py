from pydantic import BaseModel, ConfigDict, Field
from datetime import datetime


class ArticleMetaDataSchema(BaseModel):
    """
        'uuid', 'title', 'description', 'url',
       'image_url', 'published_at', 'source', 'categories',
    """

    uuid : str
    title : str
    description : str 
    url : str
    image_url : str
    published_at : datetime
    source : str
    categories : str
    
class InferenceResultsRespSchema(BaseModel):
    """
        'uuid', 'bias_analysis'
    """
    
    uuid : str
    bias_analysis : str
    
    
class NewsArticleRespSchema(BaseModel):
    """
        'uuid', 'title', 'url', 'image_url', 'published_at', 'source',
        'categories', 'scrapped_content', 'bias_analysis'
    """

    uuid : str
    title : str 
    url : str
    image_url : str
    published_at : datetime
    source : str
    categories : str
    scrapped_content : str
    bias_analysis : str

    
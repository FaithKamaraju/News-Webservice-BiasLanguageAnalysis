import os
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.orm import DeclarativeBase, sessionmaker
from get_docker_secret import get_docker_secret


postgres_user = os.getenv("POSTGRES_USER")
postgres_passwd = get_docker_secret("pg_password", default='postgres12345')
postgres_db = os.getenv("POSTGRES_DB")

DATABASE_URL = f"postgresql+asyncpg://{postgres_user}:{postgres_passwd}@db:5432/{postgres_db}"
engine = create_async_engine(DATABASE_URL)
async_session_local = sessionmaker(
    bind=engine,
    class_=AsyncSession,
    expire_on_commit=False,
)


class Base(DeclarativeBase):
    pass

async def get_db():
    async with async_session_local() as session:
        try:
            yield session
        finally:
            await session.close()
    

async def create_all():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
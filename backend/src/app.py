from fastapi import FastAPI, Request, Response
from fastapi.middleware.cors import CORSMiddleware
from .routes import router as challenge_router

app = FastAPI()
app.include_router(challenge_router)

app = FastAPI()
app.add_middleware(
  CORSMiddleware, 
  allow_origins=["*"],
  allow_credentials=True, 
  allow_methods=["*"], 
  allow_headers=["*"]
   )

app.include_router(challenge.router, prefix="/api")
app.include_router(webhooks.router, prefix="/webhooks")
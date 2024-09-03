from fastapi import FastAPI, Form, Request
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import json

app = FastAPI()
origins = [
    "http://localhost",
    "http://localhost:8000",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"Ping": "Pong"}


@app.get("/pipelines/parse")
def parse_pipeline(pipeline: str = Form(...)):
    return {"status": "parsed"}


class Pipeline(BaseModel):
    nodes: list
    edges: list


@app.post("/pipelines/parse")
async def parse_pipeline(pipeline: Pipeline):
    try:
        nodes = pipeline.nodes
        edges = pipeline.edges

        no_of_nodes = len(nodes)
        no_of_edges = len(edges)
        
        def has_cycle(edges):
            adj_list = {}
            for edge in edges:
                source = edge["source"]
                target = edge["target"]
                if source not in adj_list:
                    adj_list[source] = []
                adj_list[source].append(target)

            # Use Depth First Search (DFS) to detect cycles
            visited = []  
            recursion_stack = []  
            def dfs(node):
                visited.append(node)  # Add node to visited list
                recursion_stack.append(node)

                for neighbor in adj_list.get(node, []):
                    if neighbor not in visited:
                        if dfs(neighbor):
                            return True
                    elif neighbor in recursion_stack:
                        return True

                recursion_stack.remove(node)
                return False

            for node in adj_list:
                if node not in visited:
                    if dfs(node):
                        return True
            return False

        # if has_cycle(edges):
        #     print("The pipeline has a cycle")
        # else :
        #     print("The pipeline does not have a cycle")

        return JSONResponse(
            {
                "nodes": no_of_nodes,
                "edges": no_of_edges,
                "has_cycle": has_cycle(edges),
                "status code": 200,
                
            }
        )
    except json.JSONDecodeError:
        return JSONResponse({"error": "Invalid JSON data"}, status_code=400)




 
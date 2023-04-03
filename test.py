import requests


res = requests.get("https://backend-decoder-17.cloud.okteto.net/health").json()
print(res)

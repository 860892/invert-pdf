
## Running locally
```bash
sudo docker image build . -t invert-pdf
sudo docker run -p 8080:8080 --env PORT=8080 invert-pdf:latest
```

from .serializer import Serializer

def update_counter(request):
    if request.method == 'POST':
        print(request.body)

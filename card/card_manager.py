from .serializer import Serializer
from django.http import HttpResponse

def update_counter(request):
    if request.method == 'POST':
        print(request.POST)
    return HttpResponse('')

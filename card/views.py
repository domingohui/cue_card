from django.shortcuts import render
from django.http import JsonResponse
from .serializer import Serializer

def presentCardsFromThisCourse(request, course):
    # Get cue card info]
    if request.method == 'GET':
        return render(request, 'card/present_card.html',
                {'course_name': course})


def index(request):
    data = Serializer().getAvailableCourses()
    return render(request, "card/index.html", {'data': data})


def getCardData (request):
    data = ''
    if request.method == 'GET':
        serializer = Serializer.makeSerializer(Serializer.JSON)
        data = serializer.getAllCards(request.GET['course']);
    return JsonResponse(data);

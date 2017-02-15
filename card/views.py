from django.shortcuts import render
from . import card_manager

def presentCardsFromThisCourse(request, course):
    # Get cue card info]
    if request.method == 'GET':
        return render(request, 'card/present_card.html',
                {'course_name': course})


def index(request):
    data = card_manager.getAvailableCourses()
    return render(request, "card/index.html", {'data': data})



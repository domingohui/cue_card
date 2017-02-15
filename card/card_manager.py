from django.http import HttpResponse, HttpResponseBadRequest, JsonResponse
from .models import Card
from django.core.exceptions import ObjectDoesNotExist

def increment_counter(request):
    if request.method == 'POST':
        cardId = request.POST['id']
        if cardId is not None:
            # update card view counter
            try:
                toUpdate = Card.objects.get(id=cardId)
                toUpdate.view_counter = toUpdate.view_counter + 1
                toUpdate.save()
            except ObjectDoesNotExist:
                return HttpResponseBadRequest('This card does not exist any more! id: ' + cardId)
        else:
            return HttpResponseBadRequest('Card ID not found')
    return HttpResponse()

def getCardData (request):
    data = ''
    if request.method == 'GET':
        # Get cards under course
        data = getAllCards(request.GET['course']);
    return JsonResponse(data);

def getAllCards(course_name = ''):
    # Fetch cards and TODO:cache them
    # Returns a dict
    json_data = {'data': list()}
    if course_name == '':
        allCards = Card.objects.all()
    else:
        allCards = Card.objects.filter(course=course_name)

    for card in allCards:
        card_dict = card.__dict__
        card_dict.pop('_state')
        json_data['data'].append(card_dict)
    return json_data

# Feching data FROM DB
def getAvailableCourses():
    allCards = Card.objects.all()
    courses = set()
    for card in allCards:
        courses.add(card.course)
    return courses

"""
# Create card
Card ( course=card[course],
    topic=card[topic],
    cue_side=card[cue_side],
    other_side=card[other_side],
    view_counter=0,
)
"""

from django.shortcuts import render
from .serializer import Serializer

# Create your views here.


def presentCardsFromThisCourse(request, course):

	# Get cue card info
	if request.method == 'GET':
		serializer = Serializer.makeSerializer(Serializer.JSON)
		return render(request, "card/present_card.html",
					  {'data': serializer.getAllCards(course_name=course)})


def index(request):
	data = Serializer().getAvailableCourses()
	return render(request, "card/index.html", {'data': data})

from .models import Card
from datetime import datetime
import json


class Serializer:

    JSON = 1

    @staticmethod
    def makeSerializer(dataType):
        if dataType == Serializer.JSON:
                # Factory method to create serializer for specific languages
                # Fetch Card instances from db
            return JSONCardSerializer()

    def __init__(self, info):

        if isinstance(info, dict):
            # Crate a new Card instance
            # Possibly insert it into db later
            self.new_card = Card(course=info[course],
                                 topic=info[topic],
                                 cue_side=info[cue_side],
                                 other_side=info[other_side],
                                 view_counter=0,
                                 card_id=datetime.datetime.now().strftime('%y%m%d%H%M%S'))

    def __init__(self):
        self.new_card = None

    def save(self):
        if self.new_card is not None:
            self.new_card.save()

    def getAvailableCourses(self):
        allCards = Card.objects.all()
        courses = set()
        for card in allCards:
            courses.add(card.course)
        return courses

    def getAllCards(self):
        return


class JSONCardSerializer (Serializer):

    def __init__(self):
        self.json_data = list()
        self.savedThisCard = False
        self.currentCard = None

    def getAllCards(self, course_name = ''):
        if course_name == '':
            allCards = Card.objects.all()
        else:
            allCards = Card.objects.filter(course=course_name)
            
        for card in allCards:
            card_dict = card.__dict__
            card_dict.pop('_state')
            self.json_data.append(card_dict)
        return json.dumps(self.json_data)

    def save(self):
        if (not self.savedThisCard) and (self.currentCard is not None):
            self.currentCard.view_counter += 1
            self.currentCard.save()
            self.savedThisCard = True

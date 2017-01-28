from .models import Card
from datetime import datetime
import json


class Serializer:

    JSON = 1

    # Factory method to create serializer for specific languages
    @staticmethod
    def makeSerializer(dataType):
        if dataType == Serializer.JSON:
                # Fetch Card instances from db
            return JSONCardSerializer()

    # Saving data TO DB
    def __init__(self, info):
        # info is an list of dict, each of which represents a Card
        if info.length > 0:
            # Crate a new Card instance
            # Possibly insert it into db later by calling save()
            self.new_cards = []
            for card in info:
                if isinstance ( card, dict ):
                    self.new_cards.append (
                            Card ( course=card[course],
                                topic=card[topic],
                                cue_side=card[cue_side],
                                other_side=card[other_side],
                                view_counter=0,
                                card_id=__generateCardID (card[course]))
                            )
        else:
            self.new_cards = None

        self.__otherInit()

    def __generateCardID (courseID):
        card_id = courseID + "_" + datetime.datetime.now().strftime('%y%m%d%H%M%S')

    def __init__(self):
        self.new_cards = None
        self.__otherInit()

    def __otherInit ( self ):
        self.lastDBTime = None

    def save(self):
        if self.new_cards is not None:
            for to_save_card in self.new_cards:
                to_save_card.save()


    # Feching data FROM DB
    def getAvailableCourses(self):
        allCards = Card.objects.all()
        self.courses = set()
        for card in allCards:
            self.courses.add(card.course)
        return self.courses

    def getAllCards(self, course_name=''):
        return


class JSONCardSerializer (Serializer):

    def __init__(self):
        self.json_data = list()
        self.savedThisCard = False
        self.currentCard = None

    # Saving data TO DB
    def save(self):
        if (not self.savedThisCard) and (self.currentCard is not None):
            self.currentCard.view_counter += 1
            self.currentCard.save()
            self.savedThisCard = True

    # Fetching data FROM DB
    def getAllCards(self, course_name = ''):
        # Fetch cards and TODO:cache them
        # Returns a dict
        if course_name == '':
            self.allCards = Card.objects.all()
        else:
            self.allCards = Card.objects.filter(course=course_name)

        for card in self.allCards:
            card_dict = card.__dict__
            card_dict.pop('_state')
            self.json_data.append(card_dict)
        return card_dict

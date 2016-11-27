from __future__ import unicode_literals
from django.core.validators import RegexValidator
from django.db import models

# Create your models here.


class Card (models.Model):
	# User-proivded fields
    course = models.CharField(max_length=10,
                              default='')
    topic = models.CharField(max_length=100, default='')
    cue_side = models.TextField(default='')
    other_side = models.TextField(default='')
    # Misc fields (not set by users)
    view_counter = models.IntegerField(default=0)
    card_id = models.CharField(max_length=15, default='')

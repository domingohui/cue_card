from django.contrib import admin
from .models import Card

# Register your models here.


class CardAdmin (admin.ModelAdmin):
    fieldsets = [
        (None, {'fields': ['course', 'topic', ]}),
        ('Card information', {'fields': ['cue_side', 'other_side', 'view_counter', ]}),
        ('Misc', {'fields': ['card_id', ]})]

admin.site.register(Card, CardAdmin)

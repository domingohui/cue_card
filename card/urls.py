"""cue_cards URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from . import views
from . import card_manager
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    url(r'^$', views.index),
    url(r'^start/(?P<course>.+)/$', views.presentCardsFromThisCourse, name='present_card'),
    url(r'^get_cards/$', views.getCardData),
    url(r'^update_counter/$', card_manager.update_counter),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
# Code above only works in Debug mode to return scripts GET
# For production, use python manage.py collectstaic to properly manage files

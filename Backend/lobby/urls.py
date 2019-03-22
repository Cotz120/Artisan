from django.conf.urls import include
from django.conf.urls import re_path
from lobby.views import *

urlpatterns=[
    re_path(r'^lobby/$',LobbyView.as_view(), name='lobby'),
    re_path(r'^lobby/(?P<pk>[0-9]+)$', LobbyView.as_view(), name='lobby')
]
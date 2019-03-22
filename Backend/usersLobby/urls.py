from django.conf.urls import include
from django.conf.urls import re_path
from usersLobby.views import *

urlpatterns=[
    re_path(r'^usersLobby/',UsersLobbyView.as_view(), name='UsersLobby'),
    re_path(r'^usersLobby/(?P<pk>[0-9]+)$', UsersLobbyView.as_view(), name='UsersLobby')
]
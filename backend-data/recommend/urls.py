from django.urls import path
from . import views

app_name = 'recommend'

urlpatterns = [
    path('recommlist', views.recommList),
    path('recomm', views.recomm)
]

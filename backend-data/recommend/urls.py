from django.urls import path
from . import views

app_name = 'recommend'

urlpatterns = [
    path('cbf/<aztiType>', views.recommCbfList),
    path('cf/<int:restoId>', views.recommCfList),
    path('mf/<userId>', views.recommMfList),
    path('resto/<userId>/<aztiType>/', views.restoList),
    path('resto/developer', views.developerList),
    path('resto/youtuber', views.youtuberList),
    path('resto/thirty', views.thirtyList),
    path('resto/liked', views.likedList)
]

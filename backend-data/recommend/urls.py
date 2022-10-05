from django.urls import path
from . import views

app_name = 'recommend'

urlpatterns = [
    path('cbf/<aztiType>', views.recommCbfList),
    path('cf/<int:restoId>', views.recommCfList),
    path('mf/<userId>', views.recommMfList)
]

from django.urls import path
from . import views

urlpatterns = [
    path('register/',views.register_view,name='register'),
    path('login/',views.login_view,name='login'),
    path('liked-playlists/',views.LikedPlaylistAV.as_view(), name='liked-playlists'),
    path('like-playlist/<int:pk>/',views.like_playlist, name='like-playlist'),
    path('unlike-playlist/<int:pk>/',views.unlike_playlist, name='unlike-playlist'),
    path('like-song/<int:pk>/',views.like_song, name='like-song'),
    path('unlike-song/<int:pk>/',views.unlike_song, name='unlike-song'),
    path('liked-songs/',views.LikedSongListAV.as_view(), name='liked-songs'),
    path('followed-artists/',views.FollowingArtistListAV.as_view(), name='followed-artists'),
    path('follow-artist/<int:pk>/',views.follow_artist,name='follow-artist'),
    path('unfollow-artist/<int:pk>/',views.unfollow_artist,name='unfollow-artist'),
    path('artists/',views.ArtistListAV.as_view(),name='artists'),
]
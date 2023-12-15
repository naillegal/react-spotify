from django.db import models

# Create your models here.

class Genre(models.Model):
    title = models.CharField(max_length=50)
    updated = models.DateField(auto_now=True)
    created = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.title

class Playlist(models.Model):
    title = models.CharField(max_length=50)
    author = models.ForeignKey('user.Customer',on_delete=models.CASCADE)
    image = models.ImageField(upload_to='playlists/images/')
    featured = models.BooleanField(default=False)
    updated = models.DateField(auto_now=True)
    created = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.title

class Song(models.Model):
    title = models.CharField(max_length=50)
    image = models.ImageField(upload_to='songs/images/')
    audio = models.FileField(upload_to='songs/audios/')
    artists = models.ManyToManyField('user.Artist', related_name='songs')
    duration = models.IntegerField()
    lyrics = models.TextField(null=True, blank=True)
    genres = models.ManyToManyField(Genre, related_name='songs')
    playlist = models.ManyToManyField(Playlist, null=True, blank=True, related_name='songs')
    listen_count = models.BigIntegerField(default=0)
    updated = models.DateField(auto_now=True)
    created = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.title



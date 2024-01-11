from rest_framework import serializers
from user.serializers import CustomerInfoSerializer
from .models import ( Playlist, Song, Genre )


class PlaylistSerializer(serializers.ModelSerializer):
    author = CustomerInfoSerializer()

    class Meta:
        model = Playlist
        fields = '__all__'

class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Song
        fields = ['title']

class SongSerializer(serializers.ModelSerializer):
    genres_detail = GenreSerializer(many=True, source='genres', read_only=True)
    class Meta:
        model = Song
        exclude = ['lyrics']
        extra_kwargs = {
            'genres':{'write_only':True}
        }


class SongDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Song
        fields = '__all__'



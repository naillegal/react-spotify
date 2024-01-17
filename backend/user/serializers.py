from rest_framework import serializers
from django.contrib.auth.models import User
from .models import GENDER_CHOICES, Customer, Artist
from rest_framework.authtoken.models import Token
from song.models import Song, Playlist

class SongSerializerSummary(serializers.ModelSerializer):
    class Meta:
        model = Song
        fields = '__all__'

class PlaylistSerializerSummary(serializers.ModelSerializer):
    class Meta:
        model = Playlist
        fields = '__all__'

class RegisterSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    first_name = serializers.CharField(max_length=50,source='user.first_name')
    last_name = serializers.CharField(max_length=50,source='user.last_name')
    username = serializers.CharField(max_length=30,source='user.username')
    email = serializers.EmailField(source='user.email')
    password = serializers.CharField(max_length=30, write_only=True,source='user.password')
    birth_date = serializers.DateTimeField(input_formats=['%Y.%m.%d'])
    gender = serializers.ChoiceField(choices=GENDER_CHOICES)
    token = serializers.SerializerMethodField(read_only=True)

    def create(self, validated_data):
        user_info = validated_data.pop('user')
        user = User.objects.create_user(**user_info)
        customer = Customer.objects.create(user = user, **validated_data)
        return customer

    def get_token(self, customer):
        token, created = Token.objects.get_or_create(user=customer.user)
        return token.key
    

class CustomerInfoSerializer(serializers.ModelSerializer):
    first_name = serializers.CharField(max_length=50,source='user.first_name')
    last_name = serializers.CharField(max_length=50,source='user.last_name')
    username = serializers.CharField(max_length=30,source='user.username')
    email = serializers.EmailField(source='user.email')
    birth_date = serializers.DateField(input_formats=['%Y.%m.%d'])
    gender = serializers.ChoiceField(choices=GENDER_CHOICES)
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Customer
        fields = ['id', 'first_name', 'last_name', 'username', 'email', 'birth_date', 'gender', 'token']

    def get_token(self, customer):
        token, created = Token.objects.get_or_create(user=customer.user)
        return token.key



class ArtistSerializer(serializers.ModelSerializer):
    first_name = serializers.CharField(source='user.first_name')
    last_name = serializers.CharField(source='user.last_name')
    username = serializers.CharField(source='user.username')
    class Meta:
        model = Artist
        fields = ['id', 'username', 'first_name', 'last_name', 'image', 'cover', 'verified']


class ArtistDetailSerializer(serializers.ModelSerializer):
    songs = SongSerializerSummary(many=True)
    first_name = serializers.CharField(source='user.first_name')
    last_name = serializers.CharField(source='user.last_name')
    username = serializers.CharField(source='user.username')
    class Meta:
        model = Artist
        fields = ['id', 'username', 'first_name', 'last_name', 'image', 'cover', 'verified', 'songs']


class CustomerProfileSerializer(serializers.ModelSerializer):
    first_name = serializers.CharField(max_length=50,source='user.first_name')
    last_name = serializers.CharField(max_length=50,source='user.last_name')
    username = serializers.CharField(max_length=30,source='user.username')
    email = serializers.EmailField(source='user.email')
    birth_date = serializers.DateField(input_formats=['%Y.%m.%d'])
    gender = serializers.ChoiceField(choices=GENDER_CHOICES)
    playlists = PlaylistSerializerSummary(many=True)
    followed_artists = ArtistSerializer(many=True)

    class Meta:
        model = Customer 
        fields = ['id', 'first_name', 'last_name', 'username', 'email', 'birth_date', 'gender', 'playlists', 'followed_artists']
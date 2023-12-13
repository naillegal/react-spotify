from rest_framework import serializers
from django.contrib.auth.models import User
from .models import GENDER_CHOICES, Customer
from rest_framework.authtoken.models import Token


class RegisterSerializer(serializers.Serializer):
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
        fields = ['first_name', 'last_name', 'username', 'email', 'birth_date', 'gender', 'token']

    def get_token(self, customer):
        token, created = Token.objects.get_or_create(user=customer.user)
        return token.key

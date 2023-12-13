# Generated by Django 5.0 on 2023-12-13 08:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('song', '0002_initial'),
        ('user', '0004_alter_artist_cover'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customer',
            name='followed_artist',
            field=models.ManyToManyField(blank=True, null=True, related_name='followed_artist', to='user.artist'),
        ),
        migrations.AlterField(
            model_name='customer',
            name='liked_playlists',
            field=models.ManyToManyField(blank=True, null=True, related_name='liked_playlists', to='song.playlist'),
        ),
        migrations.AlterField(
            model_name='customer',
            name='liked_songs',
            field=models.ManyToManyField(blank=True, null=True, related_name='liked_songs', to='song.song'),
        ),
    ]
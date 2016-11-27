# -*- coding: utf-8 -*-
# Generated by Django 1.10.2 on 2016-11-20 23:08
from __future__ import unicode_literals

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Card',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('course', models.CharField(default='', max_length=10, validators=[django.core.validators.RegexValidator(regex='[A-Z]+ [0-9]+')])),
                ('topic', models.CharField(default='', max_length=100)),
                ('card_id', models.CharField(default='', max_length=15)),
                ('cue_side', models.TextField(default='')),
                ('other_side', models.TextField(default='')),
                ('view_counter', models.IntegerField(default=0)),
            ],
        ),
    ]
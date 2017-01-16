# To Run
`python manage.py makemigrations`

`python manage.py migrate`

to create DB.

Then
`python manage.py runserver`

# React Components
- CardDisplay: decides which card to display and updates metrics to the backend
- Card: holds a card's data and renders it 

# Django 
- Card: a Django model to store a card's data
- (JSON)Serializer: provides a two-way channel to fetch/update cards

# ToDo
- [ ] React templates front-end - in progress
- [ ] Functionality to add/remove cards
- [ ] Django: use cache to fetch cards

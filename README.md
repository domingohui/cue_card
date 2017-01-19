# To Run
`python manage.py makemigrations`

`python manage.py migrate`

to create DB.

Then
`python manage.py runserver`

# React Components
- CardDisplay: decides which card to display; collects and updates metrics to the backend
- Card: holds a card's data 
- Control UI

# Django 
- Card: a Django Model to store a card's data
- (JSON)Serializer: provides a two-way channel to fetch/update cards
- Also provides a way to store user's metrics
- Note: This is a simple framework that provides a simple API for now. Will integrate Django REST Framework very soon!

# ToDo
- [ ] Controls
- [ ] CSS
- [ ] Functionality to add/remove cards
- [ ] Django: use cache to fetch cards
- [ ] Django REST

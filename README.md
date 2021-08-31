# Ecom

An Ecommerce website built using Django, Django REST framework, Reactjs, Braintree payment gateway, Bootstrap

<br/>

![shield-1](https://img.shields.io/github/license/vishalda/Ecom?style=for-the-badge)
![shield-2](https://img.shields.io/github/languages/count/vishalda/Ecom?style=for-the-badge)
![shield-3](https://img.shields.io/github/languages/top/vishalda/Ecom?style=for-the-badge)
![shield-4](https://img.shields.io/tokei/lines/github/vishalda/Ecom?style=for-the-badge)

---

### Features

- Login/Registration
- Simple design
- Add to cart
- Payment option

---

## Setup

Make sure you have python, pipenv and npm or yarn already installed

1. Clone this repository : `git clone https://github.com/vishalda/Ecom.git`
2. Move into the directory: `cd Ecom`
3. Create a virtualenv and install all backend dependencies: `pipenv install`.
4. Start the virtualenv: `pipenv shell`.
5. Run `python manage.py makemigrations`.
6. Run `python manage.py migrate`.
   > Note: Make sure to make changes to name, email, username, password at `Ecom/api/migrations/0001_initial.py`, which serves as superuser credentials.
7. Run `python manage.py collectstatic`
8. Install all frontend dependencies: `npm install`
9. Run the frontend server: `npm start`.

---

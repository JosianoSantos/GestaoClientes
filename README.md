# Gestão de clientes 👤👤

> Aplicação para gestão de clientes utilizando Angular 12 e django 3

> A aplicação é dividida em um frontend em Angular e uma API usando Django Rest Framework
### => [Clique aqui para acessar ](https://josianosantos.github.io)

## Como rodar a aplicação na sua máquina
### Há duas opções:
#### 1 -  Usando Docker com as seguintes imagens disponibilizadas no DockerHub
####  [Api](https://josianos)
####  [App Angular](https://josianos)
##
#### 2 - Seguindo os seguintes passos:

###App Angular
####Na raiz do projeto digite os seguintes comandos:

```sh
npm install
```
```sh
ng serve
```

### Api Django
#### *Recomenda-se a utilização virtualenv

####Na raiz do projeto digite os seguintes comandos:
```sh
pip install -r requirements.txt
```
```sh
python manage.py runserver
```

### Para rodas testes da API:

```sh
python manage.py test
```

###Django Admin

####A api utiliza django admin para uma melhor gestão dos registros, 
Basta acessar http://localhost:8000/admin 

Há um usuário de teste com as seguintes credenciais:

username: neoprospecta

senha: 12345678

## Autor

👤 **Josiano Santos**

* Github: [@JosianoSantos](https://github.com/JosianoSantos)
* LinkedIn: [@JosianoSantos](https://linkedin.com/in/JosianoSantos)




---
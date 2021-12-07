# Cadastro de carros

## Requisitos Funcionais
- [x] Deve ser possível cadastrar um novo carro
<!-- - Deve ser possível listar todas as categorias -->

## Regras de negócio
- [x] Não deve ser possível cadastrar um carro com uma placa já cadastrada
- [x] O carro já deve ser cadastrado como disponível
- [] O usuário responsável pelo cadastro dever ser um administrador
<!-- - Não deve ser possível alterar a placa de um carro já cadastrado -->

---

# Listagem de carros

## Requisitos Funcionais
- [] Deve ser possível listar todos os carros disponíveis
- [] Deve ser possível listar todos os carros disponíveis pelo nome da categoria
- [] Deve ser possível listar todos os carros disponíveis pelo nome da marca
- [] Deve ser possível listar todos os carros disponíveis pelo nome do carro


## Regras de negócio
- [] O usuário não precisa estar autenticado para listar os carros

---

# Cadastro de especificação dos carros

## Requisitos Funcionais
- [] Deve ser possível cadastrar uma especificação para um carro
- [] Deve ser possível listar todas as especificações cadastradas
- [] Deve ser possível listar todos os carros 
- [] O usuário responsável pelo cadastro dever ser um administrador

## Regras de negócio
- [] Não deve ser possível cadastrar uma especificação para um carro não cadastrado
- [] Não deve ser possível cadastrar uma especificação já cadastrada para o mesmo carro

---

# Cadastro de imagens do carro

## Requisitos Funcionais
- [] Deve ser possível cadastrar a imagem de um carro
- [] Deve ser possível listar todos os carros

## Requisitos não funcionais
- [] Utilizar o Multer para upload dos arquivos

## Regras de negócio
- [] O usuário responsável pelo cadastro dever ser um administrador

---

# Aluguel de carros

## Requisitos Funcionais
- [] Deve ser possível cadastrar um aluguel

## Requisitos não funcionais
- [] Utilizar o Multer para upload dos arquivos

## Regras de negócio
- [] O aluguel deve ter duração mínima de 1 dia
- [] Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário
- [] Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro
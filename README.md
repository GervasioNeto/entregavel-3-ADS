# Projeto: API de Operações Matemáticas com Express.js

### Matéria: Ambientes de Desenvolvimento de Software

Este projeto foi desenvolvido para a disciplina **Ambientes de Desenvolvimento de Software**. Ele consiste em uma API simples, criada com **Express.js**, que realiza operações matemáticas básicas como soma, subtração, multiplicação e divisão, utilizando requisições HTTP do tipo POST.

## 📋 Funcionalidades

A API permite realizar as seguintes operações matemáticas:

- Soma
- Subtração
- Multiplicação
- Divisão

### Endpoints disponíveis:

1. **Soma**
   - **Rota:** `/soma`
   - **Método:** POST
   - **Descrição:** Realiza a soma de dois números.
   - **Exemplo de JSON para requisição:**
     ```json
     {
       "a": 10,
       "b": 5
     }
     ```
   - **Resposta:** `O resultado da soma de 10 e 5 é 15`

2. **Subtração**
   - **Rota:** `/subtracao`
   - **Método:** POST
   - **Descrição:** Realiza a subtração de dois números.
   - **Exemplo de JSON para requisição:**
     ```json
     {
       "a": 10,
       "b": 5
     }
     ```
   - **Resposta:** `O resultado da subtração de 10 e 5 é 5`

3. **Multiplicação**
   - **Rota:** `/multiplicacao`
   - **Método:** POST
   - **Descrição:** Realiza a multiplicação de dois números.
   - **Exemplo de JSON para requisição:**
     ```json
     {
       "a": 10,
       "b": 5
     }
     ```
   - **Resposta:** `O resultado da multiplicação de 10 e 5 é 50`

4. **Divisão**
   - **Rota:** `/divisao`
   - **Método:** POST
   - **Descrição:** Realiza a divisão de dois números.
   - **Exemplo de JSON para requisição:**
     ```json
     {
       "a": 10,
       "b": 5
     }
     ```
   - **Resposta:** `O resultado da divisão de 10 e 5 é 2`

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [Body-Parser](https://www.npmjs.com/package/body-parser)

---

## 🛠️ Instalação e Execução

### 1. Pré-requisitos

- Você precisa ter o **Node.js** e o **npm** instalados em sua máquina.

### 2. Clonar o repositório

```bash
git clone https://github.com/GervasioNeto/entregavel-3-ADS.git

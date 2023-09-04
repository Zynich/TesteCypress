<div id="top"></div>

# Teste de Automação Cypress

## Cenários

*Cadastro de usuário*<br/>
*Login*<br/>
*Adicionar produto ao carrinho utilizando a busca*<br/>
*Finalização de compra*<br/>

## Tecnologias utilizadas
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)

• **NodeJS** *(ambiente de execução Javascript)*
<br/>
• **NPM** *(Gerenciador de Pacotes)*
<br/>
• **JavaScript** *(linguagem de desenvolvimento)*
<br/>
• **Cypress** *(Ferramenta de teste)*
<br/>

## Clone para Execução

Clone este repositório para sua máquina local usando comando abaixo:

```
$ git clone https://github.com/Zynich/TesteCypress.git
```

### Execução na interface

Acessar a raiz do repositório
```
$ cd /{diretorio}/TesteCypress
```
Execute comando para instalar as dependências listadas na seção de `devDependencies` do arquivo `package.json`

```
npm install
```

Execute comando para abrir a UI do cypress
```
npm cypress open
```

Na UI do cypress
```
1. Clicar em E2E Testing
2. Clicar na opção Chrome como browser
• Confirmar em Start E2E Testing in Chrome

3. Selecionar qual teste deseja iniciar:

• CadastroUsuário (Cadastro um usuário percorrendo os campos)

• LoginUsuario (Efetue o login utilizando os dados cadastrados na primeira execução)

• ComprarProduto (Efetue uma pesquisa de produto, seleciono e adiciono o produto ao carrinho. Acesse o carrinho e finalizo a compra.)
  
```

# Github / Banco Pan

Aplicação teste para o processo de seleção do banco Pan. Projeto gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 7.1.4.

## Configuração do projeto

Clone este repositório com `git clone ` ou faça o download dos arquivos, bavegue até a pastea do projeto e execute `npm install` para instalar as dependências do projeto

## Servidor local

No terminal execute `ng serve` caso tenha o [Angular CLI](https://github.com/angular/angular-cli) instalado globalmente nem seu computador. Caso contrario, execute `npm run dev:serve` para usar o Angular CLI instalado no projeto. 

## Build para Produção

Para preparar o build para produção, execure `ng build --prod` caso tenha o [Angular CLI](https://github.com/angular/angular-cli) instalado globalmente nem seu computador. Caso contrato, execute `npm run build:prod` para usar o Angular CLI instalado no projeto. 

## Sevidor Proxy

Para contornar o problemas com o CORS no endpont para obter o access_token usado na autenticação dos requests, configurei um pequeno servidor em [Express](https://expressjs.com/) com o endpoint `https://auth-github-server.herokuapp.com/oauth/accesstoken`. O código fonte do servidor pode ser visualizado [neste repositório](https://github.com/roliveira-com/auth-github)



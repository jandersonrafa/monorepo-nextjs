Repositório testando 3 ferramentas de implantação de monorepo

# Monorepo vs multi repo
Mono repo facilita o compartilhamento de componentes sem ter biblioteca e versionamento.

Esses projetos tem exemplos de repositorios com duas aplicações  compartilhando componentes

# ecommerce-workspace
Ferramenta: Nx

## Como subir
- nvm install 16.13.0
- nvm use 16.13.0
- npm install nx -g
- nx serve ms-product-front
- nx serve ms-order-front
- acessar http://localhost:4200
- acessar http://localhost:4201

## Prós
- consolidado mercado
- rápido
- simples de configurar

## Contras
- unico package.json, projetos são forçados usar mesmas libs e versões

# yarn-workspace-lerna-monorepo-master
Ferramenta: lerna + yarn workspace

## Como subir
- nvm install 16.13.0
- nvm use 16.13.0
- npm install yarn -g
- npm install lerna -g
- lerna bootstrap
- lerna run build
- lerna run start

## Prós
- consolidado mercado

## Contras
- dificil configuracao
- hot reload dificil configurar
- nao tem cache

# turborepo
Ferramenta: turborepo

## Como subir
- usar node mais recente `nvm use v17.6.0`
- instala turbo `npm install turbo -g`
- roda todas aplicações `turbo run dev`
- acessar http://localhost:3004
- acessar http://localhost:3005
- acessar http://localhost:3006

## Prós
- cache build
- cache remoto
- hot reload automaticamente configurado
- empresa vercel
- 

## Contras
- muito recente
- um pouco mais lento
# LP Biasi - Next.js Project

Este é um projeto [Next.js](https://nextjs.org) com TypeScript, Tailwind CSS e Docker.

## Desenvolvimento Local

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Executando o projeto

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## Docker

### Produção com Docker

```bash
# Build da imagem
npm run docker:build

# Executar container
npm run docker:run

# Build + Run (em um comando)
npm run docker:dev
```

### Desenvolvimento com Docker Compose

```bash
# Desenvolvimento com hot reload
docker-compose --profile dev up

# Produção
docker-compose up
```

### Comandos Docker manuais

```bash
# Build para produção
docker build -t lp-biasi .

# Executar em produção
docker run -p 3000:3000 lp-biasi

# Build para desenvolvimento
docker build -f Dockerfile.dev -t lp-biasi-dev .

# Executar em desenvolvimento
docker run -p 3000:3000 -v $(pwd):/app -v /app/node_modules lp-biasi-dev
```

## Estrutura do Projeto

```
├── src/
│   ├── app/          # App Router (Next.js 13+)
│   └── components/   # Componentes React
├── public/           # Arquivos estáticos
├── Dockerfile        # Docker para produção
├── Dockerfile.dev    # Docker para desenvolvimento
├── docker-compose.yml
└── next.config.ts    # Configuração Next.js
```

## Scripts Disponíveis

- `npm run dev` - Desenvolvimento local
- `npm run build` - Build de produção
- `npm run start` - Servidor de produção
- `npm run lint` - Verificação de código
- `npm run docker:build` - Build Docker
- `npm run docker:run` - Executar Docker
- `npm run docker:dev` - Build + Run Docker

## Tecnologias

- [Next.js 15](https://nextjs.org/)
- [React 19](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/)
- [Docker](https://www.docker.com/)

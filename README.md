# Plann.er

## Descrição

Plann.er é um site que permite aos usuários enviar convites para amigos e familiares para viajarem juntos. Com uma interface intuitiva e fácil de usar, você pode planejar suas viagens, enviar convites e gerenciar as respostas de seus convidados. Perfeito para organizar viagens em grupo, sejam elas de lazer ou negócios.

## Funcionalidades

- **Criar Viagens**: Defina detalhes como destino, datas e descrição da viagem.
- **Enviar Convites**: Convide amigos e familiares para sua viagem por e-mail.
- **Gerenciar Convidados**: Adicione, remova e visualize a lista de convidados.
- **Rastrear Respostas**: Veja quem aceitou ou recusou seu convite.
- **Notificações**: Receba notificações sobre o status dos convites enviados.

### Linguagens e Ferramentas

1. **TypeScript**: Uma linguagem de programação que é um superconjunto do JavaScript, adicionando tipagem estática.
   - Pacotes: `typescript`, `@types/react`, `@types/react-dom`

### Ferramentas de Build e Desenvolvimento

2. **Vite**: Um build tool rápido e moderno para desenvolvimento frontend.

   - Pacotes: `vite`, `@vitejs/plugin-react`

3. **ESLint**: Uma ferramenta para análise estática de código e identificação de padrões problemáticos.

   - Pacotes: `eslint`, `@typescript-eslint/eslint-plugin`, `@typescript-eslint/parser`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`

4. **PostCSS**: Uma ferramenta para transformar CSS com plugins JavaScript.
   - Pacotes: `postcss`, `autoprefixer`

### Frameworks e Bibliotecas

5. **React**: Uma biblioteca JavaScript para construção de interfaces de usuário.

   - Pacotes: `react`, `react-dom`, `@types/react`, `@types/react-dom`

6. **React Router**: Uma biblioteca para roteamento em aplicações React.
   - Pacote: `react-router-dom`

### Componentes e UI

7. **Lucide-react**: Ícones para React.

   - Pacote: `lucide-react`

8. **React Day Picker**: Um componente de calendário para React.

   - Pacote: `react-day-picker`

9. **Tailwind Variants**: Utilitário para criação de componentes estilizados com Tailwind CSS.

   - Pacote: `tailwind-variants`

10. **Tailwind CSS**: Um framework de CSS utilitário para estilização rápida.
    - Pacotes: `tailwindcss`, `autoprefixer`

### Utilitários e Auxiliares

11. **Axios**: Um cliente HTTP para fazer requisições a APIs.

    - Pacote: `axios`

12. **Date-fns**: Uma biblioteca para manipulação de datas.

    - Pacote: `date-fns`

13. **Localforage**: Uma biblioteca para armazenamento offline.

    - Pacote: `localforage`

14. **Match-sorter**: Uma biblioteca para ordenação e filtragem de listas.

    - Pacote: `match-sorter`

15. **Sort-by**: Uma biblioteca para ordenação de arrays por propriedades.
    - Pacote: `sort-by`

### Scripts de Desenvolvimento

- **Script Dev**: `vite` (Inicia o servidor de desenvolvimento do Vite)
- **Script Build**: `tsc -b && vite build` (Compila TypeScript e constrói a aplicação com Vite)
- **Script Lint**: `eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0` (Executa ESLint nos arquivos TypeScript e TSX)
- **Script Preview**: `vite preview` (Pré-visualiza a build de produção)

### Sumário das Tecnologias

1. **Linguagens**:

   - TypeScript

2. **Ferramentas de Build e Desenvolvimento**:

   - Vite
   - ESLint
   - PostCSS

3. **Frameworks e Bibliotecas**:

   - React
   - React Router

4. **Componentes e UI**:

   - Lucide-react
   - React Day Picker
   - Tailwind Variants
   - Tailwind CSS

5. **Utilitários e Auxiliares**:
   - Axios
   - Date-fns
   - Localforage
   - Match-sorter
   - Sort-by

### Linguagens e Ferramentas

1. **TypeScript**: Uma linguagem de programação que é um superconjunto do JavaScript, adicionando tipagem estática.

   - Pacotes: `typescript`, `@types/node`

2. **TSX**: Uma ferramenta para executar TypeScript diretamente com suporte a `tsx`.
   - Pacote: `tsx`

### Frameworks e Bibliotecas

3. **Fastify**: Um framework web rápido e de baixo overhead para Node.js.

   - Pacotes: `fastify`, `@fastify/cors`

4. **Prisma**: Um ORM (Object-Relational Mapper) moderno e baseado em TypeScript.

   - Pacotes: `prisma`, `@prisma/client`

5. **Zod**: Uma biblioteca de validação de esquemas para TypeScript e JavaScript.
   - Pacotes: `zod`, `fastify-type-provider-zod`

### Utilitários

6. **Nodemailer**: Um módulo para envio de e-mails via Node.js.

   - Pacotes: `nodemailer`, `@types/nodemailer`

7. **Day.js**: Uma biblioteca para manipulação de datas.
   - Pacote: `dayjs`

### Scripts de Desenvolvimento

- **Script Dev**: `tsx watch --env-file .env src/server.ts`
  - Utiliza `tsx` para assistir mudanças nos arquivos TypeScript e reiniciar o servidor automaticamente.

### Dependências de Desenvolvimento

- **@types/node**: Tipos TypeScript para Node.js.
- **@types/nodemailer**: Tipos TypeScript para Nodemailer.

### Sumário das Tecnologias

1. **Linguagens**:

   - TypeScript

2. **Frameworks e Bibliotecas**:

   - Fastify (Framework web)
   - Prisma (ORM)
   - Zod (Validação de esquemas)

3. **Utilitários**:

   - Nodemailer (Envio de e-mails)
   - Day.js (Manipulação de datas)

4. **Ferramentas de Desenvolvimento**:
   - TSX (Execução de TypeScript)
   - Tipos TypeScript para Node.js e Nodemailer

## Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn
- MongoDB

### Passos para Configuração

1. **Clone o Repositório**

   ```sh
   git clone https://github.com/rsantiago-lima/plann.er.git
   cd plann.er
   ```

2. **Instale as Dependências**

   ```sh
   npm install
   ```

3. **Configuração do Banco de Dados**

   - Crie um banco de dados MongoDB e obtenha a URL de conexão.
   - Crie um arquivo `.env` na raiz do projeto e adicione a URL do MongoDB:
     ```env
     MONGODB_URI=sua-url-do-mongodb
     ```

4. **Configuração do Firebase**

   - Crie um projeto no [Firebase](https://firebase.google.com/).
   - Ative a autenticação por e-mail/senha.
   - Adicione as configurações do Firebase ao arquivo `.env`:
     ```env
     FIREBASE_API_KEY=sua-api-key
     FIREBASE_AUTH_DOMAIN=seu-auth-domain
     FIREBASE_PROJECT_ID=seu-project-id
     FIREBASE_STORAGE_BUCKET=seu-storage-bucket
     FIREBASE_MESSAGING_SENDER_ID=seu-messaging-sender-id
     FIREBASE_APP_ID=seu-app-id
     ```

5. **Configuração do Nodemailer**

   - Adicione as configurações do serviço de e-mail ao arquivo `.env`:
     ```env
     EMAIL_HOST=smtp.seu-servidor-de-email.com
     EMAIL_PORT=587
     EMAIL_USER=seu-email-usuario
     EMAIL_PASS=sua-senha
     ```

6. **Inicie o Servidor**

   ```sh
   npm start
   ```

7. **Inicie o Front-end**
   ```sh
   cd client
   npm start
   ```

## Como Usar

1. **Registro e Login**

   - Crie uma conta ou faça login usando seu e-mail e senha.

2. **Criar uma Viagem**

   - Acesse a seção "Criar Viagem" e preencha os detalhes da viagem.

3. **Enviar Convites**

   - Adicione os e-mails dos amigos e familiares que você deseja convidar e envie os convites.

4. **Gerenciar Convidados**
   - Veja a lista de convidados e suas respostas. Você pode adicionar ou remover convidados conforme necessário.

## Contribuição

Se você deseja contribuir com o projeto, siga os passos abaixo:

1. **Fork o Repositório**
2. **Crie uma Branch para sua Feature**
   ```sh
   git checkout -b feature/nova-feature
   ```
3. **Faça o Commit das Suas Alterações**
   ```sh
   git commit -m 'Adiciona nova feature'
   ```
4. **Push para a Branch**
   ```sh
   git push origin feature/nova-feature
   ```
5. **Abra um Pull Request**

## Contato

Se você tiver alguma dúvida ou sugestão, entre em contato:

- **Email**: rafael.lima1024@gmail.com
- **GitHub**: [Rafael Lima](https://github.com/rsantiago-lima)

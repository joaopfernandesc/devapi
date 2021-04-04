# DevApi
## _Teste Técnico - Backend NodeJS_

## Considerações

- Projeto realizado com PostgreSQL e Express. Embora não seja a preferência dos avaliadores, a decisão foi baseada na familiaridade e gerenciamento de tempo. Achei preferível usar ferramentas que estou acostumado do que correr riscos desnecessários;
- App dockerizável;
- Documentação exposta em `/api-docs`;
- Autenticação "dummy";

## Como executar
Em ambos os casos, a aplicação estará exposta na porta `3333` após seguir os passos;

#### Com Docker:
- Crie um arquivo `.env` na pasta raiz do projeto e preencha com as variáveis expostas em `.env.example`;
- No terminal, digite `docker-compose up --build`;
- Aguarde o Docker finalizar a configuração inicial (migrações e popular banco);

#### Sem Docker:
- Esse projeto usa `yarn` e `PostgreSQL`. Certifique-se que ambos estão instalados na sua máquina;
- Crie um arquivo `.env` na pasta raiz do projeto e preencha com as variáveis expostas em `.env.example`;
- Instale as dependências digitando `yarn` no terminal na pasta raiz do projeto;
- Execute as migrações com `yarn typeorm migration:run` (isso já vai popular seu banco com 4 conectores);
- Execute o projeto com o comando `yarn dev:server`;

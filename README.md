# Desafio de Analista de Teste de Software na WEBJUMP

Para realizar este projeto, foi utilizado o "framework cypress". Na pasta "integration" está o teste automatizado, o qual possui o nome de "teste_WEBJUMP.spec.js", que consiste em validar cada etapa solicitada no desafio.

Também foi criada a pasta "pages", que possui um arquivo chamado "webjumpPage.js". Neste arquivo contém o passo a passo do que é executado durante a automação, o mesmo foi criado com a ideia do padrão "page objects", que tem como objetivo facilitar a manutenção e dar mais praticidade no desenvolvimento.

Além disso, dentro do arquivo ainda temos documentado o que faz e para que serve cada comando, a fim de que alguém com pouco conhecimento consiga entender do que se trata o código.

# Como rodar o projeto localmente na sua máquina: 

- Abrir o terminal
- Acessar a pasta onde você deseja baixar o projeto
- Executar o comando: <b>git clone git@github.com:pedrohsg2001/test-WEBJUMP.git</b>
- Acessar a pasta do projeto baixado
- Instalar o cypress-iframe: <b>npm install -D cypress-iframe</b>
- Executar o comando: <b>npx cypress open</b> e selecionar o projeto que você deseja abrir.

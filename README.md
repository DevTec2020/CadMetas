# Gerenciador de Metas

## Descrição
Este sistema fiz junto a equipe da Rocketseat no bootcamp NLW Pocket para gerenciamento de metas. Ele permite cadastrar, listar, marcar como realizadas, visualizar metas pendentes e deletar metas. O app utiliza um arquivo JSON para salvar os dados e exibe um menu interativo usando a biblioteca `@inquirer/prompts`.

## Funcionalidades
- **Cadastrar meta**: Permite que o usuário insira uma nova meta.
- **Listar metas**: Exibe todas as metas cadastradas e permite selecionar quais foram concluídas.
- **Metas realizadas**: Exibe apenas as metas que foram marcadas como concluídas.
- **Metas em aberto**: Lista as metas que ainda não foram concluídas.
- **Deletar metas**: Permite deletar metas selecionadas pelo usuário.
- **Salvar dados**: Todas as metas são salvas em um arquivo JSON (`metas.json`).

## Pré-requisitos
- **Node.js**: Certifique-se de ter o Node.js instalado em sua máquina.
- **Pacotes NPM**: O projeto utiliza as bibliotecas `@inquirer/prompts` e `fs` para prompts e manipulação de arquivos.

## Estrutura do Projeto
- **index.js**: Arquivo principal que contém a lógica do CLI.
- **metas.json**: Arquivo de armazenamento das metas (criado automaticamente na execução).

## Funcionalidades Técnicas
- **Persistência de dados**: Os dados são armazenados no arquivo metas.json, garantindo que o progresso seja mantido ao sair do sistema.
- **Prompt interativo**: Utiliza a biblioteca @inquirer/prompts para criar menus interativos no terminal.
- **Assíncrono**: As operações de leitura e escrita em arquivo são feitas de forma assíncrona usando fs.promises.

## Dependências
`@inquirer/prompts`: Gerenciamento de prompts interativos no terminal.
`fs`: Manipulação de arquivos no sistema de arquivos.

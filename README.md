# Gerenciador de Metas

## Descrição
Este é um aplicativo de linha de comando (CLI) para gerenciamento de metas. Ele permite cadastrar, listar, marcar como realizadas, visualizar metas pendentes e deletar metas. O app utiliza arquivos JSON para persistir os dados e exibe um menu interativo usando a biblioteca `@inquirer/prompts`.

## Funcionalidades
- **Cadastrar meta**: Permite que o usuário insira uma nova meta.
- **Listar metas**: Exibe todas as metas cadastradas e permite selecionar quais foram concluídas.
- **Metas realizadas**: Exibe apenas as metas que foram marcadas como concluídas.
- **Metas em aberto**: Lista as metas que ainda não foram concluídas.
- **Deletar metas**: Permite deletar metas selecionadas pelo usuário.
- **Salvar dados**: Todas as metas são salvas em um arquivo JSON (`metas.json`).

## Instalação e Uso

### Pré-requisitos
- **Node.js**: Certifique-se de ter o Node.js instalado em sua máquina.
- **Pacotes NPM**: O projeto utiliza as bibliotecas `@inquirer/prompts` e `fs` para prompts e manipulação de arquivos.

### Passos para instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/usuario/nome-do-repositorio.git

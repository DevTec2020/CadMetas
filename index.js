const { select, input, checkbox } = require('@inquirer/prompts');

let meta = {
    value: 'Tomar 3L de água por dia',
    checked: false,
}

let metas = [meta]

const cadastrarMeta = async () => {
    const meta = await input ({message: "\nDigite a meta "})

    if (meta.length == 0){
        console.log("\nA meta não pode ser vazia")
        return
    }

    metas.push(
        {value: meta, checked: false}
    )
        
}

const listarMetas = async () => {
    if (metas.length == 0){
        console.log("\n Você não possui metas, cadastre uma.\n")
        return
    }

    const respostas = await checkbox ({
        message:"\nObs. use as setas para mudar de meta, espaço para marcar e desmarcar, enter para finalizar essa etapa.\nMetas:",
        message:"\nObs. use as setas para mudar de meta, espaço para marcar e desmarcar, enter para finalizar essa etapa.\nMetas:",
        choices:[...metas],
        //Desabilita as instruções por que vem em incles e la em message eu expliquei como usar
        instructions: false,
    })

    metas.forEach((m) => {
        m.checked = false
    })

    if (respostas.length == 0){
        console.log("\nNenhuma meta selecionada\n")
        return
    }

    respostas.forEach((resposta) => {
        const meta = metas.find((m) => {
            return m.value == resposta
        })

        meta.checked = true
    })

    console.log("\nMeta(s) marcadas como concluida(s)\n")
}

const metasRealizadas = async () => {
    const realizadas = metas.filter ((meta) => {
        return meta.checked
    })

    if (realizadas.length == 0 ){
        console.log("\nNenhuma meta realizada ainda\n")
        return
    }

    await select ({
        message: "\nMetas Realizadas "+ realizadas.length,
        choices: [...realizadas]
    })
}

const metasAbertas = async () => {
    const abertas = metas.filter ((meta) => {
        return meta.checked != true
    })

    if (abertas.length == 0){
        console.log("\nNenhuma meta em aberto\n")
        return
    }

    await select ({
        message: "Metas abertas "+ abertas.length,
        choices: [...abertas]
    })
}

const deletarMetas = async () => {
    if (metas.length == 0){
        console.log("\n Você não possui metas, cadastre uma.\n")
        return
    }
    
    const metasDesmarcadas = metas.map((meta) => {
        return {value: meta.value, checked: false}
    })

    const itensADeletar = await checkbox ({
        message: "\nSelecione qual deseja deletar:",
        choices: [...metasDesmarcadas],
        instructions: false
    })

    if (itensADeletar == 0){
        console.log("\nNenhum item seleconado")
        return
    }

    itensADeletar.forEach((item) => {
        metas = metas.filter((meta) => {
            return meta.value != item
        })
    })

    console.log("\nMeta(s) deletada(s) com Sucesso!\n")
}

const start = async () => {
    while (true) {
        //Codigo para aguarar o usuário digitar algo antes de proceguir
        const opcao = await select({
            message: "Menu",
            choices: [
                { name: "Cadastrar meta", value: "cadastrar" },
                { name: "Listar metas", value: "listar"},
                { name: "Metas realizadas", value: "realizadas"},
                { name: "Metas em aberto", value: "abertas"},
                { name: "Deletar metas", value: "deletar"},
                { name: "Sair", value: "sair" }
            ]
        });

        switch (opcao) {
            case "cadastrar":
                await cadastrarMeta();
                console.log(metas)
                break;
            
            case "listar":
                await listarMetas();
                break;

            case "realizadas":
                await metasRealizadas();
                break;

            case "abertas":
                await metasAbertas();
                break;

            case "deletar":
                await deletarMetas();
                break;

            case "sair":
                console.log("\nSaindo...\n");
                return; // Sai da função, encerrando o loop

            default:
                console.log("Opção inválida");
        }
    }
};

// Chama a função para iniciar o menu
start();

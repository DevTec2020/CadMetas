const { select, input, checkbox } = require('@inquirer/prompts');

let mensagem = "Bem vindo ao app de Metas";

let meta = {
    value: 'Tomar 3L de água por dia',
    checked: false,
}

let metas = [meta]

const cadastrarMeta = async () => {
    const meta = await input ({message: "\nDigite a meta "})

    if (meta.length == 0){
        mensagem ="A meta não pode ser vazia"
        return
    }

    metas.push(
        {value: meta, checked: false}
    )

    mensagem = "Meta cadastrada"
        
}

const listarMetas = async () => {
    if (metas.length == 0){
        mensagem ="Você não possui metas, cadastre uma."
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
        mensagem ="Nenhuma meta selecionada"
        return
    }

    respostas.forEach((resposta) => {
        const meta = metas.find((m) => {
            return m.value == resposta
        })

        meta.checked = true
    })

    mensagem ="Meta(s) marcadas como concluida(s)"
}

const metasRealizadas = async () => {
    const realizadas = metas.filter ((meta) => {
        return meta.checked
    })

    if (realizadas.length == 0 ){
        mensagem ="Nenhuma meta realizada ainda"
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
        mensagem ="Nenhuma meta em aberto"
        return
    }

    await select ({
        message: "Metas abertas "+ abertas.length,
        choices: [...abertas]
    })
}

const deletarMetas = async () => {
    if (metas.length == 0){
        mensagem ="Você não possui metas, cadastre uma."
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
        mensagem ="Nenhum item seleconado"
        return
    }

    itensADeletar.forEach((item) => {
        metas = metas.filter((meta) => {
            return meta.value != item
        })
    })

    mensagem ="Meta(s) deletada(s) com Sucesso!"
}

const mostrarMensagem = () => {
    console.clear();

    if(mensagem != ""){
        console.log(mensagem)
        console.log("")
        mensagem = ""
    }
}

const start = async () => {
    while (true) {
        mostrarMensagem();
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

class RecintosZoo {

    analisaRecintos(animal, quantidade) {
        // array de objetos cria os recintos do zoológico
        const recintos = [
            {numero: 1, bioma: 'savana', tamanhoTotal: 10, animaisExistentes: '3 macacos'},
            {numero: 2, bioma: 'floresta', tamanhoTotal: 5, animaisExistentes: 'vazio'},
            {numero: 3, bioma: 'savana e rio', tamanhoTotal: 7, animaisExistentes: '1 gazela'},
            {numero: 4, bioma: 'rio', tamanhoTotal: 8, animaisExistentes: 'vazio'},
            {numero: 5, bioma: 'savana', tamanhoTotal: 9, animaisExistentes: '1 leão'}
        ];
        // objeto com objetos cria as características dos animais permitidos
        const animaisPermitidos = {
            'leão': {tamanho: 3, bioma: 'savana', carnivoro: true},
            'leopardo': {tamanho: 2, bioma: 'savana', carnivoro: true},
            'crocodilo': {tamanho: 3, bioma: 'rio', carnivoro: true},
            'macaco': {tamanho: 1, bioma: 'savana ou floresta', carnivoro: false},
            'gazela': {tamanho: 2, bioma: 'savana', carnivoro: false},
            'hipopotamo': {tamanho: 4, bioma: 'savana ou rio', carnivoro: false}
        };
        // verifica quantidade válida
        if (quantidade <= 0) {
            return {erro: 'Quantidade inválida'};
        }
        // função "adicionaAnimais"analisa e adiciona as possibilidade dos animais nos recintos, logo redução do "tamanhoTotal"
        let a = 3;
        let b = 0;
        let c = 1;
        let d = 0;
        let e = 1;
        adicionarAnimais(animal, quantidade) {
            switch (animal) {
                case 'leão':
                    if (recintos.animaisExistentes !== 'crocodilo' && recintos.animaisExistentes != 'leopardo' &&
                       recintos.bioma === 'savana') {
                        recintos.animaisExistentes = (quantidade + e) + ' ' + animal;
                    }
                    recintos.tamanhoTotal = recintos.tamanhoTotal - quantidade * 3;
                    break;

                case 'crocodilo':
                    if (recintos.animaisExistentes !== 'leão' && recintos.animaisExistentes != 'leopardo' &&
                       recintos.bioma === 'rio') {
                        recintos.animaisExistentes = (quantidade + d) + ' ' + animal;
                    }
                    recintos.tamanhoTotal = recintos.tamanhoTotal - quantidade * 3;
                    break;

                case 'leopardo':
                    if (recintos.animaisExistentes != 'leão' && recintos.animaisExistentes != 'crocodilo' && 
                        recintos.bioma === 'savana') {
                        recintos.animaisExistentes = (quantidade + a) + ' ' + animal;
                    }
                    recintos.tamanhoTotal = recintos.tamanhoTotal - quantidade * 2;
                    break;

                case 'macaco':
                    if (recintos.animaisExistentes != 'leão' && recintos.animaisExistentes != 'leopardo' && 
                        recintos.animaisExistentes != 'crocodilo' && recintos.bioma === 'savana' || 
                        recintos.bioma === 'floresta') {
                        if (recintos.bioma === 'savana') {
                            recintos.animaisExistentes = (quantidade + a) + ' ' + animal;
                            recintos.tamanhoTotal = recintos.tamanhoTotal - quantidade * 1;
                        } else {
                            recintos.animaisExistentes = (quantidade + b) + ' ' + animal;
                            recintos.tamanhoTotal = recintos.tamanhoTotal - quantidade * 1;
                        }
                        }
                    break;

                case 'gazela':
                    if (recintos.animaisExistentes != 'leão' && recintos.animaisExistentes != 'leopardo' && 
                        recintos.animaisExistentes != 'crocodilo' && recintos.bioma === 'savana') {
                        recintos.animaisExistentes = (quantidade + a) + ' ' + animal;
                       }
                    recintos.tamanhoTotal = recintos.tamanhoTotal - quantidade * 2;
                    break;

                case 'hipopotamo':
                    if (recintos.animaisExistentes != 'leão' && recintos.animaisExistentes != 'leopardo' && 
                        recintos.animaisExistentes != 'crocodilo' && recintos.bioma === 'savana e rio' ||
                       recintos.bioma === 'rio') {
                        if (recintos.bioma === 'savana e rio') {
                            recintos.animaisExistentes = (quantidade + c) + ' ' + animal;
                            recintos.tamanhoTotal = recintos.tamanhoTotal - quantidade * 4;
                        } else {
                            recintos.animaisExistentes = ( quantidade + d) + ' ' + animal;
                            recintos.tamanhoTotal = recintos.tamanhoTotal - quantidade * 4;
                        }
                       } 
                    break;

                default:
                    console.log("Animal inválido");
            }
        }
    }
}

export { RecintosZoo as RecintosZoo };
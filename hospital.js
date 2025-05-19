const prompt = require('prompt-sync')({ sigint: true });

// Classe que representa uma pilha (estrutura LIFO)
class Pilha {
    constructor() {
        this.dados = [];
    }

    // Adiciona um item no topo da pilha
    adicionar(item) {
        this.dados.push(item);
        console.log(`✔️ '${item}' foi adicionado à pilha.`);
    }

    // Remove o item do topo da pilha
    remover() {
        if (this.estaVazia()) {
            console.log('⚠️ Pilha vazia. Nada para remover.');
            return null;
        }
        const retirado = this.dados.pop();
        console.log(`❌ '${retirado}' foi removido da pilha.`);
        return retirado;
    }

    // Retorna o elemento do topo sem remover
    verTopo() {
        if (this.estaVazia()) {
            return null;
        }
        return this.dados[this.dados.length - 1];
    }

    // Verifica se a pilha está vazia
    estaVazia() {
        return this.dados.length === 0;
    }

    // Retorna o número de elementos na pilha
    tamanho() {
        return this.dados.length;
    }

    // Esvazia a pilha
    limpar() {
        this.dados = [];
        console.log('🧹 A pilha foi esvaziada.');
    }

    // Mostra todos os elementos da pilha
    mostrar() {
        console.log('📦 Pilha atual:', this.dados.slice().reverse().join(' <- topo '));
    }

    // Mostra um elemento específico da pilha
    procurar(indice) {
        console.log('🔍 Buscando na pilha...');
        console.log('Paciente encontrado:', this.dados[indice]);
    }
}

// Classe que representa uma fila (estrutura FIFO)
class Fila {
    constructor() {
        this.dados = [];
    }

    // Adiciona um item no final da fila
    adicionar(item) {
        this.dados.push(item);
        console.log(`📥 '${item}' entrou na fila.`);
    }

    // Remove o item do início da fila
    remover() {
        if (this.estaVazia()) {
            console.log('⚠️ A fila está vazia. Nenhum item para remover.');
            return null;
        }
        const retirado = this.dados.shift();
        console.log(`🚪 '${retirado}' saiu da fila.`);
        return retirado;
    }

    // Mostra quem está na frente da fila
    verInicio() {
        return this.dados[0];
    }

    // Verifica se a fila está vazia
    estaVazia() {
        return this.dados.length === 0;
    }

    // Retorna o tamanho da fila
    tamanho() {
        return this.dados.length;
    }

    // Esvazia a fila
    limpar() {
        this.dados = [];
        console.log('🧹 Fila esvaziada.');
    }

    // Mostra os elementos da fila
    mostrar() {
        console.log('🚶‍♂️ Fila atual:', this.dados.join(' -> ') || 'vazia');
    }

    // Reinicia a fila com entrada de novos pacientes
    reiniciar() {
        console.log('🔄 Reiniciando a fila...');
        this.limpar();
        for (let i = 0; i < 5; i++) {
            const nomePaciente = prompt('Digite o nome do paciente: ');
            this.adicionar(nomePaciente);
        }
    }
}

// Execução principal
const fila = new Fila();
const pilha = new Pilha();

// Adiciona pacientes à fila
fila.adicionar('Paciente 1');
fila.adicionar('Paciente 2');
fila.adicionar('Paciente 3');
fila.adicionar('Paciente 4');
fila.adicionar('Paciente 5');

// Atende pacientes (remove da fila e coloca na pilha)
fila.verInicio();
fila.remover();
pilha.adicionar('Paciente 1');
fila.remover();
pilha.adicionar('Paciente 2');

// Mostra o estado atual das estruturas
fila.mostrar();
pilha.mostrar();

// Ações extras
pilha.procurar(1); // Busca o paciente na posição 1 da pilha
fila.reiniciar();  // Pede novos nomes de pacientes e reinicia a fila
fila.mostrar();

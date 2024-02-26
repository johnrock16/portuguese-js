class Aluno {
    nome = "";
    nota = 0;
    serie = 0;

    constructor(nome, nota, serie) {
        this.nome = nome;
        this.nota = nota;
        this.serie = serie;
    }
}

class AlunoUtilidades {
    estaComNotaAzul(aluno) {
        return aluno.nota >= 5;
    }

    resultadosFinais(aluno) {
        if (aluno.nota >= 8) {
            console.log(`O Aluno ${aluno.nome} passou e com uma boa nota foi pra ${aluno.serie + 1} série com a nota: ${aluno.nota}`);
        } else if (aluno.nota >= 5 && aluno.nota < 8) {
            console.log(`O Aluno ${aluno.nome} passou de forma mediocre mas foi pra ${aluno.serie + 1} série com a nota: ${aluno.nota}`);
        } else {
            console.log(`O Aluno ${aluno.nome} reprovou e continua na série ${aluno.serie} com a nota: ${aluno.nota}`);
        }
    }
}

let joao = new Aluno("João", 9, 9);
let jose = new Aluno("José", 7, 7);
let juniper = new Aluno("Juniper", 4, 7);
let alunoUtilidades = new AlunoUtilidades();

alunoUtilidades.resultadosFinais(joao);
alunoUtilidades.resultadosFinais(jose);
alunoUtilidades.resultadosFinais(juniper);

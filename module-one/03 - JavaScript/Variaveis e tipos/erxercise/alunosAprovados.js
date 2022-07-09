const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C',
	},
];

const media = 5;

function verAprovados(alunos, media){
    let aprovados =[];
    
    alunos.forEach(element => {
    let {nota, nome} = element;

    nota >= media?aprovados.push(nome):console.log('not');
});
    return aprovados;
}


console.log(verAprovados(alunos,media));
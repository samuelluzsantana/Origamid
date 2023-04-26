//0206 Any

interface Curso {
    nome: string;
    horas: number;
}

function mostrarCursos(cursos: Curso[]) {
    cursos.forEach((curso) => {
        document.body.innerHTML += `
        <div>
          <h2>${curso.nome}</h2>
          <p>Horas: ${curso.horas}</p>
        </div>
      `;
    });
}

const dados: any = 'o any gera problemas';

mostrarCursos(dados);
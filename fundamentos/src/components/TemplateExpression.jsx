//Atalho pra criar o projeto: rafce
import './TemplateExpression.css'



const data = {
    idade: 17,
    trabalho: "Professora de equitação"
}

//Array de strings
const skills = ["Trabalho em equipe", "Proatividade", "Razoablidade"];

const projects = [
    {name: "Professora equestre", tech: "ACT Horse (2 anos)"},
    {name: "Tratadora equestre", tech: "ACT Horse (3 anos)"},
    {name: "Programadora", tech: "SENAI (1 ano)"},
]

const TemplateExpression = () => {
  return (
    <div className="template-container">
        <h2>Ana Dâmaris Trindade de Oliveira</h2>
        <p>Cidade: Bariri-SP</p>
        <p>Email: ana.d.oliveira7@aluno.senai.br</p>
        <p>
            A idade atual é: {data.idade}
            <br/>
            O trabalho atual é: {data.trabalho}
        </p>

        <h4>Habilidades:</h4>
        <ul>
            {skills.map((skill) => (
                <li key={skill}>{skill} </li>
            ))}
        </ul>

        <h4>Experiências:</h4>
        <ul>
            {projects.map((project) => (
                <li key={project.name}>
                {project.name} - {project.tech}
                </li>

            ))}
        </ul>

    </div>
  )
}

export default TemplateExpression
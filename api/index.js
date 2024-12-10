// Exemplo de dados JSON
const tasks = [
  {
    "id": "0660b912-5dd6-4092-bf6e-4153ab31b490",
    "title": "Adicionar memória",
    "description": "",
    "date": null,
    "time": null,
    "status": false,
    "repeat": ""
  },
  {
    "id": "31128f4d-b1e3-4188-a11d-d356576ad490",
    "title": "Projeto A",
    "description": "",
    "date": "2024-12-11",
    "time": null,
    "status": true,
    "repeat": "diariamente"
  },
  // Adicione outros itens conforme necessário
];

export default function handler(req, res) {
  // Retornar os dados JSON para a requisição GET
  res.status(200).json(tasks);
}

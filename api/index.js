export default function handler(req, res) {
  const tasks = [
    {
      id: "0660b912-5dd6-4092-bf6e-4153ab31b490",
      title: "Adicionar memória ",
      description: "",
      date: null,
      time: null,
      status: false,
      repeat: "",
    },
    {
      "id": "0660b912-5dd6-4092-bf6e-4153ab31b490",
      "title": "Adicionar memória ",
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
    {
      "id": "7911ffde-5d3d-411a-9be6-45462526db4c",
      "title": "Projeto B",
      "description": "Descrever sistemas detalhadamente em grande escala de organização Descrever sistemas detalhadamente em grande escala de organização Descrever sistemas detalhadamente em grande escala de organização Descrever sistemas detalhadamente em grande escala de organização",
      "date": "2024-12-03",
      "time": "12:42",
      "status": false,
      "repeat": "diariamente"
    },
    {
      "id": "669accd1-5577-4c95-ac4f-8f389142247d",
      "title": "Projeto C",
      "description": "",
      "date": "2024-12-10",
      "time": null,
      "status": true,
      "repeat": ""
    },
    {
      "id": "464624ba-3f27-4c17-9ad8-9326e399342a",
      "title": "Backup Semanal",
      "description": "",
      "date": "2024-12-13",
      "time": null,
      "status": true,
      "repeat": "semanalmente"
    },
    {
      "id": "d303b58b-13c0-47a4-bee2-a535e06e5feb",
      "title": "Projeto B",
      "description": "Descrever sistemas detalhadamente em grande escala de organização",
      "date": null,
      "time": null,
      "status": true,
      "repeat": ""
    },
    {
      "id": "9fe9373c-b7f9-4fc0-a900-5ee6b73461aa",
      "title": "Backup Semanal",
      "description": "",
      "date": null,
      "time": null,
      "status": true,
      "repeat": ""
    },
    {
      "id": "20be7a65-1f5c-4a99-bac6-7091d4d03759",
      "title": "Projeto B",
      "description": "Descrever sistemas detalhadamente em grande escala de organização",
      "date": null,
      "time": null,
      "status": true,
      "repeat": ""
    },
    {
      "id": "312fd28a-06a2-457a-8ebf-fe3a6dbfab2e",
      "title": "Projeto A",
      "description": "",
      "date": null,
      "time": null,
      "status": true,
      "repeat": ""
    },
    {
      "id": "b5daee15-c41c-4c1c-a6ed-1e5ff04ae150",
      "title": "Backup Semanal",
      "description": "",
      "date": "2024-12-20",
      "time": null,
      "status": false,
      "repeat": "semanalmente"
    },
    {
      "id": "719c88b4-0b08-4974-ac1b-397df4460043",
      "title": "Projeto A",
      "description": "",
      "date": "2024-12-12",
      "time": null,
      "status": false,
      "repeat": "diariamente"
    },
    {
      "id": "f1f5ec16-81d4-4251-a799-ba5e015524d9",
      "title": "Fazer limpeza",
      "description": "",
      "date": "2024-12-18",
      "time": null,
      "status": false,
      "repeat": ""
    },
    {
      "id": "3cde1b04-f4a2-4031-ae20-1418de425a78",
      "title": "Cadastrar fornecedor",
      "description": "",
      "date": null,
      "time": "20:55",
      "status": false,
      "repeat": ""
    },
    // ... outros itens
  ];

  res.status(200).json(tasks);
}

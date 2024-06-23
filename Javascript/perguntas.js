document.addEventListener('DOMContentLoaded', function() {
    const perguntasDisponiveis = [
        'Fale um pouco sobre sua experiência profissional?',
        'Quais foram suas responsabilidades anteriores?',
        'Quais foram seus principais projetos ou realizações no seu emprego anterior?',
        'Por que você deixou seu emprego anterior?',
        'O que você aprendeu com suas experiências anteriores que pode aplicar nesta posição?',
        'Você teve alguma experiência de trabalho que não foi satisfatória?',
        'Como você descreveria sua trajetória profissional até agora?',
        'Quais foram seus maiores desafios no trabalho anterior?',
        'O que você busca em um novo emprego que não encontrou no seu emprego anterior?',
        'Você já teve alguma experiência em liderança?',
        'Quais são suas habilidades principais que podem contribuir para esta posição?',
        'Como você avalia suas habilidades técnicas?',
        'Quais habilidades você gostaria de desenvolver mais?',
        'Como você se mantém atualizado com as novas tecnologias/tendências da sua área?',
        'Você tem habilidades de comunicação eficazes?',
        'Como você lida com prazos apertados e pressão no trabalho?',
        'Você considera ter habilidades analíticas fortes?',
        'Como você prioriza seu trabalho e gerencia seu tempo?',
        'Quais são seus métodos para resolver problemas no trabalho?',
        'Como você lida com mudanças e novas situações no trabalho?',
        'Por que você está interessado nesta posição/empresa?',
        'O que o atraiu para se candidatar a esta vaga?',
        'O que te motiva a fazer um bom trabalho?',
        'O que você considera ser sua maior conquista profissional até agora?',
        'Como você define sucesso no trabalho?',
        'O que você procura em um ambiente de trabalho ideal?',
        'Quais são seus objetivos de carreira a longo prazo?',
        'Como você descreveria seu estilo de trabalho?',
        'Você prefere trabalhar de forma independente ou em equipe?',
        'Como você se adapta a diferentes tipos de personalidades no trabalho?',
        'Como você lida com feedback construtivo e críticas no trabalho?',
        'Quais são suas estratégias para construir e manter relacionamentos profissionais eficazes?',
        'Você considera ter habilidades de liderança?',
        'Como você motiva sua equipe?',
        'Você se considera um bom ouvinte?',
        'Como você gerencia conflitos no ambiente de trabalho?',
        'Quais são suas estratégias para garantir a qualidade do trabalho?',
        'Quais são seus valores profissionais mais importantes?',
        'Você já teve que tomar uma decisão difícil no trabalho?',
        'Como você mantém a confidencialidade das informações no trabalho?',
        'Como você prioriza a integridade em suas decisões e ações profissionais?',
        'Qual é sua formação acadêmica e como ela se relaciona com sua carreira atual?',
        'Quais cursos ou treinamentos adicionais você fez que são relevantes para esta posição?',
        'Você já teve que trabalhar em uma equipe diversificada?',
        'Como você incentiva a participação de todos em uma reunião de equipe?',
        'Como você define sucesso na sua carreira?',
        'Quais são suas metas de curto e médio prazo para sua carreira?',
        'Como você planeja alcançar suas metas de carreira?',
        'O que você valoriza em um ambiente de trabalho?',
        'Como você traz novas ideias para seu trabalho?',
        'Você já sugeriu alguma melhoria em um processo de trabalho?',
        'Como você se mantém produtivo enquanto trabalha remotamente?',
        'Que desafios você enfrenta ao trabalhar remotamente?',
        'Como você mantém a colaboração e a comunicação com sua equipe enquanto trabalha remotamente?',
        'Você prefere trabalhar em um escritório ou remotamente?',
        'Como você equilibra suas responsabilidades profissionais e pessoais?',
        'Que medidas você toma para evitar o esgotamento no trabalho?',
        'O que você faz para relaxar fora do ambiente de trabalho?',
        'Idade?',
        'Qual sua idade?',
        'Que idade você tem?',
        'Nasceu?',
        'Data de nacimento?',
        'Seu nome?',
        'Me dis seu nome?',
        'Olá?',
        'Oi tudo bem?',
        'Oi?',
        'Tudo bem?',
        'Poderia me ajudar?',
        'Me conte um pouco sobre você?',
        'Fale sobre você?',
        'Oque você e?',
        'Quem você e?',
        'Como você esta?',
        'Sim estou bem?',
        'Sim e com você?'
    ];

    const userInputElement = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-box');

    userInputElement.addEventListener('input', function() {
        const userInputValue = userInputElement.value.toLowerCase().trim();

        // Filtra as perguntas disponíveis baseadas no que foi digitado
        const perguntasFiltradas = perguntasDisponiveis.filter(pergunta =>
            pergunta.toLowerCase().includes(userInputValue)
        );

        // Limpa o chat-box
        chatBox.innerHTML = '';

        // Exibe as perguntas filtradas
        perguntasFiltradas.forEach(pergunta => {
            const perguntaElemento = document.createElement('div');
            perguntaElemento.classList.add('pergunta-sugerida');
            perguntaElemento.textContent = pergunta;
            perguntaElemento.addEventListener('click', function() {
                // Ao clicar em uma pergunta sugerida, preenche o input
                userInputElement.value = pergunta;
                chatBox.innerHTML = ''; // Limpa o chat-box após selecionar
            });
            chatBox.appendChild(perguntaElemento);
        });
    });
});

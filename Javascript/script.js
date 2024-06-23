document.addEventListener('DOMContentLoaded', function() {
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
    const chatBox = document.getElementById('chat-box');

    function sendMessage() {
        const message = userInput.value.trim();
        if (message !== '') {
            appendMessage('user', message);
            processMessage(message.toLowerCase());
            userInput.value = '';
            sendButton.classList.remove('show'); // Esconde o botão após o envio
        }
    }

    function appendMessage(sender, message) {
        const messageElement = document.createElement('p');
        messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
        messageElement.textContent = message;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;

        // Adicionando animação de entrada
        messageElement.style.opacity = 0;
        messageElement.style.transform = 'translateY(20px)';
        setTimeout(() => {
            messageElement.style.transition = 'opacity 0.5s, transform 0.5s';
            messageElement.style.opacity = 1;
            messageElement.style.transform = 'translateY(0)';
        }, 10);
    }

    function processMessage(message) {
        let reply = '';


    if (message.includes('fale um pouco sobre sua experiência profissional')) {
        reply = 'Com prazer! Ao longo da minha carreira, acumulei uma sólida experiência em [sua área de atuação], onde tive a oportunidade de trabalhar em diversas empresas e projetos desafiadores. Comecei minha trajetória profissional na [empresa anterior ou área], onde desenvolvi habilidades fundamentais em [mencione áreas específicas, como desenvolvimento de software, gestão de projetos, etc Durante [número de anos] na [empresa anterior], fui responsável por [destaque suas principais responsabilidades e conquistas relevantes para a posição]. Um dos projetos mais significativos que conduzi foi [descreva brevemente um projeto relevante e seu impacto]. Esta experiência me permitiu aprimorar minha capacidade de [habilidades relevantes para a posição], além de fortalecer minha habilidade em [outra habilidade relevante]. Recentemente, na [empresa atual ou experiência mais recente], concentrei-me em [destaque novas responsabilidades ou desafios enfrentados]. Estou particularmente orgulhoso de [destaque uma realização recente relevante para a posição], onde pude demonstrar minha habilidade em [habilidade específica]. Além das minhas experiências profissionais formais, também valorizo muito a aprendizagem contínua e o desenvolvimento pessoal. Estou constantemente buscando oportunidades para me aprimorar em [mencione áreas de interesse relacionadas à posição]. Estou animado para trazer essa bagagem de experiência e conhecimento para [nome da empresa ou equipe], onde estou confiante de que posso contribuir significativamente para [objetivo ou desafio da empresa].';
    } 
    
    else if (message.includes('quais foram suas responsabilidades anteriores')) {
        reply = 'Claro, ao longo da minha carreira, acumulei experiências diversas que me proporcionaram oportunidades significativas de crescimento e contribuição. Na minha posição anterior na [nome da empresa], minhas responsabilidades principais eram [descreva brevemente suas responsabilidades]. Eu era responsável por [lista suas principais responsabilidades em pontos específicos], o que incluía [destaque algumas responsabilidades específicas relevantes para a vaga]. Durante meu tempo lá, também tive a oportunidade de liderar [se aplicável, mencione projetos ou equipes que liderou] e trabalhar de perto com [mencione colaboradores ou departamentos com os quais interagiu]. Um aspecto que eu valorizava muito era [destaque um aspecto particular da sua função anterior que seja relevante para a posição atual, como resolução de problemas, tomada de decisões estratégicas, gestão de projetos, etc.]. Esta experiência me permitiu desenvolver habilidades sólidas em [mencione habilidades específicas, como organização, comunicação, resolução de problemas, etc.]. Estou empolgado com a oportunidade de trazer essa experiência para [nome da empresa ou equipe], onde estou confiante de que posso contribuir de maneira significativa e continuar aprendendo e crescendo profissionalmente.';
    } 
    
    else if (message.includes('quais foram seus principais projetos ou realizações no seu emprego anterior')) {
        reply = 'Atualmente, trabalho na Ype como operador de máquina. Até o momento, minhas principais realizações se concentram na produção de produtos.';
    } 
    
    else if (message.includes('por que você deixou seu emprego anterior')) {
        reply = 'Atualmente, continuo empregado na Ype, desempenhando a função de operador de máquina.';
    } 
    
    else if (message.includes('o que você aprendeu com suas experiências anteriores que pode aplicar nesta posição')) {
        reply = 'Possuo experiência em diversas áreas, como reposição de produtos, trabalho em frigorífico, atendimento como caixa e vendas. Atualmente, atuo como operador de máquina e estou em transição para a carreira de desenvolvedor de software, Estou desenvolvendo habilidades em diversas tecnologias relevantes para desenvolvimento, como HTML, CSS, JavaScript, entre outras.';
    } 
    
    else if (message.includes('você teve alguma experiência de trabalho que não foi satisfatória')) {
        reply = 'Cada etapa da minha trajetória profissional contribuiu para o meu crescimento. Portanto, considero todas essas experiências importantes para o meu desenvolvimento pessoal e profissional.';
    } 
    
    else if (message.includes('como você descreveria sua trajetória profissional até agora')) {
        reply = 'Minha trajetória profissional até agora tem sido marcada por uma busca contínua por novas oportunidades e aprendizados. Comecei como empacotador em um mercado, depois atuei como repositor em outro mercado. Em busca de melhores condições salariais, trabalhei em um frigorífico e posteriormente retornei ao cargo de repositor, desta vez de frutas. Em seguida, assumi o papel de vendedor em uma loja de materiais elétricos. Atualmente, estou na Ype, onde cresci para a posição de operador de máquina 2. Cada experiência foi importante para meu desenvolvimento e me preparou para os desafios futuros.';
    } 
    
    else if (message.includes('quais foram seus maiores desafios no trabalho anterior')) {
        reply = 'Até o momento, sinto que ainda não enfrentei um desafio significativo que me proporcione crescimento pessoal e profissional. Estou em busca de novas oportunidades que me desafiem e me permitam desenvolver ainda mais minhas habilidades.';
    } 
    
    else if (message.includes('o que você busca em um novo emprego que não encontrou no seu emprego anterior')) {
        reply = 'Estou em busca de mais conhecimento e crescimento profissional na área em que desejo seguir, que é desenvolvimento de software';
    } 
    
    else if (message.includes('você já teve alguma experiência em liderança')) {
        reply = 'Até o momento, não tive experiência em liderança, mas no futuro, com o ganho de mais experiência, gostaria de ter essa oportunidade.';
    } 
    
    else if (message.includes('quais são suas habilidades principais que podem contribuir para esta posição')) {
        reply = 'Tenho facilidade em aprender novos conceitos e estou atualmente estudando programação, incluindo HTML, CSS, JavaScript e Java. Além disso, pretendo aprender novas linguagens assim que concluir meu curso atual.';
    } 
    
    else if (message.includes('como você avalia suas habilidades técnicas')) {
        reply = 'Como programador, ainda estou no início da minha jornada e desenvolvi apenas projetos pessoais até o momento para aprimorar minhas habilidades. Estou dedicando esforços para melhorar minhas competências na área.';
    } 
    
    else if (message.includes('quais habilidades você gostaria de desenvolver mais')) {
        reply = 'Tenho o desejo de aprender profundamente sobre programação e explorar várias linguagens diferentes, com o objetivo de me tornar um desenvolvedor competente e versátil.';
    } 
    
    else if (message.includes('como você se mantém atualizado com as novas tecnologias/tendências da sua área')) {
        reply = 'Estou constantemente buscando novos conhecimentos na área tecnológica para me manter atualizado e informado.';
    } 
    
    else if (message.includes('você tem habilidades de comunicação eficazes')) {
        reply = 'Estou desenvolvendo habilidades de comunicação eficazes à medida que estudo análise e desenvolvimento de sistemas e programação. A comunicação é fundamental na colaboração com equipes de desenvolvimento e na compreensão das necessidades dos usuários finais dos sistemas que desenvolvemos.';
    } 
    
    else if (message.includes('como você lida com prazos apertados e pressão no trabalho')) {
        reply = 'Eu lido bem com prazos apertados e pressão no trabalho ao manter a organização, priorizando tarefas e mantendo uma comunicação clara com a equipe. Isso me ajuda a focar no que é mais importante e a entregar resultados de qualidade dentro dos prazos estabelecidos.';
    } 
    
    else if (message.includes('você considera ter habilidades analíticas fortes')) {
        reply = 'Com base no meu conhecimento em análise e desenvolvimento de sistemas, posso responder que sim, considero ter habilidades analíticas fortes. Estou constantemente utilizando métodos analíticos para compreender problemas complexos, identificar requisitos e propor soluções eficientes dentro do desenvolvimento de sistemas e programação.';
    } 
    
    else if (message.includes('como você prioriza seu trabalho e gerencia seu tempo')) {
        reply = 'Eu priorizo meu trabalho definindo claramente as tarefas por sua importância e urgência. Uso listas de afazeres e calendários para organizar minhas atividades diárias e semanais, garantindo que cumpra prazos e entregue resultados de qualidade.';
    } 
    
    else if (message.includes('quais são seus métodos para resolver problemas no trabalho')) {
        reply = 'Antes de iniciar qualquer ação, busco entender claramente qual é o problema para evitar soluções precipitadas. Caso tenha dúvidas ou incertezas, busco estudar e realizar pesquisas para encontrar a melhor maneira de resolver a questão de forma eficaz.';
    } 
    
    else if (message.includes('como você lida com mudanças e novas situações no trabalho')) {
        reply = 'Eu valorizo mudanças dentro de uma empresa, pois acredito que são oportunidades de melhorar e evoluir tanto para a organização quanto para mim. Acredito que mudanças positivas na companhia podem resultar em melhorias significativas, e por isso, vejo as mudanças como algo positivo e benéfico.';
    } 
    
    else if (message.includes('por que você está interessado nesta posição/empresa')) {
        reply = 'Sempre tive interesse em tecnologia desde os meus 17 anos, quando fiz um curso de hardware. Tenho uma afinidade natural com tecnologia e sinto prazer em trabalhar com algo que realmente gosto.';
    } 
    
    else if (message.includes('o que o atraiu para se candidatar a esta vaga')) {
        reply = 'Tenho uma forte atração pela tecnologia.';
    } 
    
    else if (message.includes('o que te motiva a fazer um bom trabalho')) {
        reply = 'Sou motivado pela determinação de aplicar o melhor dos meus conhecimentos e pela busca contínua por aprendizagem.';
    } 
    
    else if (message.includes('o que você considera ser sua maior conquista profissional até agora')) {
        reply = 'Até o momento, considero que minha maior conquista foi minha promoção dentro da empresa onde trabalho atualmente.';
    } 
    
    else if (message.includes('como você define sucesso no trabalho')) {
        reply = 'Eu acredito que o reconhecimento tanto individual quanto da equipe é fundamental. Um ambiente onde todos se sentem valorizados contribui significativamente para a qualidade do trabalho.';
    } 
    
    else if (message.includes('o que você procura em um ambiente de trabalho ideal')) {
        reply = 'Responsabilidade, qualidade, equilíbrio e parceria são fundamentais para o sucesso conjunto.';
    } 
    
    else if (message.includes('quais são seus objetivos de carreira a longo prazo')) {
        reply = 'Tenho o objetivo de me tornar um programador habilidoso e excelente.';
    } 
    
    else if (message.includes('como você descreveria seu estilo de trabalho')) {
        reply = 'Busco sempre ser eficiente em todas as minhas atividades e colaborar em equipe para o desenvolvimento de projetos com eficiência e qualidade.';
    } 
    
    else if (message.includes('você prefere trabalhar de forma independente ou em equipe')) {
        reply = 'Não possuo preferência específica.';
    } 
    
    else if (message.includes('como você se adapta a diferentes tipos de personalidades no trabalho')) {
        reply = 'Eu trato todos com respeito de maneira consistente e respeitosa.';
    } 
    
    else if (message.includes('como você lida com feedback construtivo e críticas no trabalho')) {
        reply = 'Eu aprecio receber feedback, pois valorizo a oportunidade de identificar áreas onde posso melhorar e buscar constantemente a excelência em minhas atividades. Sou receptivo a críticas construtivas no ambiente de trabalho.';
    } 
    
    else if (message.includes('quais são suas estratégias para construir e manter relacionamentos profissionais eficazes')) {
        reply = 'Comunicação clara: Asseguro que a comunicação seja aberta e direta para evitar mal-entendidos. Empatia: Procuro compreender as necessidades e perspectivas dos colegas para colaborar de maneira eficaz. Colaboração: Trabalho em equipe, valorizando as contribuições de todos para alcançar objetivos comuns. Respeito: Demonstro respeito pelas opiniões e habilidades dos outros, promovendo um ambiente de trabalho positivo. Feedback: Busco e dou feedback de forma construtiva para promover o desenvolvimento pessoal e profissional mútuo.';
    } 
    
    else if (message.includes('você considera ter habilidades de liderança')) {
        reply = 'Nunca considerei isso antes, mas acredito que com o conhecimento adequado eu poderia me tornar um líder eficaz.';
    } 
    
    else if (message.includes('como você motiva sua equipe')) {
        reply = 'Eu motivação a minha equipe ao reconhecer e apoiar o que é bom para eles. Acredito que incentivar um ambiente onde todos possam prosperar e alcançar seus objetivos individuais contribui significativamente para a motivação coletiva.';
    } 
    
    else if (message.includes('você se considera um bom ouvinte')) {
        reply = 'Sim.';
    } 
    
    else if (message.includes('como você gerencia conflitos no ambiente de trabalho')) {
        reply = 'Eu gerencio conflitos no ambiente de trabalho tentando entender o que aconteceu e oferecendo aconselhamento quando necessário. Procuro facilitar a comunicação aberta entre as partes envolvidas para encontrar soluções que promovam um ambiente harmonioso e produtivo.';
    } 
    
    else if (message.includes('quais são suas estratégias para garantir a qualidade do trabalho')) {
        reply = 'Planejamento detalhado: Eu me certifico de entender completamente os requisitos e objetivos do projeto antes de começar.';
    } 
    
    else if (message.includes('quais são seus valores profissionais mais importantes')) {
        reply = 'Os meus valores profissionais mais importantes incluem: Integridade: Pratico a honestidade e transparência em todas as interações profissionais. Respeito: Valorizo a diversidade de opiniões e culturas, tratando todos com respeito e dignidade. Comprometimento: Sou dedicado e comprometido em alcançar os objetivos da organização e entregar resultados de alta qualidade. Colaboração: Acredito na importância do trabalho em equipe e na criação de um ambiente colaborativo para alcançar metas comuns. Aprendizado contínuo: Busco oportunidades de crescimento e aprendizado para melhorar minhas habilidades e conhecimentos constantemente.';
    } 
    
    else if (message.includes('você já teve que tomar uma decisão difícil no trabalho')) {
        reply = 'Não.';
    } 
    
    else if (message.includes('como você mantém a confidencialidade das informações no trabalho')) {
        reply = 'Sim.';
    } 
    
    else if (message.includes('como você prioriza a integridade em suas decisões e ações profissionais')) {
        reply = 'Sim.';
    } 
    
    else if (message.includes('qual é sua formação acadêmica e como ela se relaciona com sua carreira atual')) {
        reply = 'Minha experiência atual não está diretamente relacionada à minha formação atual em Análise e Desenvolvimento de Sistemas, na qual estou cursando.';
    } 
    
    else if (message.includes('quais cursos ou treinamentos adicionais você fez que são relevantes para esta posição')) {
        reply = 'Além da minha formação em Análise e Desenvolvimento de Sistemas, tenho investido constantemente em cursos e treinamentos adicionais relevantes para minha carreira. Concluí cursos como Hardware e TI do Zero ao Pro, que ampliaram minha compreensão sobre infraestrutura e operações de TI. Também realizei cursos introdutórios à programação, que solidificaram meus fundamentos nessa área crucial. Adicionalmente, busquei aprimorar minhas habilidades em inteligência artificial, participando de cursos que exploram tanto a teoria quanto a aplicação prática dessa tecnologia emergente. Para ampliar minha capacidade como desenvolvedor, concluí um curso abrangente de Desenvolvedor Full Stack Java, que me proporcionou uma visão completa do desenvolvimento de software orientado a sistemas web. Recentemente, fiz um curso específico em Inteligência Artificial focado em elevar a produtividade e acelerar minha trajetória profissional. Esses cursos não apenas complementam minha formação acadêmica, mas também me capacitam a contribuir de forma significativa para a posição que estou buscando.';
    } 

    else if (message.includes('você já teve que trabalhar em uma equipe diversificada')) {
        reply = 'Sim, como operador de máquina, trabalho em uma linha de produção específica, mas também cubro máquinas em outras linhas. Isso me proporciona a oportunidade de interagir e colaborar com diferentes pessoas além da minha equipe principal.';
    } 
    
    else if (message.includes('como você incentiva a participação de todos em uma reunião de equipe')) {
        reply = 'Eu tento mostrar a importância de todos, encorajando cada um a apresentar seus pontos de vista para que possamos colaborar na melhoria contínua do trabalho de todos.';
    } 
    
    else if (message.includes('como você define o sucesso na sua carreira')) {
        reply = 'Não posso afirmar, pois ainda não estou empregado na minha área de formação.';
    } 
    
    else if (message.includes('quais são suas metas de curto e médio prazo para sua carreira')) {
        reply = 'Eu desejo trabalhar em uma empresa que me proporcione oportunidades para ampliar meus conhecimentos e habilidades. A longo prazo, meu objetivo é me tornar um membro essencial para o crescimento e sucesso dessa empresa.';
    } 
    
    else if (message.includes('como você planeja alcançar suas metas de carreira')) {
        reply = 'Estudando e ganhado conhecimentos.';
    } 
    
    else if (message.includes('o que você valoriza em um ambiente de trabalho')) {
        reply = 'harmonia qualidade excelência e dedicação.';
    } 
    
    else if (message.includes('como você traz novas ideias para seu trabalho')) {
        reply = 'Eu analiso o que é necessário, buscando soluções, e então surgem ideias para resolver o problema.';
    } 
    
    else if (message.includes('você já sugeriu alguma melhoria em um processo de trabalho')) {
        reply = 'Sim.';
    }   
    
    else if (message.includes('como você se mantém produtivo enquanto trabalha remotamente')) {
        reply = 'Foco no trabalho.';
    } 
    
    else if (message.includes('que desafios você enfrenta ao trabalhar remotamente')) {
        reply = 'Não sei dizer pois nunca trabalhei remotamente ainda.';
    } 
    
    else if (message.includes('como você mantém a colaboração e a comunicação com sua equipe enquanto trabalha remotamente')) {
        reply = 'Trabalhando dura e com foco e sempre em comunicação.';
    } 
    
    else if (message.includes('você prefere trabalhar em um escritório ou remotamente')) {
        reply = 'Remotamente mas no escritório e legal, para tirar duvidas com outras pessoas.';
    } 

    else if (message.includes('como você equilibra suas responsabilidades profissionais e pessoais')) {
        reply = 'Sempre focado no trabalho quando estou nele, mas fora dele, não ocupo minha mente com questões profissionais.';
    } 
    
    else if (message.includes('que medidas você toma para evitar o esgotamento no trabalho')) {
        reply = 'não ocupo minha mente com questões profissionais, fora do trabalho.';
    } 
    
    else if (message.includes('o que você faz para relaxar fora do ambiente de trabalho')) {
        reply = 'Descanso e relaxo.';
    } 

    else if (message.includes('idade')) {
        reply = 'Eu tenho 29.';
    } 

    else if (message.includes('qual sua idade')) {
        reply = 'Eu tenho 29.';
    } 

    else if (message.includes('que idade voce tem')) {
        reply = 'Eu tenho 29.';
    } 

    else if (message.includes('que idade você tem')) {
        reply = 'Eu tenho 29.';
    } 

    else if (message.includes('que idade vc tem')) {
        reply = 'Eu tenho 29.';
    } 

    else if (message.includes('nasceu')) {
        reply = '05/07/1994.';
    } 

    else if (message.includes('data de nacimento')) {
        reply = '05/07/1994.';
    }

    else if (message.includes('seu nome')) {
        reply = 'Ewerton Luiz e Silva.';
    }

    else if (message.includes('me dis seu nome')) {
        reply = 'Ewerton Luiz e Silva.';
    }

    else if (message.includes('olá')) {
        reply = 'Olá tudo bem com você?.';
    }

    else if (message.includes('ola')) {
        reply = 'Olá tudo bem com você?.';
    }

    else if (message.includes('oi tudo bem')) {
        reply = 'Olá tudo e com você?.';
    }

    else if (message.includes('oi')) {
        reply = ' Oi tudo bem com você? .';
    }

    else if (message.includes('tudo bem')) {
        reply = 'Sim, e com você ?.';
    }

    else if (message.includes('Tudo bem')) {
        reply = 'Sim, e com você ?.';
    }

    else if (message.includes('poderia me ajudar')) {
        reply = 'Sim, como posso te ajudar ?.';
    }

    else if (message.includes('me conte um pouco sobre voce')) {
        reply = 'Meu nome e Ewerton , tenho 2 Filhos Logan e Lian uma esposa chamada Valeria , trabalho na Ype como Operador de maquina.';
    }

    else if (message.includes('me conte um pouco sobre você')) {
        reply = 'Meu nome e Ewerton , tenho 2 Filhos Logan e Lian uma esposa chamada Valeria , trabalho na Ype como Operador de maquina.';
    }

    else if (message.includes('me conte um pouco sobre vc')) {
        reply = 'Meu nome e Ewerton , tenho 2 Filhos Logan e Lian uma esposa chamada Valeria , trabalho na Ype como Operador de maquina.';
    }

    else if (message.includes('fale sobre você')) {
        reply = 'Meu nome e Ewerton , tenho 2 Filhos Logan e Lian uma esposa chamada Valeria , trabalho na Ype como Operador de maquina.';
    }

    else if (message.includes('fale sobre voce')) {
        reply = 'Meu nome e Ewerton , tenho 2 Filhos Logan e Lian uma esposa chamada Valeria , trabalho na Ype como Operador de maquina.';
    }

    else if (message.includes('fale sobre vc')) {
        reply = 'Meu nome e Ewerton , tenho 2 Filhos Logan e Lian uma esposa chamada Valeria , trabalho na Ype como Operador de maquina.';
    }

    else if (message.includes('oque você e')) {
        reply = 'Sou um assistente virtual do Ewerton posso te responder coisas sobre ele.';
    }

    else if (message.includes('oque voce e')) {
        reply = 'Sou um assistente virtual do Ewerton posso te responder coisas sobre ele.';
    }

    else if (message.includes('oque vc e')) {
        reply = 'Sou um assistente virtual do Ewerton posso te responder coisas sobre ele.';
    }

    else if (message.includes('quem você e')) {
        reply = 'Sou um assistente virtual do Ewerton posso te responder coisas sobre ele.';
    }

    else if (message.includes('quem voce e')) {
        reply = 'Sou um assistente virtual do Ewerton posso te responder coisas sobre ele.';
    }

    else if (message.includes('quem vc e')) {
        reply = 'Sou um assistente virtual do Ewerton posso te responder coisas sobre ele.';
    }

    else if (message.includes('como voce esta')) {
        reply = 'Estou muito bem, gostaria de ajuda ?.';
    }

    else if (message.includes('como você esta')) {
        reply = 'Estou muito bem, gostaria de ajuda ?.';
    }

    else if (message.includes('como vc esta')) {
        reply = 'Estou muito bem, gostaria de ajuda ?.';
    }

    else if (message.includes('sim estou bem')) {
        reply = 'Fico feliz que esteja bem. No que posso te ajudar?';
    }

    else if (message.includes('sim e com vc')) {
        reply = 'Fico feliz que esteja bem. No que posso te ajudar?';
    }

    else if (message.includes('sim e com voce')) {
        reply = 'Fico feliz que esteja bem. No que posso te ajudar?';
    }

    else if (message.includes('sim e com você')) {
        reply = 'Fico feliz que esteja bem. No que posso te ajudar?';
    }

    else if (message.includes('você e casado')) {
        reply = 'Sim, sou muito bem casado';
    }

    else if (message.includes('voce e casado')) {
        reply = 'Sim, sou muito bem casado';
    }

    else if (message.includes('vc e casado')) {
        reply = 'Sim, sou muito bem casado';
    }

    else if (message.includes('a quanto tempo e casado')) {
        reply = 'Eu sou casado a 8 anos';
    }

    else if (message.includes('esta casado a quanto tempo')) {
        reply = 'Eu sou casado a 8 anos';
    }

    else if (message.includes('a quanto tempo estão juntos')) {
        reply = 'Estamos juntos a 10 anos';
    }

    else if (message.includes('estao juntos a quanto tempo')) {
        reply = 'Estamos juntos a 10 anos';
    }

    else if (message.includes('estão juntos a quanto tempo')) {
        reply = 'Estamos juntos a 10 anos';
    }

    else if (message.includes('a quanto tempo estao juntos')) {
        reply = 'Estamos juntos a 10 anos';
    }

    else if (message.includes('oque você mas gosta de fazer')) {
        reply = 'Gosto de escutar musicas, estudar,  adoro computadores, jogar entre outras coisas ';
    }

    else if (message.includes('oque voce mas gosta de fazer')) {
        reply = 'Gosto de escutar musicas, estudar,  adoro computadores, jogar entre outras coisas ';
    }

    else if (message.includes('oque vc mas gosta de fazer')) {
        reply = 'Gosto de escutar musicas, estudar, adoro computadores, jogar entre outras coisas ';
    }

    else if (message.includes('desenvolvido')) {
        reply = 'Fui criado para ajudar meu criador, com o seu desenvolvimento em programaçao';
    }

    else if (message.includes('em que trabalha atualmente')) {
        reply = 'Eu trabalho como operador de maquina';
    }

    else if (message.includes('qual sua sua profissão atualmente')) {
        reply = 'Atualmente sou operador de maquina';
    }
    
    else {
        reply = 'Desculpe, não consegui entender a sua pergunta. Pode reformular ou fazer outra?';
    }


    setTimeout(() => appendMessage('bot', reply), 500);
}

userInput.addEventListener('input', function() {
    if (userInput.value.trim() !== '') {
        sendButton.classList.add('show'); // Adiciona a classe 'show' para exibir o botão com animação
    } else {
        sendButton.classList.remove('show'); // Remove a classe 'show' para esconder o botão
    }
});

sendButton.addEventListener('click', function() {
    sendMessage();
});

userInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

const toggleButton = document.getElementById('toggle-list-btn');
const listaDiv = document.querySelector('.lista');

toggleButton.addEventListener('click', function() {
    listaDiv.classList.toggle('show');
    if (listaDiv.classList.contains('show')) {
        toggleButton.textContent = ' < ';
    } else {
        toggleButton.textContent = ' > ';
    }
});

listaDiv.addEventListener('wheel', (e) => {
    e.preventDefault();
    const delta = Math.max(-1, Math.min(1, (e.deltaY || -e.detail)));
    listaDiv.scrollLeft -= (delta * 40);
});
});

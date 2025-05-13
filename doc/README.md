# concurso-banco-brasil-ti

## 📈 Gestão de Estudos

<a href="https://www.notion.so/154e31f45426811f95d3e4522fdf9298?v=154e31f45426810c9af4000c7a64e002" target="_blank">📊 Kanban Board no Notion</a>

<a href="https://quizlet.com/user/Welbert_Soares/folders/banco-do-brasil?i=6jvs8z&x=1xqt" target="_blank">🗂️ Flashcards no Quizlet</a>

## 📊 Sistema de Gestão

### 📋 Dashboards Diários
- Localização: `dashboards/YYYY-MM/dashboard-YYYY-MM-DD.md`
- Criação automática: Execute `tools/criar-dashboard.bat`
- Acompanhamento diário de:
  - Objetivos e metas
  - Cronograma detalhado
  - Diagnóstico rápido
  - Anotações importantes
  - Progresso das atividades
  - Autoavaliação

### 📈 Métricas de Progresso
- Arquivo: `metricas-progresso.md`
- Acompanhamento de:
  - Desempenho por disciplina
  - Histórico de simulados
  - Tempo de estudo
  - Metas semanais

## 📚 Plano de Estudos

| Dia         | Disciplina 1 (Peso Maior)      | Disciplina 2 (Peso Menor)   | Redação                     |
| ----------- | ------------------------------ | --------------------------- | --------------------------- |
| **Segunda** | Tecnologia da Informação       | Língua Inglesa              | Estudo de temas e estrutura |
| **Terça**   | Língua Portuguesa              | Probabilidade e Estatística | Escrever uma redação        |
| **Quarta**  | Tecnologia da Informação       | Atualidades do Mercado      | Correção/redação anterior   |
| **Quinta**  | Conhecimentos Bancários        | Matemática                  | Estudo de temas e estrutura |
| **Sexta**   | Tecnologia da Informação       | Língua Portuguesa           | Escrever uma redação        |
| **Sábado**  | Revisão (todas as disciplinas) | Simulado parcial            | Correção/redação anterior   |
| **Domingo** | Descanso ou revisão leve       | -                           | -                           |

## 🗂️ Organização do Projeto

### 📁 Estrutura de Pastas
```
concurso-banco-brasil-ti/
├── 📊 dashboards/                    # Gestão diária dos estudos
│   ├── _template_dashboard.md        # Template para novos dashboards
│   └── YYYY-MM/                      # Organizados por mês
├── 📈 metricas-progresso.md         # Acompanhamento geral
├── 📝 anotacoes/
│   ├── exercicios/                   # Prática e exercícios
│   │   ├── _template_exercicios.md
│   │   ├── _template_flash_cards.md
│   │   └── [disciplina]/
│   └── resumos/                      # Resumos das aulas
│       ├── _template_aula.md
│       └── [tema].md
├── 📚 passo-a-passo/                # Material base em PDF
│   ├── ingles/
│   ├── matematica/
│   └── tecnologia-da-informacao/
├── ✍️ redacoes/                     # Prática de redação
│   └── _template_redacao.md
├── 📊 simulados/                    # Provas e correções
└── 🛠️ tools/                       # Scripts úteis
    └── criar-dashboard.bat          # Gerador de dashboard
```

### 📖 Fluxo de Trabalho Diário

1. **Início do Dia**
   - Execute `tools/criar-dashboard.bat`
   - Preencha objetivos e cronograma
   - Revise pontos de atenção

2. **Durante os Estudos**
   - Use templates apropriados para cada atividade
   - Mantenha o dashboard atualizado
   - Registre aprendizados e dúvidas

3. **Final do Dia**
   - Complete a autoavaliação
   - Atualize métricas de progresso
   - Prepare pontos para o dia seguinte

### 🔄 Ciclo de Revisão

1. **Diário**
   - Flash cards dos temas estudados
   - Resolução de exercícios
   - Atualização do dashboard

2. **Semanal**
   - Simulados parciais
   - Revisão de tópicos fracos
   - Atualização de métricas

3. **Mensal**
   - Análise de progresso
   - Ajuste de estratégias
   - Revisão geral

### 💡 Dicas de Uso

1. **Templates Disponíveis**
   - `_template_dashboard.md`: Gestão diária
   - `_template_aula.md`: Resumos de aula
   - `_template_exercicios.md`: Prática
   - `_template_flash_cards.md`: Memorização
   - `_template_redacao.md`: Redações

2. **Boas Práticas**
   - Mantenha os dashboards atualizados
   - Use os templates consistentemente
   - Faça commits frequentes
   - Revise métricas semanalmente

3. **Ferramentas Integradas**
   - Notion: Gestão geral do projeto
   - Quizlet: Flash cards online
   - Git: Versionamento do material

### 🎯 Metas e Acompanhamento

- Use `metricas-progresso.md` para visão geral
- Revise dashboards anteriores para análise de progresso
- Mantenha estatísticas de acertos/erros
- Acompanhe tempo de estudo por disciplina

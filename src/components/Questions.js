import grafico1 from "./img/grafico1.png"
import grafico2 from "./img/grafico2.png"
import grafico3 from "./img/grafico3.png"
import grafico4 from "./img/grafico4.png"
import grafico5 from "./img/grafico5.png"
import grafico6 from "./img/grafico6.png"
import grafico7 from "./img/grafico7.png"

export const questions = {
  // Questões Fáceis
  easy: [
    {
      question: "Qual é o símbolo usado para indicar que um elemento pertence a um conjunto?",
      options: ["⊂", "∈", "∪", "∅"],
      answer: "∈",
      hint: "O símbolo que indica que um elemento faz parte de um conjunto é comumente usado em teoria dos conjuntos."
    },
    {
      question: "O conjunto A = {1, 2, 3} tem quantos subconjuntos?",
      options: ["6", "7", "8", "9"],
      answer: "8",
      hint: "Use a fórmula 2^n, onde n é o número de elementos do conjunto."
    },
    {
      question: "Se A = {1, 2, 3} e B = {3, 4, 5}, então A ∩ B é:",
      options: ["{1, 2}", "{3}", "{1, 2, 3, 4, 5}", "{ }"],
      answer: "{3}",
      hint: "A interseção entre dois conjuntos retorna apenas os elementos que estão em ambos os conjuntos."
    },
    {
      question: "Se A = {1, 2, 3} e B = {2, 3, 4}, então A ∪ B é:",
      options: ["{1, 2, 3}", "{1, 2, 3, 4}", "{2, 3}", "{1, 3}"],
      answer: "{1, 2, 3, 4}",
      hint: "A união de dois conjuntos inclui todos os elementos de ambos os conjuntos, sem repetição."
    },
    {
      question: "O conjunto {x ∈ ℕ | x < 5} é igual a:",
      options: ["{0, 1, 2, 3, 4}", "{1, 2, 3, 4, 5}", "{1, 2, 3, 4}", "{0, 1, 2, 3}"],
      answer: "{0, 1, 2, 3, 4}",
      hint: "ℕ representa os números naturais, que começam do 0 e continuam infinitamente."
    },
    {
      question: "Qual é a interseção entre os conjuntos A = {a, b, c} e B = {b, c, d}?",
      options: ["{a, b, c}", "{b, c}", "{a, c}", "{a, d}"],
      answer: "{b, c}",
      hint: "A interseção é o conjunto de elementos que estão em ambos os conjuntos."
    },
    {
      question: "A diferença entre A = {1, 2, 3} e B = {2, 3, 4} é:",
      options: ["{1}", "{2, 3}", "{1, 4}", "{3, 4}"],
      answer: "{1}",
      hint: "A diferença entre dois conjuntos retorna os elementos que estão no primeiro conjunto, mas não no segundo."
    },
    {
      question: "Qual é o complemento de A = {1, 2, 3} em relação ao universo {1, 2, 3, 4, 5}?",
      options: ["{4, 5}", "{1, 2}", "{3, 4, 5}", "{1, 3, 4}"],
      answer: "{4, 5}",
      hint: "O complemento de um conjunto em relação a um universo é composto pelos elementos do universo que não estão no conjunto."
    },
    {
      question: "O que é um conjunto vazio?",
      options: ["{ }", "{0}", "{}", "{1}"],
      answer: "{ }",
      hint: "Um conjunto vazio não contém nenhum elemento."
    },
    {
      question: "Quantos elementos tem o conjunto A = {1, 2, 3, 4}?",
      options: ["3", "4", "5", "6"],
      answer: "4",
      hint: "O número de elementos de um conjunto é a sua cardinalidade."
    },
    {
      question: "A interseção de {a, b} e {b, c} é:",
      options: ["{a, b, c}", "{b}", "{a}", "{c}"],
      answer: "{b}",
      hint: "A interseção é composta pelos elementos que aparecem nos dois conjuntos."
    },
    {
      question: "A união de {1, 2} e {2, 3} é:",
      options: ["{1, 2, 3}", "{1, 2}", "{2, 3}", "{1, 3}"],
      answer: "{1, 2, 3}",
      hint: "Na união, você inclui todos os elementos de ambos os conjuntos sem repetições."
    }
  ],
  // Questões Médias
  medium: [
    {
      question: "Dado A = {1, 2, 3, 4} e B = {3, 4, 5, 6}, qual é o conjunto A ∩ B?",
      options: ["{1, 2}", "{5, 6}", "{3, 4}", "{1, 2, 3, 4, 5, 6}"],
      answer: "{3, 4}",
      hint: "Considere os elementos que estão presentes em A e em B."
    },
    {
      question: "Se U = {1, 2, 3, 4, 5, 6} e A = {2, 4, 6}, qual é o complemento de A em relação a U?",
      options: ["{2, 4, 6}", "{1, 3, 5}", "{1, 2, 3}", "{3, 5, 6}"],
      answer: "{1, 3, 5}",
      hint: "O complemento de A em U são os elementos que estão em U, mas não em A."
    },
    {
      question: "O conjunto {x ∈ ℕ | x² < 20} é:",
      options: ["{1, 2, 3, 4}", "{1, 2, 3}", "{1, 2, 3, 4, 5}", "{1, 2, 3, 4, 5, 6}"],
      answer: "{1, 2, 3, 4}",
      hint: "Verifique quais números naturais têm o quadrado menor que 20."
    },
    {
      question: "Em uma escola, 20 alunos gostam de futebol, 15 de vôlei e 5 gostam de ambos. Quantos alunos gostam apenas de futebol?",
      options: ["15", "10", "5", "20"],
      answer: "15",
      hint: "Subtraia os que gostam de ambos dos que gostam de futebol."
    },
    {
      question: "Considere A = {x ∈ ℕ | x < 5} e B = {2, 4, 6}. Qual é A ∪ B?",
      options: ["{0, 1, 2, 3, 4, 6}", "{2, 4}", "{0, 1, 3, 6}", "{2, 4, 6}"],
      answer: "{0, 1, 2, 3, 4, 6}"
    },
    {
      question: "A relação R = {(1,1), (2,2), (3,3)} em A = {1, 2, 3} é:",
      options: ["Reflexiva", "Simétrica", "Transitiva", "Todas as anteriores"],
      answer: "Todas as anteriores"
    },
    {
      question: "Considere os pares R = {(1, 2), (2, 3), (1, 3)}. Essa relação é transitiva?",
      options: ["Sim", "Não"],
      answer: "Sim"
    },
    {
      question: "Em uma relação de amizade, se A é amigo de B e B é amigo de A, então a relação é:",
      options: ["Reflexiva", "Antissimétrica", "Simétrica", "Transitiva"],
      answer: "Simétrica"
    },
    {
      question: "Qual das seguintes representações mostra que uma relação é não reflexiva?",
      options: ["(1,1) está presente", "(2,2) não está presente", "Todos os pares são do tipo (a,a)", "A relação é vazia"],
      answer: "A relação é vazia",
      hint: "Uma relação reflexiva tem pares do tipo (a,a)."
    },
    {
      question: "Considere f(x) = 3x - 2. Qual é o valor de f(4)?",
      options: ["10", "12", "14", "8"],
      answer: "10",
      hint: "Substitua o x na função."
    },
    {
      question: "De acordo com o gráfico da função f(x) = x² - 2x - 3, qual é o valor mínimo de f(x)?",
      image: grafico1,
      options: ["-4", "-3", "-1", "0"],
      answer: "-4"
    },
    {
      question: "Se f(x) = x² - 1, qual é o valor de f(3)?",
      options: ["8", "9", "6", "7"],
      answer: "8"
    }
  ],
  // Questões Dificieis
  hard: [
    {
      question: "Se A = {1,2,3}, B = {2,3,4}, e C = {3,4,5}, qual é (A ∩ B) ∪ C?",
      options: ["{1,2,3,4,5}", "{2,3,4,5}", "{3,4,5}", "{1,2,3}"],
      answer: "{2,3,4,5}"
    },
    {
      question: "Se n(A) = 4 e n(B) = 3, quantos elementos terá A × B?",
      options: ["7", "12", "3", "9"],
      answer: "12"
    },
    {
      question: "Em um grupo de 100 pessoas: 60 gostam de A, 50 gostam de B e 30 gostam de ambos. Quantas gostam apenas de A?",
      options: ["30", "60", "20", "40"],
      answer: "30"
    },
    {
      question: "Quantos subconjuntos possui um conjunto com 5 elementos?",
      options: ["10", "25", "32", "16"],
      answer: "32"
    },
    {
      question: "A relação R = {(1,2), (2,3)} em A = {1,2,3} é transitiva?",
      options: ["Sim", "Não"],
      answer: "Não"
    },
    {
      question: "Se R é simétrica e contém (2, 5), então também contém:",
      options: ["(5,2)", "(2,2)", "(5,5)", "(2,3)"],
      answer: "(5,2)"
    },
    {
      question: "Uma relação R em A = {1,2} com todos os pares do tipo (a,b) é dita:",
      options: ["Total", "Vazia", "Universal", "Reflexiva"],
      answer: "Universal"
    },
    {
      question: "A matriz de uma relação R entre A = {1,2} e B = {3,4}, com R = {(1,3), (2,4)}, será:",
      options: [
        "Diagonal principal preenchida",
        "1s nas posições (1,1) e (2,2)",
        "1s nas posições (1,3) e (2,4)",
        "1s fora da diagonal"
      ],
      answer: "1s fora da diagonal"
    },
    {
      question: "Considere f(x) = x² - 4x + 3. O valor mínimo da função ocorre em x = ?",
      options: ["1", "2", "3", "4"],
      answer: "2"
    },
    {
      question: "O gráfico da função f(x) = -2x² + 8x - 6 é:",
      options: [
        "Parábola com concavidade para cima",
        "Parábola com vértice em (2, 2)",
        "Reta decrescente",
        "Exponencial crescente"
      ],
      answer: "Parábola com vértice em (2, 2)",
      image: grafico2
    },
    {
      question: "O gráfico da função f(x) = x² - 4x + 3 é:",
      options: [
        "Parábola com concavidade para baixo e vértice em (2, -1)",
        "Reta crescente",
        "Função linear",
        "Função exponencial"
      ],
      answer: "Parábola com concavidade para baixo e vértice em (2, -1)",
      image: grafico3
    },
    {
      question: "Se f(x) = 2x e g(x) = x + 1, quanto vale (f ∘ g)(3)?",
      options: ["8", "7", "6", "5"],
      answer: "8"
    },
    {
      question: "Qual o domínio da função f(x) = 1 / (x - 2)?",
      options: ["ℝ", "ℝ - {2}", "x > 0", "x ≠ 0"],
      answer: "ℝ - {2}"
    }
  ],
  // Questões Rubens
  rubens: [
    // Conjuntos (4)
    {
      question: "Se A = {x ∈ ℕ | x ≤ 10}, B = {2, 4, 6, 8, 10}, qual é A - B?",
      options: [
        "{1, 3, 5, 7, 9}",
        "{2, 4, 6, 8, 10}",
        "{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}",
        "{1, 2, 3, 5, 7, 9}"
      ],
      answer: "{1, 3, 5, 7, 9}"
    },
    {
      question: "Qual o número máximo de elementos do conjunto das partes de um conjunto com 7 elementos?",
      options: ["64", "128", "256", "512"],
      answer: "128"
    },
    {
      question: "Dado A = {a,b}, B = {1,2}, qual o número de pares ordenados distintos de A × B?",
      options: ["2", "4", "6", "8"],
      answer: "4"
    },
    {
      question: "Se A ∪ B = {1,2,3,4,5} e A ∩ B = {2,3}, é possível que A = {1,2,3,4}?",
      options: ["Sim", "Não"],
      answer: "Sim"
    },

    // Relações (4)
    {
      question: "Uma relação R em A = {1,2,3} é reflexiva se:",
      options: [
        "Contém todos os pares (a,a)",
        "Não contém pares repetidos",
        "Contém pelo menos um (a,a)",
        "Contém apenas pares distintos"
      ],
      answer: "Contém todos os pares (a,a)"
    },
    {
      question: "Se R é uma relação em A = {1,2,3} e R = {(1,2), (2,3), (1,3)}, então R é:",
      options: ["Transitiva", "Simétrica", "Reflexiva", "Vazia"],
      answer: "Transitiva"
    },
    {
      question: "Qual condição define uma relação simétrica?",
      options: [
        "Se (a,b) ∈ R então (b,a) ∈ R",
        "Se (a,b) ∈ R então (a,a) ∈ R",
        "Se (a,b) ∈ R então (a,c) ∈ R",
        "Se (a,a) ∈ R então R é universal"
      ],
      answer: "Se (a,b) ∈ R então (b,a) ∈ R"
    },
    {
      question: "Uma matriz de relação 3x3 com 1s apenas na diagonal principal representa:",
      options: ["Reflexiva", "Simétrica", "Antissimétrica", "Todas as anteriores"],
      answer: "Todas as anteriores"
    },
    // Funções com gráficos (4)
    {
      question: "Qual gráfico representa a função f(x) = x² - 4?",
      options: [
        "Parábola com vértice em (0, -4) e concavidade para cima",
        "Reta decrescente passando pela origem",
        "Função cúbica com ponto de inflexão",
        "Função com assíntota horizontal"
      ],
      answer: "Parábola com vértice em (0, -4) e concavidade para cima",
      image: grafico7
    },
    {
      question: "O gráfico da função f(x) = √x - 1 inicia em:",
      options: [
        "x = 0, y = -1",
        "x = -1, y = 0",
        "x = 1, y = 0",
        "x = 0, y = 1"
      ],
      answer: "x = 0, y = -1",
      image: grafico4
    },
    {
      question: "Qual gráfico representa f(x) = 1 / (x² + 1)?",
      options: [
        "Curva simétrica em torno do eixo y e com máximo em x = 0",
        "Reta com coeficiente angular negativo",
        "Parábola voltada para baixo com vértice na origem",
        "Gráfico exponencial crescente"
      ],
      answer: "Curva simétrica em torno do eixo y e com máximo em x = 0",
      image: grafico5
    },
    {
      question: "Qual gráfico representa a função f(x) = x³?",
      options: [
        "Curva que cresce à esquerda e à direita da origem com inflexão em (0,0)",
        "Parábola com vértice na origem",
        "Reta constante",
        "Função decrescente com assíntota horizontal"
      ],
      answer: "Curva que cresce à esquerda e à direita da origem com inflexão em (0,0)",
      image: grafico6
    }
  ]
}

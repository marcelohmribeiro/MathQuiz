import grafico1 from "./img/grafico1.png"

export const questions = {
  // Questões Fáceis
  easy: [
    {
      question: "Qual é o símbolo usado para indicar que um elemento pertence a um conjunto?",
      options: ["⊂", "∈", "∪", "∅"],
      answer: "∈",
    },
    {
      question: "O conjunto A = {1, 2, 3} tem quantos subconjuntos?",
      options: ["6", "7", "8", "9"],
      answer: "8",
      hint: "Use a formula 2^n, onde n é o número de elementos."
    },
    {
      question: "Assinale as afirmativas verdadeiras: I. O conjunto dos naturais é finito. II. ∅ representa o conjunto vazio. III. {0} é igual ao conjunto vazio. IV. {2, 4, 6} ⊆ ℕ",
      options: ["II e IV", "I e III", "I, II e IV", "II, III e IV"],
      answer: "II e IV",
      hint: "{0} é um conjunto unitário."
    },
    {
      question: "Relacione os símbolos aos seus significados: 1. ∈ 2. ⊆ 3. ∅ 4. ∪",
      options: [
        "1-A, 2-B, 3-C, 4-D",
        "1-B, 2-C, 3-A, 4-D",
        "1-D, 2-A, 3-C, 4-B",
        "1-A, 2-D, 3-B, 4-C"
      ],
      answer: "1-A, 2-B, 3-C, 4-D",
    },
    {
      question: "Se A = {1, 2, 3} e B = {3, 4, 5}, então A ∩ B é:",
      options: ["{1, 2}", "{3}", "{1, 2, 3, 4, 5}", "{ }"],
      answer: "{3}",
      hint: "Elementos que tem em ambos os conjuntos."
    },
    {
      question: "Se A = {a, b} e B = {1, 2}, quantos pares ordenados tem A × B?",
      options: ["2", "3", "4", "6"],
      answer: "4",
      hint: "Multiplique o número de elementos de A e B."
    },
    {
      question: "Toda função é uma relação, mas nem toda relação é uma função.",
      options: ["Verdadeiro", "Falso"],
      answer: "Verdadeiro",
    },
    {
      question: "Qual das opções representa um conjunto infinito?",
      options: ["{x ∈ ℕ | x <= 40}", "{a, b, c}", "{x ∈ ℕ | x é par}", "{5, 10, 15, 20}"],
      answer: "{x ∈ ℕ | x é par}",
      hint: "Conjunto dos pares naturais nunca termina."
    },
    {
      question: "Se A = {1, 2, 3} e B = {2, 3, 4}, então A ∪ B é:",
      options: ["{1, 2, 3}", "{1, 2, 3, 4}", "{2, 3}", "{1, 4}"],
      answer: "{1, 2, 3, 4}",
      hint: "União de dois conjuntos é formada pelos elementos de ambos, sem repetir."
    },
    {
      question: "O conjunto {x ∈ ℕ | x < 5} é igual a:",
      options: ["{0, 1, 2, 3, 4}", "{1, 2, 3, 4, 5}", "{1, 2, 3, 4}", "{2, 3, 4}"],
      answer: "{0, 1, 2, 3, 4}",
      hint: "Naturais começam no zero."
    },
    {
      question: "Assinale as corretas: \nI. Função associa 1 domínio a 1 imagem.\nII. Função pode ter 2 imagens por domínio.\nIII. Se f(x) = x + 1, então f(3) = 4",
      options: ["I e III", "I e II", "II e III", "Todas corretas"],
      answer: "I e III",
    },
    {
      question: "A função f(x) = 2x é:",
      options: ["Constante", "Linear", "Quadrática", "Exponencial"],
      answer: "Linear",
      hint: "É da forma f(x) = ax + b com b = 0."
    }
  ],
  // Questões Médias
  medium: [
    {
      question: "Quanto é 12 ÷ 3?",
      options: ["2", "3", "4", "5"],
      answer: "4",
      hint: "Divida 12 por 3.",
    },
    {
      question: "De acordo com o gráfico da função f(x) = 2x + 2 mostrado abaixo, assinale a alternativa correta:",
      image: grafico1,
      options: [
        "A função é crescente e seu coeficiente angular é 2.",
        "A função é decrescente e seu coeficiente angular é 2.",
        "A função é crescente e seu coeficiente angular é 4.",
        "A função é decrescente e seu coeficiente angular é 4."
      ],
      answer: "A função é crescente e seu coeficiente angular é 2.",
      hint: "Observe a inclinação da reta."
    },
  ],
  // Questões Dificieis
  hard: [
    {
      question: "Qual é a raiz quadrada de 144?",
      options: ["10", "11", "12", "13"],
      answer: "12",
    },
  ],
  // Questões Rubens
  rubens: [
    {
      question: "Qual é a raiz quadrada de 144?",
      options: ["10", "11", "12", "13"],
      answer: "12",
    }
  ]
}

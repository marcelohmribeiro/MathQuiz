import grafico1 from "./img/grafico1.png"

export const questions = {
  easy: [
    {
      question: "Qual é o número de elementos do conjunto A = {1, 2, 3, 4}?",
      options: ["2", "3", "4", "5"],
      answer: "4",
      hint: "Conte quantos números estão entre as chaves."
    },
    {
      question: "O conjunto {maçã, banana, uva} é um exemplo de:",
      options: ["Conjunto numérico", "Conjunto unitário", "Conjunto de frutas", "Conjunto vazio"],
      answer: "Conjunto de frutas",
      hint: "Todos os elementos são alimentos."
    },
    {
      question: "Qual é o símbolo do conjunto vazio?",
      options: ["Ø", "∈", "U", "{}"],
      answer: "Ø",
      hint: "Parece um zero riscado."
    },
    {
      question: "O conjunto B = {x | x é um número par menor que 5} tem quais elementos?",
      options: ["{1, 3}", "{2, 4}", "{5, 6}", "{0, 3}"],
      answer: "{2, 4}",
      hint: "Pares menores que 5."
    },
    {
      question: "Qual dos conjuntos a seguir é unitário?",
      options: ["{2}", "{1, 2}", "{}", "{a, b, c}"],
      answer: "{2}",
      hint: "Conjunto unitário tem apenas UM elemento."
    }
  ],
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
  hard: [
    {
      question: "Qual é a raiz quadrada de 144?",
      options: ["10", "11", "12", "13"],
      answer: "12",
    },
  ],
  rubens: [
    {
      question: "Qual é a raiz quadrada de 144?",
      options: ["10", "11", "12", "13"],
      answer: "12",
    }
  ]
}

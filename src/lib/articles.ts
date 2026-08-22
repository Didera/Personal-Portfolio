export const articles = [
  {
    title: "From Hype to Help – NLP for Impact-focused Adoption",
    slug: "from-hype-to-help-nlp",
    excerpt:
      "A practical look at Natural Language Processing, how machines understand language, and how NLP can create real business and social impact.",
    category: "Artificial Intelligence",
    date: "2025",
    readTime: "7 min read",
    publication: "EDIFY – Exposition 2025",
    author: "Devinda Rajawardhane",
    sourceUrl:
      "https://blog.exposition.lk/article/from-hype-to-help-nlp-for-impact-focused-adoption",
    sections: [
      {
        heading: "NLP in a Nutshell: Interpreting the Language of Machines",
        body: [
          "Natural Language Processing, also known as NLP, is a field of Artificial Intelligence that focuses on allowing computers to interact with human language in a natural and meaningful way.",
          "In simple terms, NLP tries to teach computers how to understand, process, and respond to human language. While this can be compared to how a child learns a language through examples and repetition, computers do not truly understand language like humans do. Instead, they rely on patterns, statistics, and large collections of text data.",
          "One major challenge in NLP is context. For example, the word bank can refer to a financial institution or the side of a river. A good NLP system must learn to identify the correct meaning based on the surrounding words and situation.",
        ],
      },
      {
        heading: "Contextual Importance: Why NLP?",
        body: [
          "As the world increasingly adopts AI in daily life and enterprise systems, NLP has become a key technology. AI agents, chatbots, voice assistants, and automated systems all need the ability to understand and respond to human language accurately.",
          "In enterprises, NLP is useful for handling large-scale text data such as reports, customer reviews, feedback, documents, and support conversations. By automating these tasks, organizations can reduce operational costs and focus more on strategic decision-making.",
        ],
      },
      {
        heading: "Behind the Scenes: A Simple Take on the Learning Process",
        body: [
          "The NLP learning process begins with text input and data collection. Text data is gathered from databases, documents, or other relevant sources and stored in a structured format.",
          "After collection, the text must be preprocessed. Preprocessing includes methods such as tokenization, where text is split into smaller units like words or phrases. This helps the model process language more clearly and consistently.",
          "Text representation is also important. Bag of Words is one method where text is represented as a collection of words while keeping track of word frequency. Word embeddings such as Word2Vec go further by representing words in vector space, where words with similar meanings appear closer together.",
        ],
      },
      {
        heading: "More Than Meets the Eye: NLP in the Modern Era",
        body: [
          "NLP appears in many everyday technologies. Language translators use NLP to make translation faster, cheaper, and more scalable. Search engines use NLP to understand search intent and suggest possible queries.",
          "AI assistants such as Siri, Alexa, Bixby, ChatGPT, Gemini, and Claude also depend on NLP to understand user input and respond naturally.",
          "NLP is also used in semantic analysis, named entity recognition, coreference resolution, sentiment analysis, text classification, extraction, POS tagging, and parsing.",
        ],
      },
      {
        heading: "Words into Work: Reshaping Business Strategy",
        body: [
          "NLP can help businesses automate tasks such as customer feedback analysis, big data handling, review analysis, and sentiment detection.",
          "A strong enterprise example is BloombergGPT, a finance-focused language model designed for financial NLP tasks such as sentiment analysis, entity recognition, and financial text classification.",
          "Businesses can also use NLP to improve demand forecasting by combining traditional statistics with sentiment analysis from social media, surveys, reports, and customer feedback.",
          "NLP can support fraud detection by analyzing transaction descriptions and identifying suspicious linguistic patterns more efficiently than manual review.",
        ],
      },
      {
        heading: "Sin Llama: Sri Lanka’s Own Voice in AI",
        body: [
          "Sin Llama is an important Sri Lankan contribution to NLP. It is an open-source Large Language Model created specifically for the Sinhala language by a research team from the Department of Computer Science and Engineering, University of Moratuwa.",
          "The model extends Llama-3-8B with Sinhala-specific vocabulary and was trained using more than 10 million Sinhala sentences. This creates opportunities for researchers and enterprises in Sri Lanka to build AI systems that better support local language needs.",
        ],
      },
      {
        heading: "The Future for NLP",
        body: [
          "Although NLP can improve productivity, it must be implemented carefully. A poorly trained model can produce inaccurate or misleading output.",
          "With advances in deep neural networks, NLP systems are becoming more natural, accurate, and capable of supporting broader language coverage, better translations, and improved semantic understanding.",
        ],
      },
    ],
  },

  {
    title: "Neural Networks – Brain of an A.I",
    slug: "neural-networks-brain-of-ai",
    excerpt:
      "A beginner-friendly article explaining how neural networks work, how they are inspired by the human brain, and how they are shaping modern Artificial Intelligence.",
    category: "Artificial Intelligence",
    date: "2025",
    readTime: "6 min read",
    publication: "EDIFY – Exposition 2024",
    author: "Devinda Rajawardhane",
    sourceUrl: "",
    sections: [
      {
        heading: "Introduction",
        body: [
          "Imagine a world where machines can mimic human intelligence to solve complex problems. That world is becoming more realistic every day because of neural networks, which are often considered one of the most important foundations behind modern Artificial Intelligence.",
          "Technology has become deeply connected with our daily lives, from streaming recommendations and virtual assistants to smart healthcare systems and automated decision-making tools. Behind many of these innovations lies the power of the human brain, one of nature’s most extraordinary creations.",
          "Neural networks are inspired by the structure and behavior of biological neurons. They allow machines to process information, recognize patterns, make predictions, and improve through learning.",
        ],
      },
      {
        heading: "What Are Neural Networks?",
        body: [
          "A neural network is a collection of interconnected units called neurons. In biological systems, neurons send signals to each other through the brain. In machine learning and deep learning, artificial neural networks recreate this idea using mathematical models.",
          "These networks contain nodes that receive data, process it, and pass it forward to other nodes. This allows the system to learn from examples and improve its predictions over time.",
          "An artificial neural network usually contains an input layer, one or more hidden layers, and an output layer. The input layer receives the data, the hidden layers process the information, and the output layer produces the final result.",
        ],
      },
      {
        heading: "How Neural Networks Learn",
        body: [
          "Two important processes in neural networks are forward propagation and backpropagation. Forward propagation moves data through the network to generate a prediction, while backpropagation helps the network learn from its mistakes.",
          "During forward propagation, each neuron processes input values by multiplying them with weights. These weights control how important each input is to the final prediction.",
          "After the values are combined, they are passed through an activation function. Activation functions introduce non-linearity, which helps the neural network understand complex patterns instead of only simple relationships.",
          "Backpropagation happens after the network makes a prediction. The prediction is compared with the actual result using a loss function. A loss function measures how close or far the prediction is from the expected result.",
          "For example, Mean Squared Error is commonly used for regression problems, while Binary Cross Entropy is often used for classification problems. The network calculates how each weight contributed to the error and adjusts those weights to improve future predictions.",
        ],
      },
      {
        heading: "Real-World Applications",
        body: [
          "Neural networks are widely used in image and video processing. They support tasks such as facial recognition, image enhancement, object detection, and even deepfake generation.",
          "They are also heavily used in Natural Language Processing, where machines understand and generate human language. Examples include language translation, virtual assistants, text generation, and AI tools such as ChatGPT.",
          "In healthcare, neural networks can support medical diagnosis by analyzing X-rays, MRIs, CT scans, and patient records. These systems can help doctors identify patterns more efficiently and support decision-making.",
          "In finance, neural networks are used for fraud detection, stock price prediction, risk analysis, and personalized financial recommendations. AI-based models can analyze transaction behavior and identify suspicious activity.",
          "Neural networks are also important in autonomous vehicles. Sensors collect information from roads, traffic lights, obstacles, and surrounding vehicles. The neural network processes this information and helps the vehicle make decisions.",
        ],
      },
      {
        heading: "Impact Across Different Sectors",
        body: [
          "Beyond healthcare, finance, and transportation, neural networks are used in education, agriculture, energy management, public safety, and business analytics.",
          "In education, they can support personalized learning, language translation, and intelligent tutoring systems. In agriculture, they can help optimize crop production, identify plant diseases, and improve yield protection.",
          "In business environments, neural networks can analyze large amounts of data, generate reports, make predictions, and support better decision-making. This makes them useful in areas where pattern recognition, recommendations, and automation are important.",
        ],
      },
      {
        heading: "Benefits and Limitations",
        body: [
          "One major advantage of neural networks is their ability to learn patterns from large amounts of data. They can handle complex tasks faster than traditional manual methods and can reduce repetitive human workload.",
          "However, neural networks also have limitations. They depend heavily on data, so poor-quality or biased data can lead to inaccurate results. Data security and privacy are also major concerns because neural networks often require large datasets.",
          "Another challenge is their black-box nature. This means it can be difficult to understand exactly how a neural network made a particular decision. This becomes especially important in sensitive areas such as healthcare, finance, and legal systems.",
        ],
      },
      {
        heading: "Future of Neural Networks",
        body: [
          "The future impact of neural networks is powerful. They can help improve autonomous transport, intelligent assistants, financial forecasting, disaster prevention, healthcare systems, and business management.",
          "However, these technologies must be developed and used responsibly. Neural networks should work as collaborative tools that support humans, not as complete replacements for human judgment and creativity.",
          "As technology continues to evolve, neural networks will play an even greater role in shaping the future of Artificial Intelligence. If used ethically and carefully, they can help society become more efficient, innovative, and sustainable while protecting the needs of future generations.",
        ],
      },
    ],
  },
];

export type Article = (typeof articles)[number];

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}
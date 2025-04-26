import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Mock data for blog posts
const blogPosts = {
  "understanding-transformer-architecture": {
    title: "Understanding Transformer Architecture",
    date: "April 15, 2024",
    readTime: "8 min read",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["NLP", "Deep Learning"],
    content: `
      <h2>Introduction to Transformers</h2>
      <p>The Transformer architecture, introduced in the paper "Attention Is All You Need" by Vaswani et al. in 2017, has revolutionized the field of natural language processing. Unlike previous sequence-to-sequence models that relied on recurrent neural networks (RNNs) or convolutional neural networks (CNNs), Transformers use a mechanism called self-attention to process input sequences in parallel.</p>
      
      <h2>Self-Attention Mechanism</h2>
      <p>At the core of the Transformer architecture is the self-attention mechanism, which allows the model to weigh the importance of different words in a sentence when processing a specific word. This enables the model to capture long-range dependencies in text more effectively than RNNs.</p>
      
      <p>The self-attention mechanism works by computing three vectors for each word: Query (Q), Key (K), and Value (V). These vectors are obtained by multiplying the input embedding with three different weight matrices. The attention scores are then computed as the dot product of the Query and Key vectors, scaled by the square root of the dimension of the Key vectors, and passed through a softmax function to obtain attention weights. Finally, these weights are used to compute a weighted sum of the Value vectors.</p>
      
      <h2>Multi-Head Attention</h2>
      <p>To capture different types of relationships between words, Transformers use multi-head attention, which involves running multiple self-attention operations in parallel. Each "head" can focus on different aspects of the input, such as syntactic or semantic relationships.</p>
      
      <h2>Position-wise Feed-Forward Networks</h2>
      <p>After the multi-head attention layer, Transformers apply a position-wise feed-forward network to each position independently. This consists of two linear transformations with a ReLU activation in between.</p>
      
      <h2>Positional Encoding</h2>
      <p>Since Transformers process all words in parallel, they lack an inherent notion of word order. To address this, positional encodings are added to the input embeddings to provide information about the position of each word in the sequence.</p>
      
      <h2>Applications of Transformers</h2>
      <p>Transformers have been used to develop powerful language models such as BERT, GPT, and T5, which have achieved state-of-the-art results on various NLP tasks, including text classification, question answering, and machine translation. The architecture has also been adapted for computer vision tasks, showing its versatility beyond NLP.</p>
      
      <h2>Conclusion</h2>
      <p>The Transformer architecture has significantly advanced the field of NLP and continues to be the foundation for many state-of-the-art models. Understanding its components and mechanisms is essential for anyone working in the field of AI and machine learning.</p>
    `,
  },
  "implementing-kmeans-clustering": {
    title: "Implementing K-means Clustering from Scratch",
    date: "March 28, 2024",
    readTime: "6 min read",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["Clustering", "Python"],
    content: `
      <h2>Introduction to K-means Clustering</h2>
      <p>K-means clustering is one of the most popular unsupervised machine learning algorithms. It aims to partition n observations into k clusters, where each observation belongs to the cluster with the nearest mean (cluster centroid).</p>
      
      <h2>The Algorithm</h2>
      <p>The K-means algorithm works as follows:</p>
      <ol>
        <li>Initialize k centroids randomly from the data points.</li>
        <li>Assign each data point to the nearest centroid, forming k clusters.</li>
        <li>Recalculate the centroids as the mean of all data points in each cluster.</li>
        <li>Repeat steps 2 and 3 until the centroids no longer change significantly or a maximum number of iterations is reached.</li>
      </ol>
      
      <h2>Implementation in Python</h2>
      <p>Let's implement the K-means algorithm from scratch using NumPy:</p>
      
      <pre><code>
      import numpy as np
      import matplotlib.pyplot as plt
      
      def kmeans(X, k, max_iters=100):
          # Randomly initialize centroids
          idx = np.random.choice(len(X), k, replace=False)
          centroids = X[idx, :]
          
          for _ in range(max_iters):
              # Assign each point to the nearest centroid
              distances = np.sqrt(((X - centroids[:, np.newaxis])**2).sum(axis=2))
              labels = np.argmin(distances, axis=0)
              
              # Update centroids
              new_centroids = np.array([X[labels == i].mean(axis=0) for i in range(k)])
              
              # Check for convergence
              if np.all(centroids == new_centroids):
                  break
                  
              centroids = new_centroids
              
          return labels, centroids
      </code></pre>
      
      <h2>Evaluating K-means</h2>
      <p>To evaluate the quality of the clustering, we can use metrics such as the inertia (sum of squared distances of samples to their closest centroid) or the silhouette score, which measures how similar an object is to its own cluster compared to other clusters.</p>
      
      <h2>Choosing the Optimal k</h2>
      <p>One of the challenges in K-means clustering is determining the optimal number of clusters (k). The Elbow Method is a common approach, where we plot the inertia for different values of k and look for the "elbow" point where the rate of decrease sharply changes.</p>
      
      <h2>Limitations of K-means</h2>
      <p>Despite its popularity, K-means has several limitations:</p>
      <ul>
        <li>It assumes clusters are spherical and equally sized, which may not be true in real-world data.</li>
        <li>It's sensitive to the initial placement of centroids and may converge to local optima.</li>
        <li>It requires specifying the number of clusters in advance.</li>
        <li>It's sensitive to outliers, as they can significantly affect the mean value.</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>K-means clustering is a powerful and efficient algorithm for unsupervised learning. By implementing it from scratch, we gain a deeper understanding of its inner workings, strengths, and limitations. This knowledge is essential for applying clustering effectively to real-world problems in data science and machine learning.</p>
    `,
  },
  "ethics-in-ai-bias": {
    title: "Ethics in AI: Bias in Machine Learning Models",
    date: "February 10, 2024",
    readTime: "7 min read",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["Ethics", "AI"],
    content: `
      <h2>Understanding Bias in AI Systems</h2>
      <p>As artificial intelligence becomes increasingly integrated into our daily lives, the ethical implications of these systems have come under scrutiny. One of the most significant concerns is bias in machine learning models, which can lead to unfair or discriminatory outcomes.</p>
      
      <h2>Sources of Bias</h2>
      <p>Bias in AI systems can originate from various sources:</p>
      <ul>
        <li><strong>Training Data Bias:</strong> If the data used to train a model contains historical biases or is not representative of the population, the model will likely perpetuate these biases.</li>
        <li><strong>Algorithm Bias:</strong> The design choices and optimization objectives of algorithms can inadvertently introduce bias.</li>
        <li><strong>Interaction Bias:</strong> How users interact with AI systems can reinforce existing biases over time.</li>
      </ul>
      
      <h2>Real-world Examples</h2>
      <p>Several high-profile cases have highlighted the impact of biased AI systems:</p>
      <ul>
        <li>Facial recognition systems with higher error rates for women and people with darker skin tones.</li>
        <li>Hiring algorithms that favor male candidates due to historical hiring patterns.</li>
        <li>Criminal risk assessment tools that disproportionately classify minority defendants as high risk.</li>
      </ul>
      
      <h2>Detecting Bias</h2>
      <p>Detecting bias in machine learning models involves both quantitative and qualitative approaches:</p>
      <ul>
        <li>Statistical analysis of model performance across different demographic groups.</li>
        <li>Fairness metrics such as disparate impact, equal opportunity, and demographic parity.</li>
        <li>Adversarial testing to identify potential biases.</li>
      </ul>
      
      <h2>Mitigating Bias</h2>
      <p>Several strategies can help mitigate bias in AI systems:</p>
      <ul>
        <li><strong>Diverse and Representative Data:</strong> Ensuring training data is diverse and representative of the population.</li>
        <li><strong>Fairness-aware Algorithms:</strong> Developing algorithms that explicitly account for fairness constraints.</li>
        <li><strong>Regular Auditing:</strong> Continuously monitoring and auditing AI systems for bias.</li>
        <li><strong>Transparent Design:</strong> Making the design and decision-making process of AI systems transparent and interpretable.</li>
      </ul>
      
      <h2>Ethical Frameworks</h2>
      <p>Developing ethical frameworks for AI development and deployment is crucial. These frameworks should address principles such as fairness, accountability, transparency, and inclusivity.</p>
      
      <h2>Conclusion</h2>
      <p>Addressing bias in machine learning models is not just a technical challenge but also an ethical imperative. As AI practitioners, we have a responsibility to develop systems that are fair and equitable for all users. By understanding the sources of bias, implementing detection methods, and adopting mitigation strategies, we can work towards creating more ethical AI systems.</p>
    `,
  },
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug]

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">Sarah.AI</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="/#about" className="transition-colors hover:text-foreground/80">
                About
              </Link>
              <Link href="/#projects" className="transition-colors hover:text-foreground/80">
                Projects
              </Link>
              <Link href="/#testimonials" className="transition-colors hover:text-foreground/80">
                Testimonials
              </Link>
              <Link href="/blog" className="transition-colors hover:text-foreground/80">
                Blog
              </Link>
              <Link href="/#contact" className="transition-colors hover:text-foreground/80">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container px-4 py-12 md:px-6">
        <div className="mb-8">
          <Link href="/blog" className="inline-flex items-center text-sm hover:underline mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all posts
          </Link>

          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">{post.title}</h1>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
            <div className="flex items-center">
              <Calendar className="mr-1 h-4 w-4" />
              {post.date}
            </div>
            <div className="flex items-center">
              <Clock className="mr-1 h-4 w-4" />
              {post.readTime}
            </div>
          </div>

          <div className="relative aspect-[21/9] mb-8">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover rounded-lg" />
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <Link href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`} key={tag}>
                <Button variant="outline" size="sm" className="rounded-full">
                  <Tag className="mr-1 h-3 w-3" />
                  {tag}
                </Button>
              </Link>
            ))}
          </div>
        </div>

        <div className="prose prose-purple dark:prose-invert max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        <div className="mt-12 border-t pt-8">
          <h3 className="text-xl font-semibold mb-4">Share this post</h3>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              Twitter
            </Button>
            <Button variant="outline" size="sm">
              LinkedIn
            </Button>
            <Button variant="outline" size="sm">
              Facebook
            </Button>
          </div>
        </div>

        <div className="mt-12">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Subscribe to my newsletter</h3>
            <p className="text-muted-foreground mb-4">Get the latest posts and updates delivered to your inbox.</p>
            <div className="flex gap-2">
              <Input placeholder="Your email address" />
              <Button>Subscribe</Button>
            </div>
          </Card>
        </div>
      </main>

      <footer className="border-t mt-12">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Sarah.AI. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, CheckCircle2, Code, RefreshCw } from "lucide-react"
import { useState } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import confetti from "canvas-confetti"

interface CodeChallenge {
  id: string
  title: string
  description: string
  difficulty: "easy" | "medium" | "hard"
  language: string
  buggyCode: string
  correctCode: string
  hint: string
}

const challenges: CodeChallenge[] = [
  {
    id: "challenge-1",
    title: "Neural Network Training Loop",
    description: "This neural network training loop has a bug. Can you find and fix it?",
    difficulty: "easy",
    language: "python",
    buggyCode: `import torch
import torch.nn as nn
import torch.optim as optim

# Define a simple neural network
class SimpleNN(nn.Module):
    def __init__(self, input_size, hidden_size, output_size):
        super(SimpleNN, self).__init__()
        self.layer1 = nn.Linear(input_size, hidden_size)
        self.relu = nn.ReLU()
        self.layer2 = nn.Linear(hidden_size, output_size)
    
    def forward(self, x):
        x = self.layer1(x)
        x = self.relu(x)
        x = self.layer2(x)
        return x

# Training function
def train_model(model, X_train, y_train, epochs=100, lr=0.01):
    criterion = nn.MSELoss()
    optimizer = optim.SGD(model.parameters(), lr=lr)
    
    for epoch in range(epochs):
        # Forward pass
        outputs = model(X_train)
        loss = criterion(outputs, y_train)
        
        # Backward pass and optimize
        loss.backward()
        optimizer.step()
        
        if epoch % 10 == 0:
            print(f'Epoch {epoch}, Loss: {loss.item():.4f}')
    
    return model

# Test
input_size = 10
hidden_size = 20
output_size = 1

model = SimpleNN(input_size, hidden_size, output_size)
X = torch.randn(100, input_size)
y = torch.randn(100, output_size)

trained_model = train_model(model, X, y)`,
    correctCode: `import torch
import torch.nn as nn
import torch.optim as optim

# Define a simple neural network
class SimpleNN(nn.Module):
    def __init__(self, input_size, hidden_size, output_size):
        super(SimpleNN, self).__init__()
        self.layer1 = nn.Linear(input_size, hidden_size)
        self.relu = nn.ReLU()
        self.layer2 = nn.Linear(hidden_size, output_size)
    
    def forward(self, x):
        x = self.layer1(x)
        x = self.relu(x)
        x = self.layer2(x)
        return x

# Training function
def train_model(model, X_train, y_train, epochs=100, lr=0.01):
    criterion = nn.MSELoss()
    optimizer = optim.SGD(model.parameters(), lr=lr)
    
    for epoch in range(epochs):
        # Zero the parameter gradients
        optimizer.zero_grad()
        
        # Forward pass
        outputs = model(X_train)
        loss = criterion(outputs, y_train)
        
        # Backward pass and optimize
        loss.backward()
        optimizer.step()
        
        if epoch % 10 == 0:
            print(f'Epoch {epoch}, Loss: {loss.item():.4f}')
    
    return model

# Test
input_size = 10
hidden_size = 20
output_size = 1

model = SimpleNN(input_size, hidden_size, output_size)
X = torch.randn(100, input_size)
y = torch.randn(100, output_size)

trained_model = train_model(model, X, y)`,
    hint: "In neural network training, what do we need to do with gradients before each iteration?",
  },
  {
    id: "challenge-2",
    title: "K-Means Clustering Algorithm",
    description: "This K-means clustering implementation has a bug. Can you identify and fix it?",
    difficulty: "medium",
    language: "python",
    buggyCode: `import numpy as np
import matplotlib.pyplot as plt

def kmeans(X, k, max_iters=100):
    # Randomly initialize centroids
    centroids = X[np.random.choice(X.shape[0], k, replace=False)]
    
    for _ in range(max_iters):
        # Assign each point to nearest centroid
        distances = np.sqrt(((X - centroids[:, np.newaxis])**2).sum(axis=2))
        labels = np.argmin(distances, axis=0)
        
        # Update centroids
        for i in range(k):
            centroids[i] = X[labels == i].mean(axis=0)
    
    return labels, centroids

# Generate sample data
np.random.seed(42)
X = np.vstack([
    np.random.randn(100, 2) + np.array([2, 2]),
    np.random.randn(100, 2) + np.array([-2, -2]),
    np.random.randn(100, 2) + np.array([2, -2])
])

# Apply K-means
k = 3
labels, centroids = kmeans(X, k)

# Plot results
plt.figure(figsize=(8, 6))
colors = ['r', 'g', 'b']
for i in range(k):
    plt.scatter(X[labels == i, 0], X[labels == i, 1], c=colors[i], label=f'Cluster {i+1}')
plt.scatter(centroids[:, 0], centroids[:, 1], c='black', marker='x', s=100, label='Centroids')
plt.legend()
plt.title('K-means Clustering Results')
plt.show()`,
    correctCode: `import numpy as np
import matplotlib.pyplot as plt

def kmeans(X, k, max_iters=100):
    # Randomly initialize centroids
    centroids = X[np.random.choice(X.shape[0], k, replace=False)]
    
    for _ in range(max_iters):
        # Assign each point to nearest centroid
        distances = np.sqrt(((X - centroids[:, np.newaxis])**2).sum(axis=2))
        labels = np.argmin(distances, axis=0)
        
        # Update centroids
        new_centroids = np.zeros_like(centroids)
        for i in range(k):
            if np.sum(labels == i) > 0:  # Check if the cluster is not empty
                new_centroids[i] = X[labels == i].mean(axis=0)
            else:
                # If a cluster is empty, reinitialize its centroid
                new_centroids[i] = X[np.random.choice(X.shape[0], 1)].squeeze()
        
        # Check for convergence
        if np.all(centroids == new_centroids):
            break
            
        centroids = new_centroids
    
    return labels, centroids

# Generate sample data
np.random.seed(42)
X = np.vstack([
    np.random.randn(100, 2) + np.array([2, 2]),
    np.random.randn(100, 2) + np.array([-2, -2]),
    np.random.randn(100, 2) + np.array([2, -2])
])

# Apply K-means
k = 3
labels, centroids = kmeans(X, k)

# Plot results
plt.figure(figsize=(8, 6))
colors = ['r', 'g', 'b']
for i in range(k):
    plt.scatter(X[labels == i, 0], X[labels == i, 1], c=colors[i], label=f'Cluster {i+1}')
plt.scatter(centroids[:, 0], centroids[:, 1], c='black', marker='x', s=100, label='Centroids')
plt.legend()
plt.title('K-means Clustering Results')
plt.show()`,
    hint: "The algorithm doesn't check for empty clusters or convergence. What happens if a cluster has no points assigned to it?",
  },
  {
    id: "challenge-3",
    title: "Decision Tree Implementation",
    description: "This decision tree implementation has a critical bug. Can you find and fix it?",
    difficulty: "hard",
    language: "python",
    buggyCode: `import numpy as np
from collections import Counter

class DecisionNode:
    def __init__(self, feature_idx=None, threshold=None, left=None, right=None, value=None):
        self.feature_idx = feature_idx    # Index of feature to split on
        self.threshold = threshold        # Threshold value for the split
        self.left = left                  # Left subtree
        self.right = right                # Right subtree
        self.value = value                # Leaf value if this is a leaf

class DecisionTree:
    def __init__(self, max_depth=None):
        self.max_depth = max_depth
        self.root = None
        
    def fit(self, X, y):
        self.root = self._grow_tree(X, y)
        
    def _grow_tree(self, X, y, depth=0):
        n_samples, n_features = X.shape
        n_classes = len(np.unique(y))
        
        # Stopping criteria
        if (self.max_depth is not None and depth >= self.max_depth) or n_classes == 1:
            leaf_value = Counter(y).most_common(1)[0][0]
            return DecisionNode(value=leaf_value)
        
        # Find the best split
        best_feature, best_threshold = self._best_split(X, y)
        
        # Split the data
        left_idxs = X[:, best_feature] < best_threshold
        right_idxs = X[:, best_feature] >= best_threshold
        
        # Grow the children
        left = self._grow_tree(X[left_idxs], y[left_idxs], depth + 1)
        right = self._grow_tree(X[right_idxs], y[right_idxs], depth + 1)
        
        return DecisionNode(best_feature, best_threshold, left, right)
    
    def _best_split(self, X, y):
        m, n = X.shape
        if m <= 1:
            return None, None
        
        # Count of each class in the current node
        parent_counts = Counter(y)
        
        # Initialize variables
        best_gini = 1.0
        best_feature = None
        best_threshold = None
        
        # Loop through all features
        for feature_idx in range(n):
            # Get unique values in the column
            thresholds = np.unique(X[:, feature_idx])
            
            # Loop through all threshold values
            for threshold in thresholds:
                # Split the data
                left_idxs = X[:, feature_idx] < threshold
                right_idxs = X[:, feature_idx] >= threshold
                
                # Skip if one of the splits is empty
                if np.sum(left_idxs) == 0 or np.sum(right_idxs) == 0:
                    continue
                
                # Calculate the Gini impurity
                left_counts = Counter(y[left_idxs])
                right_counts = Counter(y[right_idxs])
                
                left_gini = 1.0
                for val in left_counts.values():
                    left_gini -= (val / np.sum(left_idxs)) ** 2
                    
                right_gini = 1.0
                for val in right_counts.values():
                    right_gini -= (val / np.sum(right_idxs)) ** 2
                
                # Calculate the weighted Gini impurity
                gini = (np.sum(left_idxs) * left_gini + np.sum(right_idxs) * right_gini) / m
                
                # Update if better
                if gini < best_gini:
                    best_gini = gini
                    best_feature = feature_idx
                    best_threshold = threshold
        
        return best_feature, best_threshold
    
    def predict(self, X):
        return np.array([self._traverse_tree(x, self.root) for x in X])
    
    def _traverse_tree(self, x, node):
        if node.value is not None:
            return node.value
        
        if x[node.feature_idx] < node.threshold:
            return self._traverse_tree(x, node.left)
        else:
            return self._traverse_tree(x, node.right)

# Test with a simple dataset
X = np.array([[0, 0], [1, 1], [0, 1], [1, 0]])
y = np.array([0, 0, 1, 1])

tree = DecisionTree(max_depth=2)
tree.fit(X, y)

# Make predictions
predictions = tree.predict(X)
print("Predictions:", predictions)
print("Accuracy:", np.sum(predictions == y) / len(y))`,
    correctCode: `import numpy as np
from collections import Counter

class DecisionNode:
    def __init__(self, feature_idx=None, threshold=None, left=None, right=None, value=None):
        self.feature_idx = feature_idx    # Index of feature to split on
        self.threshold = threshold        # Threshold value for the split
        self.left = left                  # Left subtree
        self.right = right                # Right subtree
        self.value = value                # Leaf value if this is a leaf

class DecisionTree:
    def __init__(self, max_depth=None):
        self.max_depth = max_depth
        self.root = None
        
    def fit(self, X, y):
        self.root = self._grow_tree(X, y)
        
    def _grow_tree(self, X, y, depth=0):
        n_samples, n_features = X.shape
        n_classes = len(np.unique(y))
        
        # Stopping criteria
        if (self.max_depth is not None and depth >= self.max_depth) or n_classes == 1 or n_samples <= 1:
            leaf_value = Counter(y).most_common(1)[0][0]
            return DecisionNode(value=leaf_value)
        
        # Find the best split
        best_feature, best_threshold = self._best_split(X, y)
        
        # If no split improves the criteria, make this a leaf node
        if best_feature is None:
            leaf_value = Counter(y).most_common(1)[0][0]
            return DecisionNode(value=leaf_value)
        
        # Split the data
        left_idxs = X[:, best_feature] < best_threshold
        right_idxs = X[:, best_feature] >= best_threshold
        
        # Grow the children
        left = self._grow_tree(X[left_idxs], y[left_idxs], depth + 1)
        right = self._grow_tree(X[right_idxs], y[right_idxs], depth + 1)
        
        return DecisionNode(best_feature, best_threshold, left, right)
    
    def _best_split(self, X, y):
        m, n = X.shape
        if m <= 1:
            return None, None
        
        # Count of each class in the current node
        parent_counts = Counter(y)
        
        # Initialize variables
        best_gini = 1.0
        best_feature = None
        best_threshold = None
        
        # Loop through all features
        for feature_idx in range(n):
            # Get unique values in the column
            thresholds = np.unique(X[:, feature_idx])
            
            # Loop through all threshold values
            for threshold in thresholds:
                # Split the data
                left_idxs = X[:, feature_idx] < threshold
                right_idxs = X[:, feature_idx] >= threshold
                
                # Skip if one of the splits is empty
                if np.sum(left_idxs) == 0 or np.sum(right_idxs) == 0:
                    continue
                
                # Calculate the Gini impurity
                left_counts = Counter(y[left_idxs])
                right_counts = Counter(y[right_idxs])
                
                left_gini = 1.0
                for val in left_counts.values():
                    left_gini -= (val / np.sum(left_idxs)) ** 2
                    
                right_gini = 1.0
                for val in right_counts.values():
                    right_gini -= (val / np.sum(right_idxs)) ** 2
                
                # Calculate the weighted Gini impurity
                gini = (np.sum(left_idxs) * left_gini + np.sum(right_idxs) * right_gini) / m
                
                # Update if better
                if gini < best_gini:
                    best_gini = gini
                    best_feature = feature_idx
                    best_threshold = threshold
        
        return best_feature, best_threshold
    
    def predict(self, X):
        return np.array([self._traverse_tree(x, self.root) for x in X])
    
    def _traverse_tree(self, x, node):
        if node.value is not None:
            return node.value
        
        if x[node.feature_idx] < node.threshold:
            return self._traverse_tree(x, node.left)
        else:
            return self._traverse_tree(x, node.right)

# Test with a simple dataset
X = np.array([[0, 0], [1, 1], [0, 1], [1, 0]])
y = np.array([0, 0, 1, 1])

tree = DecisionTree(max_depth=2)
tree.fit(X, y)

# Make predictions
predictions = tree.predict(X)
print("Predictions:", predictions)
print("Accuracy:", np.sum(predictions == y) / len(y))`,
    hint: "The decision tree doesn't handle all stopping criteria correctly. What happens if the best split can't be found?",
  },
]

export default function CodeBreakerGame() {
  const [activeChallenge, setActiveChallenge] = useState<CodeChallenge>(challenges[0])
  const [userCode, setUserCode] = useState<string>(challenges[0].buggyCode)
  const [result, setResult] = useState<"idle" | "success" | "error">("idle")
  const [showHint, setShowHint] = useState(false)
  const [showSolution, setShowSolution] = useState(false)

  const handleSubmit = () => {
    // Simple check - this is just a simulation
    // In a real app, you would need to actually run the code or do a more sophisticated check
    const isCorrect = userCode.includes(activeChallenge.correctCode.split("\n")[1])

    if (isCorrect) {
      setResult("success")
      // Trigger confetti effect on success
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      })
    } else {
      setResult("error")
    }
  }

  const resetChallenge = () => {
    setUserCode(activeChallenge.buggyCode)
    setResult("idle")
    setShowHint(false)
    setShowSolution(false)
  }

  const handleChallengeChange = (challengeId: string) => {
    const challenge = challenges.find((c) => c.id === challengeId) || challenges[0]
    setActiveChallenge(challenge)
    setUserCode(challenge.buggyCode)
    setResult("idle")
    setShowHint(false)
    setShowSolution(false)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              {activeChallenge.title}
            </CardTitle>
            <CardDescription>{activeChallenge.description}</CardDescription>
          </div>
          <Badge
            variant={
              activeChallenge.difficulty === "easy"
                ? "outline"
                : activeChallenge.difficulty === "medium"
                  ? "secondary"
                  : "destructive"
            }
          >
            {activeChallenge.difficulty.charAt(0).toUpperCase() + activeChallenge.difficulty.slice(1)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <Tabs defaultValue={challenges[0].id} onValueChange={handleChallengeChange}>
          <TabsList className="mb-4">
            {challenges.map((challenge) => (
              <TabsTrigger key={challenge.id} value={challenge.id}>
                Challenge {challenge.id.split("-")[1]}
              </TabsTrigger>
            ))}
          </TabsList>

          {challenges.map((challenge) => (
            <TabsContent key={challenge.id} value={challenge.id} className="space-y-4">
              <div className="relative">
                <Textarea
                  value={userCode}
                  onChange={(e) => setUserCode(e.target.value)}
                  className="font-mono h-[300px] resize-none"
                />
                {showSolution && (
                  <div className="absolute inset-0 bg-background/95 backdrop-blur-sm flex flex-col items-center justify-center p-4">
                    <h3 className="text-lg font-semibold mb-2">Solution:</h3>
                    <div className="w-full overflow-auto max-h-[250px] border rounded-md">
                      <SyntaxHighlighter language={challenge.language} style={vscDarkPlus}>
                        {challenge.correctCode}
                      </SyntaxHighlighter>
                    </div>
                    <Button variant="outline" onClick={() => setShowSolution(false)} className="mt-4">
                      Hide Solution
                    </Button>
                  </div>
                )}
              </div>

              {result === "success" && (
                <Alert
                  variant="default"
                  className="bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  <AlertTitle>Well done!</AlertTitle>
                  <AlertDescription>
                    You've successfully identified and fixed the bug. Move on to the next challenge!
                  </AlertDescription>
                </Alert>
              )}

              {result === "error" && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Not quite right</AlertTitle>
                  <AlertDescription>Your solution isn't correct yet. Try again or use a hint.</AlertDescription>
                </Alert>
              )}

              {showHint && (
                <Alert>
                  <AlertTitle>Hint</AlertTitle>
                  <AlertDescription>{challenge.hint}</AlertDescription>
                </Alert>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div>
          <Button variant="outline" onClick={() => setShowHint(!showHint)} className="mr-2">
            {showHint ? "Hide Hint" : "Show Hint"}
          </Button>
          <Button variant="outline" onClick={() => setShowSolution(!showSolution)}>
            {showSolution ? "Hide Solution" : "View Solution"}
          </Button>
        </div>
        <div>
          <Button variant="outline" onClick={resetChallenge} className="mr-2">
            <RefreshCw className="mr-2 h-4 w-4" />
            Reset
          </Button>
          <Button onClick={handleSubmit}>Check My Solution</Button>
        </div>
      </CardFooter>
    </Card>
  )
}

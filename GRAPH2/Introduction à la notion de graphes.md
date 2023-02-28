
**En cours de préparation**

```tikz
\usepackage{tikz} 
\begin{document} 
\begin{tikzpicture}[node distance={15mm}, thick, main/.style = {draw, circle}] 
\node[main] (1) {1}; 
\node[main] (2) [above right of=1] {12}; 
\node[main] (3) [below right of=1] {2}; 
\node[main] (4) [above right of=3] {3}; 
\node[main] (5) [above right of=4] {4}; 
\node[main] (6) [below right of=4] {5}; 

\draw[->] (1) -- (2); 
\draw[->] (1) -- (3); 
\draw (1) to [out=135,in=90,looseness=1.5] (5); 
\draw (1) to [out=180,in=270,looseness=5] (1); 
\draw (2) -- (4); 
\draw (3) -- (4); 
\draw (5) -- (4); 
\draw[color=green,->] (5) to [out=315, in=315, looseness=2.5] (3); 
\draw[->] (6) -- node[midway, above right, sloped, pos=1] {+1} (4); 

\end{tikzpicture} 
\end{document}
```

```tikz
\usepackage{tikz} 
\begin{document} 
\begin{tikzpicture}[node distance={25mm}, thick, main/.style = {draw, circle}] 
\node[main] (1) {Value 1}; 
\node[main] (2) [below of=1] {Value 2}; 
\node[main] (3) [below left of=1] {Value 3}; 

\draw (1) -- (2);
\draw (1) -- (3);

\end{tikzpicture} 
\end{document}
```


```tikz
\usepackage{tikz}
\usetikzlibrary{positioning}
\begin{document}
\begin{tikzpicture}[
roundnode/.style={circle, draw=green!60, very thick, minimum size=7mm},
squarednode/.style={rectangle, draw=red!60, very thick, minimum size=5mm},
]
%Nodes
\node[squarednode]      (maintopic)                              {2};
\node[roundnode]        (uppercircle)       [above=of maintopic] {1};
\node[squarednode]      (rightsquare)       [right=of maintopic] {3};
\node[roundnode]        (lowercircle)       [below=of maintopic] {4};

%Lines
\draw[->] (uppercircle.south) -- (maintopic.north);
\draw[->] (maintopic.east) -- (rightsquare.west);
\draw[->] (rightsquare.south) .. controls +(down:7mm) and +(right:7mm) .. (lowercircle.east);
\end{tikzpicture}
\end{document}
```

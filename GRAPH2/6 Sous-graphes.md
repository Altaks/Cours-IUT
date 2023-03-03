>[!important] Définition :
>Soit $G=(\textcolor{tomato}S,\textcolor{lime}A)$ un graphe (orienté ou non).
>Un **sous-graphe** de $G$ est un graphe $G'=(\textcolor{salmon}S',\textcolor{palegreen}A')$ qui ne contient que certains sommets et/ou que certaines arêtes de $G$ :
>$$\textcolor{salmon}S' \subseteq \textcolor{tomato}S \qquad \qquad  \textcolor{palegreen}A' \subseteq \textcolor{lime}A$$


```tikz
\usepackage{tikz} 
\begin{document}
\begin{tikzpicture}[
node distance={25mm},  
line width=0.45mm, 
main/.style = {draw, circle, minimum size=1cm}
] 

\node[color=red!90,main] (1) {\large$a$}; 
\node[color=red!90,main] (2) [right of=1]{\large$b$};
\node[color=red!90,main] (3) [below of=1]{\large$c$};
\node[color=red!90,main] (4) [below of=2]{\large$d$};

\draw[color=green!90] (1) -- (2);
\draw[color=green!90] (1) -- (3);
\draw[color=green!90] (3) -- (4);


\draw[color=green!90] (1) to [out=180,in=270,looseness=2.5] (4);
\draw[color=green!90] (2) to [out=180,in=0] (3);


\end{tikzpicture}
\qquad \qquad \qquad \qquad \qquad \qquad 
\begin{tikzpicture}[
node distance={25mm},  
line width=0.45mm, 
main/.style = {draw, circle, minimum size=1cm}
] 

\node[color=red!60,main] (1) {\large$a$}; 
\node[color=red!60,main] (2) [right of=1]{\large$b$};
\node[color=red!60,main] (3) [below of=1]{\large$c$};

\draw[color=green!60] (1) -- (2);
\draw[color=green!60] (2) to [out=180,in=0] (3);

\end{tikzpicture}
\end{document}
\end{document}
```

Deux types de **sous-graphes** sont **très souvent utilisés**, il s'agit des graphes **partiels** et des **sous-graphes induits**.

>[!important] Définition
>Soit $G=(\textcolor{tomato}S,\textcolor{lime}A)$ un graphe (orienté ou non).
>Un **sous-graphe** de $G$ est un graphe $G'=(\textcolor{salmon}S',\textcolor{palegreen}A')$ qui ne contient que tous les sommets et certaines arêtes de $G$ :
>$$\textcolor{salmon}S' = \textcolor{tomato}S \qquad \qquad  \textcolor{palegreen}A' \subseteq \textcolor{lime}A$$

```tikz
\usepackage{tikz} 
\begin{document}
\begin{tikzpicture}[
node distance={25mm},  
line width=0.45mm, 
main/.style = {draw, circle, minimum size=1cm}
] 

\node[color=red!90,main] (1) {\large$a$}; 
\node[color=red!90,main] (2) [right of=1]{\large$b$};
\node[color=red!90,main] (3) [below of=1]{\large$c$};
\node[color=red!90,main] (4) [below of=2]{\large$d$};

\draw[color=green!90] (1) -- (2);
\draw[color=green!90] (1) -- (3);
\draw[color=green!90] (3) -- (4);


\draw[color=green!90] (1) to [out=180,in=270,looseness=2.5] (4);
\draw[color=green!90] (2) to [out=180,in=0] (3);


\end{tikzpicture}
\qquad \qquad \qquad \qquad \qquad \qquad 
\begin{tikzpicture}[
node distance={25mm},  
line width=0.45mm, 
main/.style = {draw, circle, minimum size=1cm}
] 

\node[color=red!60,main] (1) {\large$a$}; 
\node[color=red!60,main] (2) [right of=1]{\large$b$};
\node[color=red!60,main] (3) [below of=1]{\large$c$};
\node[color=red!60,main] (4) [below of=2]{\large$d$};

\draw[color=green!60] (1) -- (3);
\draw[color=green!60] (2) to [out=180,in=0] (3);
\draw[color=green!60] (3) -- (4);

\end{tikzpicture}
\end{document}
\end{document}
```


>[!important] Définition
>Soit $G=(\textcolor{tomato}S,\textcolor{lime}A)$ un graphe (orienté ou non).
>Un **sous-graphe induit**  est un sous-graphe $G'=(\textcolor{salmon}S',\textcolor{palegreen}A')$ qui ne contient que certains sommets et toutes les arêtes de $G$ dont les extrêmités sont dans $S'$ :
>$$\textcolor{salmon}S' \subseteq \textcolor{tomato}S \qquad \qquad  \textcolor{palegreen}A' = \{(x,y) \in \textcolor{lime}A \setminus x \in \textcolor{salmon}S', y \in \textcolor{salmon}S'\}$$


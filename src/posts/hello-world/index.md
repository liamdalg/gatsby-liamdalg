---
date: '2019-06-01'
title: 'Hello World!'
description: 'An example post. This is the first one on my blog!'
header:
---

# Introduction

This is some filler text, written in Markdown. It has been transformed into nice HTML with `gatsby-transformer-remark`, alongside some other plugins. Look, some code!

```C{numberLines: true}
#include <stdio.h>

int square(int x) {
  return x * x;
}

int main() {
  printf("Hello World!\n");
  printf("This is some example code highlighting in C!\n");

  int result = square(15);
  printf("15 squared is equal to %i!\n", result);
  return 0;
}
```

`C›int x = 5;`

## Subheading

Some regular old boring text. How about _italics_? Or **bold text**?

We can even write equations such as $x^2 = 1$, powered by KaTeX!

$$
a \wedge b \implies c \iff f \vee g \\~\\
\sum_n^\infty \frac{1}{n^2} = \frac{\pi^2}{6}
$$

Finally, an image loaded with `Sharp`:

![Example Picture](gatsby-astronaut.png)

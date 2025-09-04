# Sistema de Design - GDG BH (Google Material Design)

## 🎨 Cores

### Cores Principais do Projeto

```css
/* Cores principais */
bg-google-blue        /* #4285f4 - azul principal */
bg-google-gray        /* #5f6368 - cinza */
bg-google-orange      /* #ea8600 - laranja */
bg-google-yellow      /* #fbbc04 - amarelo */
bg-google-green       /* #34a853 - verde */
bg-google-red         /* #ea4335 - vermelho */
bg-google-pink        /* #f28b82 - rosa */
bg-google-gold        /* #f9ab00 - dourado */

/* Cores de suporte */
bg-google-blue-light      /* #8ab4f8 - azul claro */
bg-google-green-light     /* #81c995 - verde claro */
bg-google-yellow-light    /* #fde293 - amarelo claro */
```

### Cores das Pílulas

```css
/* Pílulas selecionadas */
bg-pill-blue          /* #2163CE */
bg-pill-green         /* #6AA84F */
bg-pill-purple        /* #BE60DC */
bg-pill-red           /* #FF5858 */
bg-pill-orange        /* #FF9900 */

/* Pílulas não selecionadas (50% opacidade) */
bg-pill-blue-50       /* rgba(33, 99, 206, 0.5) */
bg-pill-green-50      /* rgba(106, 168, 79, 0.5) */
bg-pill-purple-50     /* rgba(190, 96, 220, 0.5) */
bg-pill-red-50        /* rgba(255, 88, 88, 0.5) */
bg-pill-orange-50     /* rgba(255, 153, 0, 0.5) */
```

### Gradientes

```css
/* Gradiente Google (azul → verde → amarelo) */
bg-gradient-google

/* Gradiente para texto */
bg-gradient-text

/* Gradiente de sessão claro */
bg-gradient-session-light

/* Gradiente de sessão */
bg-gradient-session
```

### Sombras

```css
/* Sombras personalizadas */
shadow-soft      /* Sombra suave */
shadow-medium    /* Sombra média */
```

## 📝 Exemplos de Uso

### Botões com Cores Google

```jsx
{
    /* Azul */
}
<button className="bg-google-blue text-white px-6 py-3 rounded-lg shadow-soft">Botão Azul</button>;

{
    /* Verde */
}
<button className="bg-google-green text-white px-6 py-3 rounded-lg shadow-soft">
    Botão Verde
</button>;

{
    /* Amarelo */
}
<button className="bg-google-yellow text-white px-6 py-3 rounded-lg shadow-soft">
    Botão Amarelo
</button>;

{
    /* Vermelho */
}
<button className="bg-google-red text-white px-6 py-3 rounded-lg shadow-soft">
    Botão Vermelho
</button>;
```

### Pílulas

```jsx
{/* Pílulas selecionadas */}
<div className="bg-pill-blue text-white px-4 py-2 rounded-full">
  Pílula Azul
</div>

<div className="bg-pill-green text-white px-4 py-2 rounded-full">
  Pílula Verde
</div>

<div className="bg-pill-purple text-white px-4 py-2 rounded-full">
  Pílula Roxa
</div>

{/* Pílulas não selecionadas */}
<div className="bg-pill-blue-50 text-pill-blue px-4 py-2 rounded-full">
  Pílula Azul (não selecionada)
</div>

<div className="bg-pill-green-50 text-pill-green px-4 py-2 rounded-full">
  Pílula Verde (não selecionada)
</div>
```

### Gradientes

```jsx
{
    /* Gradiente para texto */
}
<h1 className="bg-gradient-text bg-clip-text text-transparent text-4xl font-bold">
    Título com Gradiente
</h1>;

{
    /* Gradiente de sessão */
}
<div className="bg-gradient-session text-white p-8 rounded-xl">Sessão com Gradiente</div>;

{
    /* Gradiente de sessão claro */
}
<div className="bg-gradient-session-light text-gray-800 p-8 rounded-xl">
    Sessão com Gradiente Claro
</div>;
```

### Cores de Destaque

```jsx
<div className="bg-google-orange text-white p-4 rounded">
  Laranja de Destaque
</div>

<div className="bg-google-gold text-white p-4 rounded">
  Dourado de Destaque
</div>

<div className="bg-google-pink text-white p-4 rounded">
  Rosa de Destaque
</div>
```

### Texto com Cores

```jsx
<h1 className="text-google-blue text-3xl font-bold">
  Título Azul
</h1>
<p className="text-google-gray">
  Texto Cinza
</p>
```

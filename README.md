# idioma_javascript

Platzom es un idioma inventado para reforzar el conocimiento de javascript, este toma cualquier palabra
y la convierte en una cadena resultante.

## Descripción del idioma
- si la palabra termina en ar se quitan esos dos catacteres
- si la palabra incia con z, se le añade pe al final
- si la palabra traducida tiene >= 10 letras, se debe partir en la mitad y separar con un guión
- si la palabra es un palindromo, ninguna regla anterior cuenta y se devuelve la misma palabra intercambiano mayúsculas y minúsculas
### Ejm:
- programar        => program
- zorro            => zorrope
- zarpar           => zarppe
- programaticamar  => program-aticam
- abecedario       => abece-dario
- ana              => AnA

## Instalación

```
npm install idioma_javascript
```

## Uso
```
import idioma_javascript from 'idioma_javascript';
idioma_javascript("Programar");
```

## Créditos
- [Julio Sarango](https://twitter.com/jsarangoq)



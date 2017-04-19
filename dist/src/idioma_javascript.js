'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = idioma_javascript;
function idioma_javascript(str) {
    var translation = str;
    //si la palabra termina en ar se quitan esos dos catacteres
    if (str.toLowerCase().endsWith('ar')) {
        translation = str.slice(0, -2); //desde el final sacar dos caracteres                    
    }
    //si la palabra incia con z, se le añade pe al final
    if (str.toLowerCase().startsWith('z')) {
        translation += 'pe';
    }

    //si la palabra traducida tiene >= 10 letras, se debe partir en la mitad type
    //separar con un guión

    var length = translation.length;
    if (length >= 10) {
        var firstHalf = translation.slice(0, Math.round(length / 2));
        var secondHalf = translation.slice(Math.round(length / 2));
        translation = firstHalf + '-' + secondHalf;
    }

    //si la palabra es un palindromo, ninguna regla anterior cuenta
    //y se devuelve la misma palabra intercambiano mayúsculas y minúsculas

    var reverse = function reverse(str) {
        return str.split('').reverse().join('');
    };

    var minMay = function minMay(str) {
        var length = str.length;
        var translation = '';
        var capitalize = true;
        for (var i = 0; i < length; i++) {
            var char = str.charAt(i);
            translation += capitalize ? char.toUpperCase() : char.toLowerCase();
            capitalize = !capitalize;
        }
        return translation;
    };

    if (str == reverse(str)) {
        return minMay(str);
    }
    return translation;
}
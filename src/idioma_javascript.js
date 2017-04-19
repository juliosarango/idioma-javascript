export default function idioma_javascript(str) {
    let translation = str;
    //si la palabra termina en ar se quitan esos dos catacteres
    if (str.toLowerCase().endsWith('ar')) {
        translation = str.slice(0,-2); //desde el final sacar dos caracteres                    
    }
    //si la palabra incia con z, se le añade pe al final
    if (str.toLowerCase().startsWith('z')) {
        translation += 'pe';
    }

    //si la palabra traducida tiene >= 10 letras, se debe partir en la mitad type
    //separar con un guión
    
    const length = translation.length;
    if (length >= 10) {
        const firstHalf = translation.slice(0,Math.round(length/2));
        const secondHalf = translation.slice(Math.round(length/2));
        translation = `${firstHalf}-${secondHalf}`;
    }

    //si la palabra es un palindromo, ninguna regla anterior cuenta
    //y se devuelve la misma palabra intercambiano mayúsculas y minúsculas
    
    const reverse = (str) => str.split('').reverse().join('');
    
    const minMay = (str) => {
        const length = str.length;
        let translation = '';
        let capitalize = true;                    
        for (let i = 0; i < length; i++) {
            const char = str.charAt(i);                        
            translation += capitalize ? char.toUpperCase(): char.toLowerCase();
            capitalize = !capitalize;                        
        }                    
        return translation;
    }

    if (str == reverse(str)){
        return minMay(str);

    }                
    return translation;
}
const expect = require('chai').expect;
const idioma_javascript = require('..').default;

describe('#idioma_javascript', function(){
    //aca van todos los test
    it('si la palabra termina en ar se quitan esos dos catacteres', function(){
        const translation = idioma_javascript("Programar");        
        expect(translation).to.equal("Program");        
    })
    it('si la palabra incia con z, se le añade pe al final', function(){
        const translation = idioma_javascript("Zorro")
        const translation2 = idioma_javascript("Zarpar")

        expect(translation).to.equal("Zorrope")
        expect(translation2).to.equal("Zarppe")
    })
    it('si la palabra traducida tiene >= 10 letras, se debe partir en la mitad y separar con un guión', function(){
        const translation = idioma_javascript("abecedario")
        expect(translation).to.equal("abece-dario")
    })
    it('si la palabra es un palindromo, ninguna regla anterior cuenta y se devuelve la misma palabra intercambiano mayúsculas y minúsculas', function(){
        const translation = idioma_javascript("sometemos")
        expect(translation).to.equal("SoMeTeMoS")
    })
})

// Aluna:Miriã Lima Teixeira Arruda
//trabalho individual

export class Estatistica {

  private _numeros: number[];

  constructor(numeros: number[]) {
    this._numeros = numeros;
  }

  media() {
    let soma = 0;
    for (let i = 0; i < this._numeros.length; i++) {
      soma = soma + this._numeros[i];
    }
    return soma / this._numeros.length;
  }

  mediana() {

    
      
    let numerosOrdenados = this._numeros.slice();
    numerosOrdenados.sort(function(a, b) {
      return a - b;
    });

    let meio = Math.floor(numerosOrdenados.length / 2);

    if (numerosOrdenados.length % 2 === 0) {
      let valorEsquerdo = numerosOrdenados[meio - 1];
      let valorDireito = numerosOrdenados[meio];
      return (valorEsquerdo + valorDireito) / 2;
    } else {
      return numerosOrdenados[meio];
    }
    

  }

  moda() {
let moda=this._numeros[0];
let frequencia=0;
for(let i=0;i<this._numeros.length;i++){
  let conta=0;
  for(let j=0;j< this._numeros.length;j++){
    if(this._numeros[i]=== this._numeros[j]){
      conta++
    }
  }
if(conta>frequencia){
  frequencia=conta;
  moda=this._numeros[i];
}

}
return moda

}

  variancia() {

    /*let soma1 = 0;
    for (let i = 0; i < this._numeros.length; i++) {
      soma1 = soma1 + this._numeros[i];
    }
    let media = soma1 / this._numeros.length;*/
    let media = this.media();


    let recebeAoQuadradoDesvio = 0;
    for (let i = 0; i < this._numeros.length; i++) {
      let desvio = this._numeros[i] - media;
      recebeAoQuadradoDesvio = recebeAoQuadradoDesvio + (desvio ** 2);

    }


    let variancia = recebeAoQuadradoDesvio / (this._numeros.length - 1);
    return variancia;
  }




  desvioPadrao() {

    let desvioPadrao = Math.sqrt(this.variancia());
    return desvioPadrao;
  }

  coeficienteDeVariacao() {
   let media = this.media();


   let desvioPadrao=this.desvioPadrao();
   let variancia=this.variancia();


    


     desvioPadrao = Math.sqrt(variancia);
    let cV = (desvioPadrao / media) * 100;

    return cV;
  }
}


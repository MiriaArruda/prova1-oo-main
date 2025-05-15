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

    const array = [...this._numeros];
    const vetor = [];
    const tamanho = this._numeros.length;
    while (vetor.length < tamanho) {
      let menor = Math.min(...array);
      vetor.push(menor)
      let indice = array.indexOf(menor)
      array.splice(indice, 1);
    }

    if (this._numeros.length % 2 === 1) {
      return tamanho;

    }
    else {
      return (this._numeros[tamanho] = this._numeros[tamanho + 1]) / 2;

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
return moda
}


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

    let desvioPadrao = Math.sqrt(variancia);
    return desvioPadrao;
  }

  coeficienteDeVariacao() {
    let soma1 = 0;
    for (let i = 0; i < this._numeros.length; i++) {
      soma1 = soma1 + this._numeros[i];
    }
    let media = soma1 / this._numeros.length;


    let recebeAoQuadradoDesvio = 0;
    for (let i = 0; i < this._numeros.length; i++) {
      let desvio = this._numeros[i] - media;
      recebeAoQuadradoDesvio = recebeAoQuadradoDesvio + (desvio ** 2);

    }


    let variancia = recebeAoQuadradoDesvio / this._numeros.length;


    let desvioPadrao = Math.sqrt(variancia);
    let cV = (desvioPadrao / media) * 100;

    return cV;
  }
}

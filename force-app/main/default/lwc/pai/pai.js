import { LightningElement, api } from 'lwc';

export default class Pai extends LightningElement {
    @api ide;
    @api primeironome;
    @api sobrenome;
    @api idade;
    @api email;
    @api classificacao;
    @api empresa;
    @api receitaanual;
}
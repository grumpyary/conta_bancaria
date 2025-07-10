import { Conta } from "./Conta";

export class ContaCorrente extends Conta {

    private _limite: number;

    constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number, limite: number) {
        super(numero, agencia, tipo, titular, saldo);
        this._limite = limite;
    }

    public get limite() {
        return this._limite;
    }

    public set limite(limite: number) {
        this._limite = limite;
    }

    public sacar(valor: number): boolean {

        if (this.saldo + this._limite < valor) {
            console.log("\n Saldo  Insuficiente");
            return false;
        } else {
            this.saldo -= valor;
            console.log(`\n Valor Sacado: R$ ${valor.toFixed(2)}`);
            console.log(`\n Saldo Atual: R$ ${this.saldo.toFixed(2)}`);
            return true;
        }
    }   

    public visualizar(): void {
        super.visualizar();
        console.log(`Limite: R$ ${this._limite.toFixed(2)}`); 
    }
}

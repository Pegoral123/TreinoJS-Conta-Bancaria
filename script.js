class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(valor) {

        this_saldo = valor;
    }

    sacar(valor) {
        if (this._saldo > valor) {
            let resultado = this._saldo - valor;
            return `valor sacado foi de ${resultado}`;
        }
    }

    depositar(valor) {
        let resultado = this._saldo + valor;
        return `Saldo atual da conta é de ${resultado}`;
    }
}

class ContaCorrente extends ContaBancaria {

    constructor(agencia, numero, cartaoCredito) {

        super(agencia, numero);
        this.tipo = "conta corrente";
        this._cartaoCredito = cartaoCredito;
    }


    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(valor) {
        return this._cartaoCredito - valor
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero, tipo) {
        super(agencia, numero, tipo);
        this.saldo = 0;
    }

}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero, tipo) {
        super(agencia, numero, tipo);
        this._saldo = 0;
    }

    sacar(valor) {
        if (valor <= 500) {
            let resultado = this._saldo - valor;
            return `valor sacado foi de ${resultado}`;
        } else {
            return "Operação negada";
        }
    }
}
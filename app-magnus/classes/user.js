//classes destinadas a organizar os tipos de usuarios comuns possiveis no sistema
//usuarios de classes mais altas (adms) ficaram em uma classe seperada.

class usuario {
   end = {
       rua:'',
       bairro:'',
       num:''
   }

   contato = {
       numero:'',
       email:'',
       redeSocial:''
   }
   
    constructor(name, end, contato, inicio ){
        this.name,
        this.end,
        this.contato,
        this.inicio,
        // id gerado randomicamente. Esse id sera ligado com as outras categorias no banco de dados 
        this.id    
    }
}

class membro extends usuario {
       
    constructor(usuario){
        super(usuario);
        import {patente} from './patentes'
        patente = patente[0];
        pericias = [] //Começa com não-tem

    }

}

class liderOrdem extends membro {

}


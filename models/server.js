import express from 'express'
 import 'dotenv/config';
 import cors from 'cors';

export class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3001;
        this.app.use(cors());


        this.middlewares();
        this.routes();
    
    }

    middlewares(){

        this.app.use(express.static('public'));
        this.app.use(express.json());
 
    }

routes(){
        this.app.get('/', (req, res) =>{
            res.json({message: 'Peticion Get recibida'})
        })
        
         this.app.post('/', (req, res) =>{
            res.json({message: 'peticion POST recibida'})
        }) 
        
        this.app.put('/', (req, res) =>{
            res.json({message: 'Peticion PUT recibida'})
        }) 
        
        this.app.delate('/', (req, res) =>{
            res.json({message: 'Peticion PUT recibida'})
        })  
        
       
    }   

        listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }
}

export default Server;
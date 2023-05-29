import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
    constructor(){
        //super will call the constructor of the class that we are extending
        super({
            datasources:{
                db:{
                    url:"postgresql://postgres:123@localhost:5434/nest?schema=public"
                }
            }
        }) 

    }
}

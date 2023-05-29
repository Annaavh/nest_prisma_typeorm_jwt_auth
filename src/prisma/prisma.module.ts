import { Module,Global } from '@nestjs/common';
import { PrismaService } from './prisma.service';


@Global() 
//by making it global now the exports array is available for all modules 
//we dont have to import it in every module
//all modules ave access to prismaService
@Module({
  providers: [PrismaService],
  exports:[PrismaService]
})
export class PrismaModule {}

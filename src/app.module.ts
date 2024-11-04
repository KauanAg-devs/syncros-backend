import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', 
      port: 5432,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [],
    }),
  ],
})
export class AppModule {
  constructor() {
    console.log('Postgres User:', process.env.POSTGRES_USER);
    console.log('Postgres Password:', process.env.POSTGRES_PASSWORD);
    console.log('Postgres Database:', process.env.POSTGRES_DB);
  }
}

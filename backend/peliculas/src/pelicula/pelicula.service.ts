import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreatePeliculaDto } from './dto/create-pelicula.dto';
import { UpdatePeliculaDto } from './dto/update-pelicula.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pelicula } from './entities/pelicula.entity';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Injectable()
export class PeliculaService {

  private readonly logger = new Logger('PeliculasService');
  constructor(
    @InjectRepository(Pelicula)
    private readonly peliculaRepository: Repository<Pelicula>,
  ){}

 async create(createPeliculaDto: CreatePeliculaDto) {
    
    try {
      const pelicula = this.peliculaRepository.create(createPeliculaDto);
      await this.peliculaRepository.save(pelicula);
      return pelicula;

   } catch (error){
      this.handleDBExceptions(error);
    }
  }

  findAll(paginationDto: PaginationDto) {

    const {limit =10, offset = 0} = paginationDto;

    return this.peliculaRepository.find({
      take: limit,
      skip: offset,
      // TODO: Relaciones...
    });
  }

  async findOne(id_pelicula: number) {
    const pelicula = this.peliculaRepository.findOneBy({id_pelicula});
    if(!pelicula)
      throw new NotFoundException(`La Pelicula con ${id_pelicula} no se encuentra...`)
    return pelicula;
  }

  async update(id_pelicula: number, updatePeliculaDto: UpdatePeliculaDto) {
    const pelicula = await this.peliculaRepository.preload({
      id_pelicula: id_pelicula,
      ...updatePeliculaDto
    });
    if(!pelicula) throw new NotFoundException(`Pelicula con id: ${id_pelicula} no se encuentra!!`);
    try {
      await this.peliculaRepository.save(pelicula);
      return pelicula;  
    } catch (error) {
      this.handleDBExceptions(error);
    }
    
    
  }

  async remove(id_pelicula: number) {
    const pelicula = await this.findOne(id_pelicula);
    await this.peliculaRepository.remove(pelicula);
  }

  private handleDBExceptions( error: any ) {

    if ( error.code === '23505' )
      throw new BadRequestException(error.detail);
    
    this.logger.error(error)
    // console.log(error)
    throw new InternalServerErrorException('Unexpected error, check server logs');

  }

}


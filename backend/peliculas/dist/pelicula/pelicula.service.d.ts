import { CreatePeliculaDto } from './dto/create-pelicula.dto';
import { UpdatePeliculaDto } from './dto/update-pelicula.dto';
import { Repository } from 'typeorm';
import { Pelicula } from './entities/pelicula.entity';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
export declare class PeliculaService {
    private readonly peliculaRepository;
    private readonly logger;
    constructor(peliculaRepository: Repository<Pelicula>);
    create(createPeliculaDto: CreatePeliculaDto): Promise<Pelicula>;
    findAll(paginationDto: PaginationDto): Promise<Pelicula[]>;
    findOne(id_pelicula: number): Promise<Pelicula>;
    update(id_pelicula: number, updatePeliculaDto: UpdatePeliculaDto): Promise<Pelicula>;
    remove(id_pelicula: number): Promise<void>;
    private handleDBExceptions;
}

import { Pelicula } from './entities/pelicula.entity';
import { PeliculaService } from './pelicula.service';
import { CreatePeliculaDto } from './dto/create-pelicula.dto';
import { UpdatePeliculaDto } from './dto/update-pelicula.dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
export declare class PeliculaController {
    private readonly peliculaService;
    constructor(peliculaService: PeliculaService);
    create(createPeliculaDto: CreatePeliculaDto): Promise<Pelicula>;
    findAll(paginationDto: PaginationDto): Promise<Pelicula[]>;
    findOne(id: string): Promise<Pelicula>;
    update(id: string, updatePeliculaDto: UpdatePeliculaDto): Promise<Pelicula>;
    remove(id: string): Promise<void>;
}

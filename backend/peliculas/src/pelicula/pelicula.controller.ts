import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { Pelicula } from './entities/pelicula.entity';
import { PeliculaService } from './pelicula.service';
import { CreatePeliculaDto } from './dto/create-pelicula.dto';
import { UpdatePeliculaDto } from './dto/update-pelicula.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { PaginationDto } from 'src/common/dtos/pagination.dto';


@ApiTags('pelicula')
@Controller('pelicula')
export class PeliculaController {
  constructor(private readonly peliculaService: PeliculaService) {}

  @Post()
  @ApiResponse({status: 201, description: 'Pelicula was created', type: Pelicula})
  @ApiResponse({status: 400, description: 'Bad Request'})
  //@ApiResponse({status: 403, description: 'Forhidden, Token related'})
  
  create(@Body() createPeliculaDto: CreatePeliculaDto) {
    return this.peliculaService.create(createPeliculaDto);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.peliculaService.findAll(paginationDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.peliculaService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string, 
    @Body() updatePeliculaDto: UpdatePeliculaDto,
    ) {
    return this.peliculaService.update(+id, updatePeliculaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.peliculaService.remove(+id);
  }

}

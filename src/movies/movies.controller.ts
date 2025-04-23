import { Controller, Delete, Get, Param, Post, Patch, Body, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';

@Controller('movies')
export class MoviesController {

  // Service 접근요청
  constructor(private readonly moviesService: MoviesService) { }

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  // searching directorName
  @Get('search')
  search(@Query("director") searchingDirectorName: string) {
    return this.moviesService.findDirector(searchingDirectorName);
  }

  @Get(':movieId')
  getOne(@Param('movieId') movieId: number): Movie | undefined {
    return this.moviesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData: Movie) {
    return this.moviesService.create(movieData);
  }

  @Delete(':movieId')
  remove(@Param('movieId') movieId: number) {
    return this.moviesService.deleteOne(movieId)
  }

  @Patch(':movieId')
  path(@Param('movieId') movieId: number, @Body() updateData: Movie) {
    return this.moviesService.update(movieId, updateData)
  }




}

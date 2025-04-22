import { Controller, Delete, Get, Param, Post, Patch, Body, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {

  @Get()
  getAll() {
    return 'This will return all movies';
  }

  // searching directorName
  @Get('search')
  search(@Query("director") searchingDirectorName: string) {
    return `Searching movie which title is : ${searchingDirectorName}`
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return `This will return movie with id: ${id}`;
  }

  @Post()
  create(@Body() movieData: Record<string, any>) {
    return movieData;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This will delete ${id} movie`
  }

  @Patch(':id')
  path(@Param('id') id: string, @Body() updateData: Record<string, any>) {
    return {
      updatedMovie: id,
      ...updateData
    }
  }




}

import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { UpdateMovieDTO } from './dto/update-movie.dto';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: number): Movie | undefined {
    const movie = this.movies.find((movie) => movie.id == id);
    if (!movie) {
      throw new NotFoundException(`Movie with ID: ${id} Not Found`);
    }
    return movie;
  }

  deleteOne(id: number) {
    this.getOne(id);
    this.movies = this.movies.filter((movie) => movie.id !== +id);
  }

  create(movieData: CreateMovieDTO) {
    this.movies.push({
      ...movieData,
      id: this.movies.length + 1,
    });
  }

  update(id: number, updateData: UpdateMovieDTO) {
    const movie = this.getOne(id);
    this.deleteOne(id);
    this.movies.push({ ...movie, ...updateData });
  }

  findDirector(director: string): Movie | undefined {
    return this.movies.find((movie) => movie.director == director);
  }
}

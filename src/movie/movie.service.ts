import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MovieService {

    private movies: Movie[] = [];

    getAll(): Movie[] {
        return this.movies;
    }

    getOne(id:string): Movie {
        return this.movies[parseInt(id)];
    }

    create(movieData) {
        this.movies.push({
            "id": this.movies.length + 1,
            ...movieData,
        })
        return;
    }

    deleteOne(id:string) {
        this.getOne(id);
        //대충 삭제하는 코드
    }



}

import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { Movie } from './entities/movie.entity';
import { MovieService } from './movie.service';

@Controller('movie')
export class MovieController {

    constructor(private readonly movieservice: MovieService) {}

    @Get()
    getAll():Movie[] {
        return this.movieservice.getAll();
    }

    // @Get(':id')
    // getID(@Param('id') gettingID: string) {
    //     return `the ID you are looking for is : ${gettingID}`;
    // }

    @Get(':id')
    getOne(@Param('id') gettingID: string): Movie {
        const movie = this.movieservice.getOne(gettingID);
        if(!movie) {
            throw new NotFoundException(`movie with ID ${gettingID} not found`);
        }
        return movie;
    }

    @Post()
    create(@Body() movieInfo: {director: string;
        title: string;
        year: number;
        genres: string[];}) {
        this.movieservice.create(movieInfo);
    }

    

}

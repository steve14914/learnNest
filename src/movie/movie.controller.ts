import { Controller, Get, Param, Post, Body } from '@nestjs/common';

@Controller('movie')
export class MovieController {

    @Get()
    getDefault() {
        return 'asdf';
    }

    @Get(':id')
    getID(@Param('id') gettingID: string) {
        return `the ID you are looking for is : ${gettingID}`;
    }

    @Post(':id')
    getMovieInfo(@Param('id') gettingID: string, @Body() movieInfo) {
        return {
            id: gettingID,
            ...movieInfo,
        }

    }

}

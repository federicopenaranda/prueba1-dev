import { Controller, Get, Query, Param, Post, Put, Patch, Body, Delete, ParseIntPipe, UseGuards, ParseBoolPipe, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';
import { CreateUserDto, QueryUserDto } from './dto';
import { UserService } from '../user/user.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

	@Get()
	@ApiQuery({ type: QueryUserDto })
	async getAllUser(@Query() query: QueryUserDto) {
		const paginatedUsers = await this.userService.getAllUser(query);
		return {
			message: 'getAllUser',
			paginatedUsers,
		};
	}

    @Get('/verify-email/:email')
    async verifyNewUserEmail(
        @Param('email') email: string
    ) {
        const result = await this.userService.verifyNewUserEmail(email.trim().toLowerCase());
        return { success: result }
    }

	//@UseGuards(JwtAuthGuard)
    @Get(':id')
    async getUser(@Param('id', ParseIntPipe) id: number) {
        const user = await this.userService.getUser(id);
        return {
            message: 'getUser',
            data: [user],
        };
    }

    @Post()
    async createUser(@Body() dto: CreateUserDto) {
        return await this.userService.createUser(dto);
    }


}
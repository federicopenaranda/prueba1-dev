import { IsNotEmpty } from 'class-validator';

export class RefreshJwtDto {
	@IsNotEmpty()
	refreshToken: string;
}

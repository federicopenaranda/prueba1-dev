import { Transform, TransformFnParams } from 'class-transformer';
import { IsString, IsOptional, IsNumber, IsInt } from 'class-validator';

export class QueryUserDto {
	@IsString()
	@IsOptional()
	filter?: string;

	@IsString()
	@Transform((sort: TransformFnParams) => {
		return !sort.value ? 'ASC' : `${sort.value}`;
	})
	sort?: string;

	@IsString()
	@IsOptional()
	@Transform((sortColumn: TransformFnParams) => {
		return !sortColumn.value ? 'id_usuario' : `${sortColumn.value}`;
	})
	sortColumn?: string;

	@IsNumber()
	@IsOptional()
	@Transform((pageNumber: TransformFnParams) => {
		return +pageNumber.value <= 0 ? 0 : +pageNumber.value;
	})
	pageNumber?: number;

	@IsNumber()
	@IsInt()
	@Transform((pageSize: TransformFnParams) => {
		return !+pageSize.value ? 10 : +pageSize.value;
	})
	pageSize!: number;
}

import { Injectable } from '@nestjs/common';
import { sign, verify, decode } from 'jsonwebtoken';

@Injectable()
export class JwtUtilService {
	getTokenData(validToken: string) {
		return decode(validToken.replace('Bearer ', ''), { json: true });
	}
}

import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import GoogleTokenStrategy from 'passport-google-id-token'
import dotenv from 'dotenv';

import UserServices from '../services/user'

dotenv.config()

const Client_ID = process.env.CLIENT_ID as string

export const googleStrategy = new GoogleTokenStrategy(
    {clientID: Client_ID},
    async (parsedToken, googleId: string, done) => {
        console.log(parsedToken, 'parsedToken')
        const userPayload = {
            fullName: parsedToken.payload.given_name,
            email: parsedToken.payload.email
        }
        const user = await UserServices.createOrFindUserByEmail(userPayload)
        done(null, user)
    }
)
import { Strategy, ExtractJwt } from 'passport-jwt'
import UserFacadeFactory from '../../../domain/users/factory/facade.factory';
import config from '../config';

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.authSecret
};

module.exports = (passport: any) => {
    passport.use(
        new Strategy(opts, (payload, done) => {
            const facadeUser = UserFacadeFactory.create()
            facadeUser.findUser({ id: payload.id })
                .then(user => {
                    if (user) {
                        return done(null, {
                            id: user.id,
                            username: user.username,
                        });
                    }
                    return done(null, false);
                }).catch(err => console.error(err));
        })
    );
};
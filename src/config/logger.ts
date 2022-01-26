import winston, { Logger } from 'winston';

const LoggerWrapper = (): Logger => {
   return winston.createLogger({
      transports: [new winston.transports.Console()],
      exitOnError: false,
   });
};

export const logger = LoggerWrapper();

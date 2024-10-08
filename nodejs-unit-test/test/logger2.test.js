import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

const logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.ms(),
        winston.format.json()
    ),
    transports: [
        // new winston.transports.Console(),
        new DailyRotateFile({
            filename: "rotated-%DATE%.log",
            datePattern: "YYYY-MM-DD_HH:mm:ss",
            zippedArchive: true,
            maxSize: "10k",
            maxFiles: "30d",
        }),
    ],
});

test("create new rotating logger", () => {
    for (let index = 0; index < 1000; index++) {
        logger.info(`Hello World`);
    }
});

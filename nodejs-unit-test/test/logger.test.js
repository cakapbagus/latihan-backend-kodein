import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

const logger = winston.createLogger({
    level: "silly",
    // format: winston.format.simple(),
    // format: winston.format.printf((info) => {
    //     return `${new Date().toISOString()} ${info.level.toUpperCase()}: ${
    //         info.message
    //     }`;
    // }),
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.ms(),
        winston.format.json()
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: "app.log" }),
        new winston.transports.File({ filename: "error.log", level: "error" }),
        new DailyRotateFile({
            filename: "rotated-%DATE%.log",
            datePattern: "YYYY-MM-DD HH:mm:ss",
            zippedArchive: true,
            maxSize: "1m",
            maxFiles: "30d",
        }),
    ],
});

test("create new logger", () => {
    logger.log({
        level: "info",
        message: "Hello Logger",
    });

    // create all example logger level with existing logger
    logger.log({
        level: "error",
        message: "Hello Logger",
    });

    logger.log({
        level: "warn",
        message: "Hello Logger",
    });

    logger.log({
        level: "debug",
        message: "Hello Logger",
    });

    logger.log({
        level: "verbose",
        message: "Hello Logger",
    });

    logger.log({
        level: "silly",
        message: "Hello Logger",
    });

    logger.log({
        level: "http",
        message: "Hello Logger",
    });

    logger.error("Hello Logger");
});

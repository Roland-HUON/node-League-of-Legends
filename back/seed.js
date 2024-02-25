import { PrismaClient } from "@prisma/client";
import championsImported from './champions.json' assert { type: "json" };

const prisma = new PrismaClient()

const seed = async () => {
    for (let champions of championsImported) {
        await prisma.champions.create({
            data: {
                name: champions.name,
                type: champions.type,
            }
        })
    }
}

seed();
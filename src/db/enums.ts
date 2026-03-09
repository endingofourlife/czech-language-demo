import { pgEnum } from "drizzle-orm/pg-core";
import {ConjugationTypes} from "@/lib/constants";

export const ConjugationTypeEnum = pgEnum(
    "conjugation_type",
    ConjugationTypes
);
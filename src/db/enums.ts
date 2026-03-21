import { pgEnum } from "drizzle-orm/pg-core";
import {ConjugationTypes} from "@/shared/constants/conjugations";

export const ConjugationTypeEnum = pgEnum(
    "conjugation_type",
    ConjugationTypes
);
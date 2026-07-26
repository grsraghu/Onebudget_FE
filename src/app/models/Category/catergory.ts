import { Basenaming } from "../Abstract/basenaming";
import { Subcategory } from "./subcategory";

export interface Category extends Basenaming
{
icon: string;
subcategories: Subcategory[];
}



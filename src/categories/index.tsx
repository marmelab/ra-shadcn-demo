import { ResourceProps } from "ra-core";
import { CategoryList } from "./CategoryList";

export const categories: ResourceProps = {
	name: "categories",
	list: CategoryList,
	recordRepresentation: "name",
};
